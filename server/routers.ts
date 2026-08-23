import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM, listLLMModels } from "./_core/llm";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  organizer: router({
    generateDescription: publicProcedure.input(z.object({ keywords: z.string().trim().min(3).max(360), tone: z.enum(["professional", "casual", "exciting"]).default("professional"), title: z.string().trim().max(120).optional(), venue: z.string().trim().max(120).optional(), date: z.string().trim().max(80).optional() })).mutation(async ({ input }) => {
      const { data } = await listLLMModels();
      const model = data.find((candidate) => candidate.id === "gpt-5-mini")?.id ?? data.find((candidate) => candidate.id === "gpt-5-nano")?.id;
      if (!model) throw new Error("No text-generation model is available for the organizer assistant.");
      const response = await invokeLLM({
        model,
        maxTokens: 260,
        messages: [
          { role: "system", content: `You write polished, concrete event descriptions for the EventPulse platform. Produce one engaging 75-110 word paragraph. Use a ${input.tone} tone: ${input.tone === "professional" ? "clear, polished, and confident" : input.tone === "casual" ? "warm, approachable, and conversational" : "vivid, energetic, and momentum-building"}. Include only details supported by the organizer input. Do not invent performers, sponsors, endorsements, availability, accessibility claims, pricing, reviews, or logistical facts. Do not use markdown.` },
          { role: "user", content: `Keywords: ${input.keywords}\nTitle: ${input.title || "Not yet named"}\nVenue: ${input.venue || "Not supplied"}\nDate and time: ${input.date || "Not supplied"}` },
        ],
        response_format: { type: "json_schema", json_schema: { name: "event_description", strict: true, schema: { type: "object", properties: { description: { type: "string", minLength: 60, maxLength: 900 } }, required: ["description"], additionalProperties: false } } },
      });
      const content = response.choices[0]?.message.content;
      if (typeof content !== "string") throw new Error("The organizer assistant returned an invalid description.");
      const parsed = JSON.parse(content) as { description?: string };
      if (!parsed.description) throw new Error("The organizer assistant returned an empty description.");
      return { description: parsed.description.trim() };
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
