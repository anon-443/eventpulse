import { describe, expect, it, vi } from "vitest";

vi.mock("./_core/llm", () => ({
  listLLMModels: vi.fn(),
  invokeLLM: vi.fn(),
}));

import { invokeLLM, listLLMModels } from "./_core/llm";
import { appRouter } from "./routers";

describe("organizer.generateDescription", () => {
  it("uses the available workhorse model and returns a structured description", async () => {
    vi.mocked(listLLMModels).mockResolvedValue({ data: [{ id: "gpt-5-mini" }] } as never);
    vi.mocked(invokeLLM).mockResolvedValue({ choices: [{ index: 0, finish_reason: "stop", message: { role: "assistant", content: JSON.stringify({ description: "An intimate late-night listening session with local musicians, warm conversation, and a room designed for lingering after the last note." }) } }] } as never);
    const caller = appRouter.createCaller({ user: null, req: {} as never, res: {} as never });

    const result = await caller.organizer.generateDescription({ keywords: "intimate jazz, local musicians, warm cocktails", title: "After Hours", venue: "The Glasshouse" });

    expect(result.description).toContain("intimate late-night listening session");
    expect(invokeLLM).toHaveBeenCalledWith(expect.objectContaining({ model: "gpt-5-mini" }));
  });
});
