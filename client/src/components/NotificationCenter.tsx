// EventPulse style reminder: notification center is a compact printed bulletin — only relevant, preference-aware signals in the platform’s coral/cobalt ticket language.
import { Bell, CalendarClock, CheckCircle2, ChevronRight, Ticket } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type Preferences = { countdown?: boolean; booking?: boolean; weekly?: boolean };
const storageKey = "eventpulse-notification-preferences-v1";

function loadPreferences(): Preferences { try { return JSON.parse(localStorage.getItem(storageKey) ?? "{}"); } catch { return {}; } }

export default function NotificationCenter() {
  const [preferences, setPreferences] = useState<Preferences>({});
  const [open, setOpen] = useState(false);
  useEffect(() => { const sync = () => setPreferences(loadPreferences()); sync(); window.addEventListener("storage", sync); return () => window.removeEventListener("storage", sync); }, []);
  const alerts = useMemo(() => {
    const all = [
      { key: "countdown", icon: CalendarClock, tone: "text-[var(--pulse-coral)]", label: "The Listening Room", detail: "Doors open in 2 days · Glasshouse, Brooklyn", stamp: "COUNTDOWN" },
      { key: "booking", icon: Ticket, tone: "text-[var(--pulse-cobalt)]", label: "Ticket confirmation ready", detail: "Your scannable admission pass is saved for The Listening Room.", stamp: "BOOKING" },
      { key: "weekly", icon: Bell, tone: "text-[var(--pulse-sun)]", label: "Your weekly pulse", detail: "Two saved events are coming into focus this week.", stamp: "WEEKLY" },
    ];
    return all.filter((alert) => preferences[alert.key as keyof Preferences] !== false);
  }, [preferences]);
  return <DropdownMenu open={open} onOpenChange={setOpen}><DropdownMenuTrigger asChild><button className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-[var(--pulse-coral)] hover:text-[var(--pulse-coral)]" aria-label="Open notification center"><Bell size={17} />{alerts.length > 0 && <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[var(--pulse-coral)] ring-2 ring-background" />}</button></DropdownMenuTrigger><DropdownMenuContent align="end" className="ticket-notch w-[min(23rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border-border bg-card p-0 shadow-[0_20px_60px_rgba(31,33,37,.18)]"><div className="flex items-center justify-between bg-[var(--pulse-ink)] px-5 py-4 text-white"><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[var(--pulse-sun)]">Notification center</p><p className="mt-1 font-display text-xl font-semibold">Small signals, kept useful.</p></div><span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold">{alerts.length}</span></div><div className="ticket-dashes h-px text-border" />{alerts.length ? <div className="p-2">{alerts.map(({ key, icon: Icon, tone, label, detail, stamp }) => <a href={key === "booking" ? "/profile" : "/#events"} key={key} onClick={() => setOpen(false)} className="group flex gap-3 rounded-xl p-3 transition hover:bg-muted"><span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted ${tone}`}><Icon size={17} /></span><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-2"><span className="text-sm font-semibold">{label}</span><span className="text-[9px] font-bold tracking-[.12em] text-muted-foreground">{stamp}</span></span><span className="mt-1 block text-xs leading-5 text-muted-foreground">{detail}</span></span><ChevronRight size={15} className="mt-2 shrink-0 text-muted-foreground opacity-0 transition group-hover:opacity-100" /></a>)}</div> : <div className="p-7 text-center"><CheckCircle2 className="mx-auto text-[var(--pulse-cobalt)]" size={24} /><p className="mt-3 font-semibold">All clear for now.</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Turn on a preference in your profile to receive relevant event signals here.</p></div>}<div className="border-t border-dashed border-border px-5 py-3"><a href="/profile" onClick={() => setOpen(false)} className="text-xs font-bold text-[var(--pulse-cobalt)] hover:text-[var(--pulse-coral)]">Tune notification preferences <ChevronRight className="inline" size={13} /></a></div></DropdownMenuContent></DropdownMenu>;
}
