// EventPulse style reminder: organizer workspace keeps the Sunlit Editorial Festival identity — warm paper, coral action, cobalt navigation, tactile ticket stubs, and composed editorial asymmetry.
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Bold,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  ImagePlus,
  Italic,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  List,
  Moon,
  Sparkles,
  Ticket,
  Sun,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useTheme } from "../contexts/ThemeContext";
import { OrganizerEventDraftDialog } from "@/components/OrganizerEventDraftDialog";
import { scopedKey } from "@/lib/localIdentity";
import { appPath } from "@/lib/appPath";

type ManagedEvent = {
  id: number;
  name: string;
  date: string;
  venue: string;
  status: "Live" | "Draft" | "Past";
  sold: number;
  capacity: number;
  revenue: string;
  tone: string;
};

const initialEvents: ManagedEvent[] = [
  { id: 1, name: "The Listening Room", date: "18 Oct · 7:30 PM", venue: "The Glasshouse", status: "Live", sold: 420, capacity: 500, revenue: "$20,160", tone: "bg-[var(--pulse-coral)]" },
  { id: 2, name: "New Forms / New Friends", date: "26 Oct · 10:00 AM", venue: "Northside Studio", status: "Live", sold: 186, capacity: 220, revenue: "$13,392", tone: "bg-[var(--pulse-cobalt)]" },
  { id: 3, name: "Objects With a Point of View", date: "27 Nov · 7:00 PM", venue: "The Archive Hall", status: "Draft", sold: 0, capacity: 150, revenue: "—", tone: "bg-[var(--pulse-sun)]" },
  { id: 4, name: "Open Studio Night", date: "04 Sep · 6:30 PM", venue: "Practice Space", status: "Past", sold: 140, capacity: 140, revenue: "$5,600", tone: "bg-stone-400" },
];

function PulseMark() {
  return <a href={appPath()} className="flex items-center gap-2.5">
    <span className="relative h-9 w-9 shrink-0"><span className="absolute inset-[5px] rounded-full bg-[var(--pulse-coral)]" /><span className="absolute left-[-1px] top-[8px] h-5 w-10 rotate-[-28deg] rounded-full border-2 border-[var(--pulse-cobalt)] border-l-transparent border-b-transparent" /><span className="absolute left-[15px] top-[17px] h-[3px] w-5 rotate-[-12deg] rounded-full bg-[var(--pulse-cobalt)]" /></span>
    <span className="text-[1.42rem] leading-none"><span className="font-display italic font-semibold tracking-[-.085em]">Event</span><span className="ml-1 font-body text-[.98rem] font-bold uppercase tracking-[-.07em] text-[var(--pulse-coral)]">Pulse</span></span>
  </a>;
}

function LegacyAddEventDialog({ close, onAdd }: { close: () => void; onAdd: (event: ManagedEvent) => void }) {
  const [form, setForm] = useState({ name: "", date: "", venue: "", capacity: "120" });
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const formatDescription = (command: "bold" | "italic" | "insertUnorderedList") => { descriptionRef.current?.focus(); document.execCommand(command); };
  const chooseImage = (event: React.ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (!file) return; if (!file.type.startsWith("image/")) { setError("Choose an image file for the event cover."); return; } if (imagePreview?.startsWith("blob:")) URL.revokeObjectURL(imagePreview); setImagePreview(URL.createObjectURL(file)); setError(""); };
  const save = () => {
    if (!form.name.trim() || !form.date.trim() || !form.venue.trim()) { setError("A title, date, and venue make the plan real."); return; }
    onAdd({ id: Date.now(), name: form.name, date: form.date, venue: form.venue, status: "Draft", sold: 0, capacity: Number(form.capacity) || 120, revenue: "—", tone: "bg-[var(--pulse-cobalt)]" });
    toast.success("Draft event added to your calendar.");
    close();
  };
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end bg-black/45 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6" onMouseDown={(event) => event.target === event.currentTarget && close()}>
    <motion.div initial={{ opacity: 0, y: 28, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} className="ticket-notch w-full max-w-xl rounded-t-[2rem] bg-background p-6 shadow-2xl sm:rounded-[2rem] sm:p-8">
      <div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--pulse-coral)]">New event</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-.04em]">Put a new idea on the calendar.</h2></div><button onClick={close} className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground" aria-label="Close"><X size={17} /></button></div>
      <div className="ticket-dashes mt-6 h-px text-border" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="sm:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-[.13em]">Event title</span><input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="e.g. After Hours: Live Session" className="focus-ring h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none" /></label>
        <label><span className="mb-2 block text-xs font-bold uppercase tracking-[.13em]">Date & time</span><input value={form.date} onChange={(event) => update("date", event.target.value)} placeholder="12 Dec · 7:00 PM" className="focus-ring h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none" /></label>
        <label><span className="mb-2 block text-xs font-bold uppercase tracking-[.13em]">Capacity</span><input value={form.capacity} onChange={(event) => update("capacity", event.target.value)} inputMode="numeric" className="focus-ring h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none" /></label>
        <label className="sm:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-[.13em]">Venue</span><input value={form.venue} onChange={(event) => update("venue", event.target.value)} placeholder="Where is it happening?" className="focus-ring h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none" /></label>
        <div className="sm:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-[.13em]">Event cover</span><label className="group flex min-h-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-muted/60 transition hover:border-[var(--pulse-coral)] hover:bg-[rgba(240,90,71,.04)]">{imagePreview ? <div className="relative h-[180px] w-full"><img src={imagePreview} alt="Event cover preview" className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-10 text-xs font-bold text-white">Change cover image</div></div> : <div className="flex flex-col items-center p-6 text-center"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(240,90,71,.12)] text-[var(--pulse-coral)]"><ImagePlus size={20} /></span><p className="mt-3 text-sm font-semibold">Drop in the event’s visual signal</p><p className="mt-1 text-xs text-muted-foreground">PNG, JPG, or WEBP · preview before saving</p></div>}<input type="file" accept="image/png,image/jpeg,image/webp" onChange={chooseImage} className="sr-only" /></label></div>
        <div className="sm:col-span-2"><div className="mb-2 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.13em]">Event description</span><span className="text-[10px] font-medium text-muted-foreground">Rich text draft</span></div><div className="overflow-hidden rounded-2xl border border-border bg-background"><div className="flex items-center gap-1 border-b border-border bg-muted/50 p-2"><button type="button" onMouseDown={(event) => { event.preventDefault(); formatDescription("bold"); }} className="rounded-lg p-2 text-muted-foreground hover:bg-background hover:text-[var(--pulse-cobalt)]" aria-label="Bold description"><Bold size={15} /></button><button type="button" onMouseDown={(event) => { event.preventDefault(); formatDescription("italic"); }} className="rounded-lg p-2 text-muted-foreground hover:bg-background hover:text-[var(--pulse-cobalt)]" aria-label="Italic description"><Italic size={15} /></button><button type="button" onMouseDown={(event) => { event.preventDefault(); formatDescription("insertUnorderedList"); }} className="rounded-lg p-2 text-muted-foreground hover:bg-background hover:text-[var(--pulse-cobalt)]" aria-label="List description"><List size={15} /></button></div><div ref={descriptionRef} contentEditable suppressContentEditableWarning role="textbox" aria-multiline="true" data-placeholder="Set the mood, share the important details, and give people a reason to show up." className="min-h-[128px] p-4 text-sm leading-6 outline-none empty:before:pointer-events-none empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground" /></div></div>
      </div>
      {error && <p className="mt-4 rounded-xl bg-[rgba(240,90,71,.09)] px-3 py-2.5 text-xs font-semibold text-[var(--pulse-coral)]">{error}</p>}
      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button onClick={close} className="rounded-full border border-border px-5 py-3 text-sm font-bold">Cancel</button><button onClick={save} className="button-press rounded-full bg-[var(--pulse-coral)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--pulse-coral-dark)]">Save draft <ArrowRight className="ml-1 inline" size={15} /></button></div>
    </motion.div>
  </motion.div>;
}

function MetricTicket({ icon: Icon, label, value, note, tone, ink = false }: { icon: typeof Ticket; label: string; value: string; note: string; tone: string; ink?: boolean }) {
  return <article className={`ticket-notch relative overflow-hidden rounded-2xl border p-5 shadow-[0_12px_30px_rgba(37,36,31,.04)] ${ink ? "border-[var(--pulse-ink)] bg-[var(--pulse-ink)] text-white" : "border-border bg-card"}`}>
    <div className="flex items-start justify-between"><div className={`rounded-xl p-2.5 ${ink ? "bg-white/10 text-[var(--pulse-sun)]" : `${tone} bg-opacity-10`}`}><Icon size={19} /></div><span className={`text-[10px] font-bold uppercase tracking-[.14em] ${ink ? "text-white/45" : "text-muted-foreground"}`}>pulse report</span></div>
    <p className={`mt-7 text-sm ${ink ? "text-white/60" : "text-muted-foreground"}`}>{label}</p><p className="mt-1 font-display text-4xl font-semibold tracking-[-.04em]">{value}</p>
    <div className={`ticket-dashes mt-5 h-px ${ink ? "text-white/25" : "text-border"}`} /><p className={`mt-3 text-xs ${ink ? "text-white/55" : "text-muted-foreground"}`}>{note}</p>
  </article>;
}

type TicketBranding = { themeColor: string; logo: string };
const ticketBrandingKey = "eventpulse-ticket-branding-v1";
const initialTicketBranding: TicketBranding = { themeColor: "#1C1917", logo: "EP" };
const ticketPalette = ["#1C1917", "#F05A47", "#2E2925", "#B88212", "#4D7C62"];

function TicketCustomizationPanel() {
  const [branding, setBranding] = useState<TicketBranding>(() => {
    try { return { ...initialTicketBranding, ...JSON.parse(localStorage.getItem(scopedKey(ticketBrandingKey)) ?? "{}") }; }
    catch { return initialTicketBranding; }
  });
  const persist = (next: TicketBranding) => {
    setBranding(next);
    localStorage.setItem(scopedKey(ticketBrandingKey), JSON.stringify(next));
    window.dispatchEvent(new Event("eventpulse:ticket-branding-updated"));
  };
  return <section className="ticket-notch mt-7 overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-[0_12px_30px_rgba(37,36,31,.04)]"><div className="grid gap-0 lg:grid-cols-[1.1fr_.9fr]"><div className="p-5 sm:p-7"><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[var(--pulse-coral)]">Ticket customization</p><h2 className="mt-1 font-display text-3xl font-semibold tracking-[-.04em]">Make the pass feel like the event.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Choose a theme color and short logo mark for locally generated 3D pass previews. This is a visual preview setting, not a production ticket-validation system.</p><div className="mt-6 flex flex-wrap gap-2">{ticketPalette.map((color) => <button key={color} onClick={() => persist({ ...branding, themeColor: color })} className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${branding.themeColor === color ? "border-[var(--pulse-ink)]" : "border-transparent"}`} style={{ backgroundColor: color }} aria-label={`Use ${color} as ticket color`}>{branding.themeColor === color && <span className="h-2.5 w-2.5 rounded-full bg-white" />}</button>)}</div><label className="mt-6 block max-w-xs"><span className="mb-2 block text-xs font-bold uppercase tracking-[.13em]">Logo mark</span><input value={branding.logo} maxLength={3} onChange={(event) => persist({ ...branding, logo: event.target.value.toUpperCase() })} placeholder="EP" className="focus-ring h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-bold uppercase outline-none" /><span className="mt-2 block text-xs text-muted-foreground">Up to three characters; used on wallet ticket previews.</span></label></div><div className="flex items-center justify-center bg-[var(--pulse-paper)] p-7 dark:bg-muted"><article className="ticket-notch w-full max-w-sm rounded-2xl p-5 text-white shadow-[0_16px_35px_rgba(37,36,31,.16)]" style={{ backgroundColor: branding.themeColor }}><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-sm font-black">{branding.logo || "EP"}</span><span className="text-[10px] font-bold uppercase tracking-[.16em] text-white/65">3D pass</span></div><p className="mt-10 font-display text-3xl font-semibold leading-none">Ticketed<br />with intent.</p><div className="ticket-dashes mt-8 h-px text-white/30" /><div className="mt-4 flex justify-between text-xs font-semibold text-white/70"><span>Theme preview</span><span>Local only</span></div></article></div></div></section>;
}

export default function Dashboard() {
  const { theme, toggleTheme } = useTheme();
  const [events, setEvents] = useState(initialEvents);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const openDraft = () => setIsAddOpen(true); window.addEventListener("eventpulse:open-description-draft", openDraft); return () => window.removeEventListener("eventpulse:open-description-draft", openDraft); }, []);
  const addEvent = (event: ManagedEvent) => setEvents((current) => [event, ...current]);
  const nav = [{ icon: LayoutDashboard, label: "Overview", active: true }, { icon: CalendarDays, label: "Events" }, { icon: Ticket, label: "Bookings" }, { icon: Users, label: "Audience" }, { icon: BarChart3, label: "Insights" }];
  return <div className="min-h-screen bg-background text-foreground"><div className="flex min-h-screen">
    <aside className="hidden w-[260px] shrink-0 flex-col border-r border-border bg-[var(--pulse-paper)] p-6 dark:bg-card lg:flex"><PulseMark /><p className="mt-12 text-[10px] font-bold uppercase tracking-[.18em] text-muted-foreground">Organizer space</p><nav className="mt-4 space-y-1">{nav.map(({ icon: Icon, label, active }) => <button key={label} onClick={() => !active && toast.info(`${label} is ready for the next organizer workflow.`)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? "bg-[var(--pulse-cobalt)] text-white shadow-[0_8px_18px_rgba(21,71,165,.17)]" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}><Icon size={17} />{label}</button>)}</nav><div className="ticket-notch mt-auto rounded-2xl bg-[var(--pulse-ink)] p-5 text-white"><Sparkles className="text-[var(--pulse-sun)]" size={19} /><p className="mt-5 font-display text-xl font-semibold leading-tight">A good event starts with a clear plan.</p><div className="ticket-dashes mt-4 h-px text-white/25" /><button onClick={() => setIsAddOpen(true)} className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[var(--pulse-sun)]">Create an event <ArrowRight size={13} /></button></div></aside>
    <main className="min-w-0 flex-1 paper-grid"><header className="flex h-[76px] items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-7"><div className="flex items-center gap-3 lg:hidden"><button onClick={() => setMobileOpen((current) => !current)} className="rounded-full border border-border p-2"><Menu size={18} /></button><PulseMark /></div><div className="hidden lg:block"><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[var(--pulse-coral)]">Organizer hub</p><p className="mt-1 text-sm text-muted-foreground">Good morning, Studio Sunday.</p></div><div className="flex items-center gap-3"><button onClick={toggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-[var(--pulse-coral)]" aria-label="Toggle theme">{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button><a href={appPath("/profile")} className="hidden rounded-full px-3 py-2 text-sm font-semibold hover:text-[var(--pulse-coral)] sm:block">My profile</a><button onClick={() => setIsAddOpen(true)} className="button-press inline-flex items-center gap-2 rounded-full bg-[var(--pulse-coral)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--pulse-coral-dark)]"><Plus size={16} /><span className="hidden sm:inline">Add event</span></button></div></header>
      {mobileOpen && <div className="border-b border-border bg-background p-4 lg:hidden"><div className="grid grid-cols-2 gap-2">{nav.map(({ icon: Icon, label }) => <button key={label} className="flex items-center gap-2 rounded-xl bg-muted p-3 text-sm font-semibold" onClick={() => toast.info(`${label} view selected`)}><Icon size={16} />{label}</button>)}</div></div>}
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-7 sm:py-10"><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--pulse-coral)]">Weekly printout · 14–20 Oct</p><h1 className="mt-2 font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">The pulse looks <span className="text-[var(--pulse-cobalt)]">healthy.</span></h1></div><button onClick={() => setIsAddOpen(true)} className="button-press inline-flex items-center justify-center gap-2 rounded-full border border-[var(--pulse-coral)] bg-background px-5 py-3 text-sm font-bold text-[var(--pulse-coral)] hover:bg-[rgba(240,90,71,.08)]"><Plus size={16} /> New event</button></div>
        <TicketCustomizationPanel />
        <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><MetricTicket icon={Ticket} label="Tickets reserved" value="1,248" note="Up 18.4% from last 30 days" tone="text-[var(--pulse-coral)]" /><MetricTicket icon={CircleDollarSign} label="Gross ticket sales" value="$42.8k" note="Before platform and payment fees" tone="text-[var(--pulse-cobalt)]" /><MetricTicket icon={Users} label="Returning attendees" value="36%" note="Across this season’s events" tone="text-[var(--pulse-ink)]" /><MetricTicket icon={Clock3} label="The Listening Room" value="in 2 days" note="Doors at 7:00 PM · Brooklyn" tone="text-[var(--pulse-sun)]" ink /></section>
        <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_.65fr]"><div className="ticket-notch rounded-[1.6rem] border border-border bg-card p-5 shadow-[0_12px_30px_rgba(37,36,31,.04)] sm:p-7"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[var(--pulse-cobalt)]">Booking momentum</p><h2 className="mt-1 font-display text-3xl font-semibold tracking-[-.04em]">A good week, in lines.</h2></div><span className="rounded-full bg-[rgba(240,90,71,.09)] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-[var(--pulse-coral)]">Live report</span></div><div className="mt-7 grid gap-5 md:grid-cols-[1fr_130px]"><div className="flex h-[250px] items-end gap-3 border-b border-l border-border px-5 pb-2 pt-5 sm:gap-5">{[34, 48, 42, 69, 60, 82, 96].map((height, index) => <div key={height} className="group flex h-full flex-1 flex-col justify-end"><div className="relative rounded-t-xl bg-[var(--pulse-cobalt)] transition group-hover:bg-[var(--pulse-coral)]" style={{ height: `${height}%` }}><span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded-md bg-[var(--pulse-ink)] px-2 py-1 text-[10px] font-bold text-white group-hover:block">{[112, 168, 149, 221, 196, 284, 332][index]}</span></div><span className="mt-3 text-center text-[10px] font-semibold text-muted-foreground">{["M", "T", "W", "T", "F", "S", "S"][index]}</span></div>)}</div><aside className="rounded-2xl bg-[var(--pulse-paper)] p-4 dark:bg-muted"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[var(--pulse-coral)]">Peak moment</p><p className="mt-5 font-display text-3xl font-semibold leading-none">332</p><p className="mt-2 text-xs leading-5 text-muted-foreground">confirmed bookings landed on Sunday after the community link went live.</p><div className="ticket-dashes mt-5 h-px text-border" /><button onClick={() => toast.info("A detailed booking export is ready for your data connection.")} className="mt-4 flex items-center gap-1 text-xs font-bold text-[var(--pulse-cobalt)]">Read the signal <ChevronRight size={13} /></button></aside></div></div><div className="ticket-notch overflow-hidden rounded-[1.6rem] border border-border bg-[var(--pulse-ink)] text-white"><div className="p-6"><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[var(--pulse-sun)]">Traffic source</p><h2 className="mt-1 font-display text-3xl font-semibold leading-[.95] tracking-[-.04em]">Where bookings begin.</h2><p className="mt-3 text-sm leading-6 text-white/62">A simple map of the people who carried the invitation forward.</p></div><div className="ticket-dashes h-px text-white/25" /><div className="space-y-5 p-6">{[["EventPulse discovery", "47%", "bg-[var(--pulse-coral)]"], ["Direct link", "31%", "bg-[var(--pulse-cobalt)]"], ["Social / shared", "14%", "bg-[var(--pulse-sun)]"], ["Partner referral", "8%", "bg-stone-400"]].map(([label, value, color]) => <div key={label}><div className="flex justify-between text-sm"><span>{label}</span><span className="font-bold">{value}</span></div><div className="mt-2 h-2 rounded-full bg-white/15"><div className={`h-full rounded-full ${color}`} style={{ width: value }} /></div></div>)}</div></div></section>
        <section className="mt-6 overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-[0_12px_30px_rgba(37,36,31,.04)]"><div className="flex flex-col gap-4 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[var(--pulse-coral)]">Your calendar</p><h2 className="mt-1 font-display text-3xl font-semibold tracking-[-.04em]">Events in motion.</h2></div><div className="flex gap-2"><label className="flex h-10 items-center gap-2 rounded-full border border-border bg-background px-3 text-muted-foreground"><Search size={15} /><input placeholder="Find an event" className="w-28 bg-transparent text-xs outline-none" /></label><button onClick={() => setIsAddOpen(true)} className="hidden rounded-full bg-[var(--pulse-coral)] px-4 py-2 text-xs font-bold text-white sm:block">Add event</button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead className="bg-[var(--pulse-paper)] text-[10px] uppercase tracking-[.14em] text-muted-foreground dark:bg-muted"><tr><th className="px-5 py-4 font-bold">Event</th><th className="px-5 py-4 font-bold">Date / venue</th><th className="px-5 py-4 font-bold">Status</th><th className="px-5 py-4 font-bold">Tickets</th><th className="px-5 py-4 font-bold">Sales</th><th className="px-5 py-4" /></tr></thead><tbody>{events.map((event) => <tr key={event.id} className="border-t border-dashed border-border text-sm"><td className="px-5 py-4"><div className="flex items-center gap-3"><span className={`h-10 w-1.5 rounded-full ${event.tone}`} /><span className="font-semibold">{event.name}</span></div></td><td className="px-5 py-4"><p>{event.date}</p><p className="mt-1 text-xs text-muted-foreground">{event.venue}</p></td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${event.status === "Live" ? "bg-[rgba(240,90,71,.1)] text-[var(--pulse-coral)]" : event.status === "Draft" ? "bg-[rgba(21,71,165,.08)] text-[var(--pulse-cobalt)]" : "bg-muted text-muted-foreground"}`}>{event.status}</span></td><td className="px-5 py-4"><div className="flex items-center gap-3"><span className="font-semibold">{event.sold}/{event.capacity}</span><span className="h-1.5 w-16 overflow-hidden rounded-full bg-border"><span className="block h-full rounded-full bg-[var(--pulse-coral)]" style={{ width: `${Math.min(100, (event.sold / event.capacity) * 100)}%` }} /></span></div></td><td className="px-5 py-4 font-semibold">{event.revenue}</td><td className="px-5 py-4"><button onClick={() => toast.info(`Opening ${event.name} management tools.`)} className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"><MoreHorizontal size={18} /></button></td></tr>)}</tbody></table></div></section>
      </div>
    </main>
  </div><AnimatePresence>{isAddOpen && <OrganizerEventDraftDialog close={() => setIsAddOpen(false)} onAdd={addEvent} />}</AnimatePresence></div>;
}
