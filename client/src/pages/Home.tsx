// EventPulse style reminder: Sunlit Editorial Festival — editorial asymmetry, warm paper surfaces, coral action moments, cobalt wayfinding, ticket-stub geometry, and purposeful motion.
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Facebook,
  Flame,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Minus,
  Moon,
  Music2,
  Palette,
  Phone,
  Pin,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Ticket,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useTheme } from "../contexts/ThemeContext";
import { MapView } from "@/components/Map";

type Category = "All" | "Music" | "Tech" | "Design" | "Workshops" | "Festivals";
type EventType = "All types" | "In-person" | "Hybrid";
type PriceFilter = "Any price" | "Under $50" | "$50–$100" | "$100+";
type DateFilter = "Any date" | "This week" | "This month";

type EventItem = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  type: Exclude<EventType, "All types">;
  date: string;
  dateShort: string;
  month: string;
  time: string;
  venue: string;
  location: string;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  hot?: boolean;
  attendees: string;
  organizer: string;
  organizerRole: string;
  color: string;
  agenda: { time: string; title: string; detail: string }[];
};

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "The Listening Room",
    category: "Music",
    type: "In-person",
    date: "Fri, 18 Oct 2026",
    dateShort: "18 Oct",
    month: "OCT",
    time: "7:30 PM — 11:00 PM",
    venue: "The Glasshouse",
    location: "Brooklyn, NY",
    price: 48,
    description: "A close-up night of new voices, warm rooms, and the songs you’ll be talking about on the way home.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=86",
    featured: true,
    hot: true,
    attendees: "420 going",
    organizer: "Sunday Social Club",
    organizerRole: "Independent music curators",
    color: "coral",
    agenda: [
      { time: "7:30 PM", title: "Doors & first pour", detail: "Find a spot, say hello, stay awhile." },
      { time: "8:15 PM", title: "Mina Okafor", detail: "Intimate set, full band." },
      { time: "9:25 PM", title: "The Listening Room", detail: "Three new voices, one shared stage." },
    ],
  },
  {
    id: 2,
    title: "New Forms / New Friends",
    category: "Design",
    type: "In-person",
    date: "Sat, 26 Oct 2026",
    dateShort: "26 Oct",
    month: "OCT",
    time: "10:00 AM — 4:00 PM",
    venue: "Northside Studio",
    location: "London, UK",
    price: 72,
    description: "A hands-on day for designers who want fewer slides and more making, with generous prompts and good coffee.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=86",
    featured: true,
    attendees: "186 going",
    organizer: "Good Brief Society",
    organizerRole: "Design practice community",
    color: "cobalt",
    agenda: [
      { time: "10:00 AM", title: "Open studio breakfast", detail: "Meet your table and your first prompt." },
      { time: "11:30 AM", title: "Material thinking", detail: "A workshop in texture, color, and instinct." },
      { time: "2:00 PM", title: "Show the work", detail: "Low-pressure shares from every table." },
    ],
  },
  {
    id: 3,
    title: "The Human Side of AI",
    category: "Tech",
    type: "Hybrid",
    date: "Thu, 07 Nov 2026",
    dateShort: "07 Nov",
    month: "NOV",
    time: "6:00 PM — 9:00 PM",
    venue: "The Foundry",
    location: "Austin, TX + online",
    price: 35,
    description: "A candid salon about the systems we’re building, the people inside them, and what still deserves a human touch.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=86",
    hot: true,
    attendees: "612 going",
    organizer: "Signal & Craft",
    organizerRole: "Independent technology salon",
    color: "sun",
    agenda: [
      { time: "6:00 PM", title: "Welcome + open bar", detail: "A little context before the big questions." },
      { time: "6:45 PM", title: "Three honest case studies", detail: "What shipped, what broke, what changed." },
      { time: "8:00 PM", title: "Ask better questions", detail: "Audience-led conversation and closing notes." },
    ],
  },
  {
    id: 4,
    title: "Small Hours, Big Ideas",
    category: "Workshops",
    type: "In-person",
    date: "Sun, 10 Nov 2026",
    dateShort: "10 Nov",
    month: "NOV",
    time: "9:00 AM — 1:00 PM",
    venue: "The Reading Room",
    location: "Chicago, IL",
    price: 24,
    description: "A slow Sunday workshop for turning the idea you keep carrying into a first, imperfect, real step.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=86",
    attendees: "84 going",
    organizer: "Open Table",
    organizerRole: "Creative practice studio",
    color: "cobalt",
    agenda: [
      { time: "9:00 AM", title: "Coffee + arrival", detail: "Make a little room for the morning." },
      { time: "9:45 AM", title: "Find the thread", detail: "A guided exercise in clarity and momentum." },
      { time: "11:30 AM", title: "Make the map", detail: "Leave with your next three steps." },
    ],
  },
  {
    id: 5,
    title: "Sunday on the Green",
    category: "Festivals",
    type: "In-person",
    date: "Sun, 17 Nov 2026",
    dateShort: "17 Nov",
    month: "NOV",
    time: "12:00 PM — 8:00 PM",
    venue: "Prospect Park Bandshell",
    location: "Brooklyn, NY",
    price: 18,
    description: "A soft landing into the week ahead: live sets, local makers, picnic blankets, and the long way home.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=86",
    hot: true,
    attendees: "1.2k going",
    organizer: "The Sunday Assembly",
    organizerRole: "Neighborhood festival makers",
    color: "coral",
    agenda: [
      { time: "12:00 PM", title: "Market opens", detail: "Makers, food, and a little sunshine." },
      { time: "3:00 PM", title: "Live stage", detail: "Four local acts across one easy afternoon." },
      { time: "6:30 PM", title: "Golden hour finale", detail: "Bring your favorite people to the front." },
    ],
  },
  {
    id: 6,
    title: "Objects With a Point of View",
    category: "Design",
    type: "Hybrid",
    date: "Wed, 27 Nov 2026",
    dateShort: "27 Nov",
    month: "NOV",
    time: "7:00 PM — 9:30 PM",
    venue: "The Archive Hall",
    location: "San Francisco, CA + online",
    price: 110,
    description: "Five makers. Five objects. One evening about making things that ask to be kept, not just clicked.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=86",
    attendees: "240 going",
    organizer: "Form / Function",
    organizerRole: "Object culture journal",
    color: "sun",
    agenda: [
      { time: "7:00 PM", title: "Doors + gallery", detail: "Explore the collection before the talks." },
      { time: "7:45 PM", title: "Five short stories", detail: "The why behind the object." },
      { time: "8:45 PM", title: "A considered close", detail: "Meet the makers and keep the conversation going." },
    ],
  },
];

const categories: { label: Category; icon: typeof Music2 }[] = [
  { label: "All", icon: Sparkles },
  { label: "Music", icon: Music2 },
  { label: "Tech", icon: Zap },
  { label: "Design", icon: Palette },
  { label: "Workshops", icon: Users },
  { label: "Festivals", icon: Sun },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${compact ? "scale-90 origin-left" : ""}`}>
      <div className="relative h-9 w-9 shrink-0">
        <div className="absolute inset-[5px] rounded-full bg-[var(--pulse-coral)] shadow-[0_4px_12px_rgba(240,90,71,.22)]" />
        <span className="absolute left-[-1px] top-[8px] h-5 w-10 rotate-[-28deg] rounded-full border-2 border-[var(--pulse-cobalt)] border-l-transparent border-b-transparent" />
        <span className="absolute left-[15px] top-[17px] h-[3px] w-5 rotate-[-12deg] rounded-full bg-[var(--pulse-cobalt)]" />
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[var(--pulse-sun)] ring-2 ring-background" />
      </div>
      <span className="font-display text-[1.42rem] font-semibold tracking-[-0.04em] text-foreground">Event<span className="text-[var(--pulse-coral)]">Pulse</span></span>
    </div>
  );
}

function SectionEyebrow({ children, tone = "coral" }: { children: React.ReactNode; tone?: "coral" | "cobalt" }) {
  return <p className={`mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${tone === "coral" ? "text-[var(--pulse-coral)]" : "text-[var(--pulse-cobalt)]"}`}><span className={`h-1.5 w-1.5 rounded-full ${tone === "coral" ? "bg-[var(--pulse-coral)]" : "bg-[var(--pulse-cobalt)]"}`} />{children}</p>;
}

function EventImage({ event, className = "" }: { event: EventItem; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[var(--pulse-sand)] ${className}`}>
      <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
      {event.hot && <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--pulse-coral)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_14px_rgba(240,90,71,.28)]"><Flame size={12} fill="currentColor" /> Hot pick</span>}
      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--pulse-ink)] backdrop-blur">{event.category}</span>
    </div>
  );
}

function FilterSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="relative block min-w-[132px] flex-1">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="focus-ring h-12 w-full appearance-none rounded-2xl border border-border bg-background px-4 pr-9 text-sm font-medium text-foreground outline-none transition hover:border-[var(--pulse-coral)]">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </label>
  );
}

function EventCard({ event, onOpen, onBook, large = false }: { event: EventItem; onOpen: () => void; onBook: () => void; large?: boolean }) {
  return (
    <motion.article layout className="group relative overflow-hidden rounded-[1.4rem] border border-border bg-card shadow-[0_16px_50px_rgba(37,36,31,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,36,31,.12)]">
      <button onClick={onOpen} className="focus-ring block w-full text-left" aria-label={`View details for ${event.title}`}>
        <EventImage event={event} className={large ? "aspect-[1.75/1]" : "aspect-[1.35/1]"} />
        <div className="p-5 pb-4">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex items-start gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--pulse-coral)]"><CalendarDays size={14} /><span><span className="block">{event.dateShort}</span><span className="mt-1 block text-[10px] font-medium tracking-[.06em] text-muted-foreground">{event.time}</span></span></div>
          </div>
          <h3 className="font-display text-[1.55rem] font-semibold leading-[1.02] tracking-[-0.035em] text-card-foreground">{event.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{event.description}</p>
        </div>
      </button>
      <button onClick={() => toast.success("Saved to your shortlist")} className="focus-ring absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-[var(--pulse-ink)] shadow-sm backdrop-blur transition hover:bg-white hover:text-[var(--pulse-coral)]" aria-label={`Save ${event.title}`}><Heart size={16} /></button>
      <div className="ticket-notch mx-5 flex items-center justify-between border-t border-dashed border-border py-4 text-xs">
        <div className="flex min-w-0 items-center gap-2 text-muted-foreground"><MapPin size={14} className="shrink-0 text-[var(--pulse-cobalt)]" /><span className="truncate">{event.location}</span></div>
        <span className="shrink-0 pl-3 font-bold text-card-foreground">from ${event.price}</span>
      </div>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Users size={14} /> {event.attendees}</span>
        <button onClick={onBook} className="button-press focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--pulse-coral)] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[var(--pulse-coral-dark)]">Book ticket <ArrowRight size={14} /></button>
      </div>
    </motion.article>
  );
}

function ModalShell({ children, onClose, wide = false }: { children: React.ReactNode; onClose: () => void; wide?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(31,33,37,.48)] p-0 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <motion.div initial={{ opacity: 0, y: 32, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: .98 }} transition={{ type: "spring", damping: 25, stiffness: 280 }} className={`relative max-h-[92vh] w-full overflow-y-auto rounded-t-[2rem] bg-background shadow-[0_30px_100px_rgba(0,0,0,.22)] sm:rounded-[2rem] ${wide ? "max-w-5xl" : "max-w-xl"}`}>
        <button onClick={onClose} className="focus-ring absolute right-5 top-5 z-10 rounded-full bg-background/80 p-2 text-muted-foreground backdrop-blur transition hover:bg-muted hover:text-foreground" aria-label="Close dialog"><X size={18} /></button>
        {children}
      </motion.div>
    </motion.div>
  );
}

function VenueMap({ event }: { event: EventItem }) {
  const coordinates: Record<number, google.maps.LatLngLiteral> = {
    1: { lat: 40.6782, lng: -73.9442 },
    2: { lat: 51.5078, lng: -0.1281 },
    3: { lat: 30.2672, lng: -97.7431 },
    4: { lat: 41.8781, lng: -87.6298 },
    5: { lat: 40.6630, lng: -73.9698 },
    6: { lat: 37.7749, lng: -122.4194 },
  };
  const center = coordinates[event.id] ?? coordinates[1];
  return <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-muted"><MapView key={event.id} className="h-[260px] sm:h-[300px]" initialCenter={center} initialZoom={14} onMapReady={(map) => { if (window.google?.maps?.marker?.AdvancedMarkerElement) new window.google.maps.marker.AdvancedMarkerElement({ map, position: center, title: event.venue }); }} /></div>;
}

function EventDetails({ event, onClose, onBook }: { event: EventItem; onClose: () => void; onBook: () => void }) {
  return (
    <ModalShell onClose={onClose} wide>
      <div className="grid lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-[640px]">
          <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute bottom-7 left-7 right-7 text-white">
            <span className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur">{event.category} · {event.type}</span>
            <h2 className="font-display text-4xl font-semibold leading-[.96] tracking-[-0.045em] sm:text-5xl">{event.title}</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">{event.description}</p>
          </div>
        </div>
        <div className="p-6 sm:p-9 lg:p-10">
          <div className="grid grid-cols-2 gap-4 border-b border-border pb-7 text-sm sm:grid-cols-3">
            <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">When</p><p className="font-semibold">{event.date}</p><p className="mt-1 text-muted-foreground">{event.time}</p></div>
            <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">Where</p><p className="font-semibold">{event.venue}</p><p className="mt-1 text-muted-foreground">{event.location}</p></div>
            <div className="col-span-2 sm:col-span-1"><p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">Tickets from</p><p className="font-display text-2xl font-semibold">${event.price}</p><p className="mt-1 text-muted-foreground">All fees shown at checkout</p></div>
          </div>
          <div className="py-7">
            <SectionEyebrow tone="cobalt">A little itinerary</SectionEyebrow>
            <div className="relative mt-5 space-y-6 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-border">
              {event.agenda.map((item, index) => <div key={item.time} className="relative flex gap-5"><span className={`relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-background ${index === 1 ? "bg-[var(--pulse-coral)]" : "bg-[var(--pulse-cobalt)]"}`} /><div><p className="text-[11px] font-bold uppercase tracking-[.14em] text-[var(--pulse-coral)]">{item.time}</p><p className="mt-1 font-semibold">{item.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p></div></div>)}
            </div>
          </div>
          <div className="border-t border-border py-7">
            <SectionEyebrow>Hosted by</SectionEyebrow>
            <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--pulse-sun)] font-display text-lg font-semibold text-[var(--pulse-ink)]">{event.organizer.charAt(0)}</div><div><p className="font-semibold">{event.organizer}</p><p className="text-sm text-muted-foreground">{event.organizerRole}</p></div><span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--pulse-cobalt)]"><ShieldCheck size={14} /> Verified host</span></div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-[var(--pulse-sand)] p-5 dark:bg-muted"><div className="absolute -right-4 -top-5 text-[var(--pulse-coral)] opacity-20"><Pin size={70} /></div><p className="relative text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">Venue note</p><p className="relative mt-2 max-w-sm text-sm leading-6">Easy to reach, good acoustics, and a bar that knows when to keep the music low.</p></div>
          <div className="pt-7"><SectionEyebrow tone="cobalt">Find the room</SectionEyebrow><p className="text-sm text-muted-foreground">Explore the venue, zoom in for access routes, or open the map fullscreen.</p><VenueMap event={event} /></div>
          <div className="border-t border-border pt-7"><SectionEyebrow>Participant notes</SectionEyebrow><div className="rounded-2xl border border-dashed border-border bg-muted/60 p-5"><p className="font-semibold">No participant notes yet</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Reviews and ratings appear here only after verified attendees share feedback. There are no fabricated reviews in EventPulse.</p><button onClick={() => toast.info("Verified attendee feedback opens after the event.")} className="button-press mt-4 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold hover:border-[var(--pulse-coral)] hover:text-[var(--pulse-coral)]">How attendee feedback works</button></div></div>
          <button onClick={onBook} className="button-press mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--pulse-coral)] px-5 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(240,90,71,.22)] transition hover:bg-[var(--pulse-coral-dark)]">Book your spot <ArrowRight size={17} /></button>
        </div>
      </div>
    </ModalShell>
  );
}

function StepPill({ current, number, label }: { current: number; number: number; label: string }) {
  const active = current >= number;
  return <div className={`flex items-center gap-2 text-xs font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}><span className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] ${active ? "border-[var(--pulse-coral)] bg-[var(--pulse-coral)] text-white" : "border-border"}`}>{current > number ? <Check size={14} /> : number}</span><span className="hidden sm:inline">{label}</span></div>;
}

function BookingFlow({ event, onClose }: { event: EventItem; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", card: "", expiry: "", cvc: "", upi: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");
  const subtotal = event.price * quantity;
  const serviceFee = Math.round(subtotal * 0.06);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee + tax;
  const update = (key: string, value: string) => setForm((previous) => ({ ...previous, [key]: value }));

  const validateDetails = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Tell us your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (form.phone.replace(/\D/g, "").length < 7) next.phone = "Add a contact number";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const validatePayment = () => {
    const next: Record<string, string> = {};
    if (paymentMethod === "card") {
      if (form.card.replace(/\D/g, "").length < 12) next.card = "Enter a valid card number";
      if (form.expiry.length < 4) next.expiry = "Use MM/YY";
      if (form.cvc.length < 3) next.cvc = "Check your CVC";
    } else if (!form.upi.includes("@")) next.upi = "Enter a valid UPI ID";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const nextStep = () => {
    if (step === 1 && validateDetails()) setStep(2);
    else if (step === 2 && validatePayment()) { setStep(3); toast.success("Ticket reserved — see you there."); }
  };

  if (step === 3) return <ModalShell onClose={onClose}><div className="p-7 sm:p-10"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(240,90,71,.12)] text-[var(--pulse-coral)]"><Check size={34} strokeWidth={2.5} /></div><p className="mt-7 text-[11px] font-bold uppercase tracking-[.18em] text-[var(--pulse-coral)]">You’re on the list</p><h2 className="mt-3 font-display text-4xl font-semibold leading-[.98] tracking-[-.045em]">The good kind of confirmation.</h2><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Your tickets for <span className="font-semibold text-foreground">{event.title}</span> are reserved. We sent the details to {form.email}.</p><div className="ticket-notch mt-8 rounded-2xl bg-[var(--pulse-ink)] p-5 text-white"><div className="flex items-start justify-between gap-4"><div><p className="font-display text-2xl font-semibold">{event.title}</p><p className="mt-2 text-xs text-white/65">{event.date} · {event.time}</p><p className="mt-1 text-xs text-white/65">{event.venue}, {event.location}</p></div><div className="qr-grid h-20 w-20 shrink-0 rounded-lg bg-white p-2">{Array.from({ length: 49 }).map((_, index) => <span key={index} className={((index * 13 + index * index) % 7 < 3) ? "bg-[var(--pulse-ink)]" : "bg-white"} />)}</div></div><div className="mt-5 flex items-center justify-between border-t border-dashed border-white/25 pt-4 text-xs"><span>{form.name}</span><span>{quantity} {quantity === 1 ? "ticket" : "tickets"}</span><span className="font-bold">EP-{String(event.id).padStart(3, "0")}24</span></div></div><div className="mt-7 flex flex-col gap-3 sm:flex-row"><button onClick={() => { const blob = new Blob([`EventPulse ticket\n${event.title}\n${event.date}\n${event.venue}\nName: ${form.name}\nTickets: ${quantity}`], { type: "text/plain" }); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "eventpulse-ticket.txt"; link.click(); URL.revokeObjectURL(url); toast.success("Ticket summary downloaded"); }} className="button-press flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--pulse-ink)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--pulse-coral)]"><Ticket size={16} /> Download ticket</button><button onClick={onClose} className="button-press flex-1 rounded-full border border-border px-5 py-3 text-sm font-bold transition hover:border-[var(--pulse-coral)] hover:text-[var(--pulse-coral)]">Back to events</button></div></div></ModalShell>;

  return <ModalShell onClose={onClose}><div className="p-6 sm:p-9"><div className="flex items-center justify-between border-b border-border pb-6"><div><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[var(--pulse-coral)]">Reserve your spot</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-.04em]">{event.title}</h2></div><div className="text-right"><p className="font-display text-2xl font-semibold">${total}</p><p className="text-xs text-muted-foreground">{quantity} {quantity === 1 ? "ticket" : "tickets"}</p></div></div><div className="flex items-center gap-4 border-b border-border py-5"><StepPill current={step} number={1} label="Your details" /><div className="h-px flex-1 bg-border" /><StepPill current={step} number={2} label="Payment" /><div className="h-px flex-1 bg-border" /><StepPill current={step} number={3} label="Confirmed" /></div>{step === 1 ? <div className="space-y-5 pt-7"><div className="grid gap-5 sm:grid-cols-2"><div className="sm:col-span-2"><label className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">Full name</label><input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={`focus-ring h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none ${errors.name ? "border-destructive" : "border-border"}`} />{errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}</div><div><label className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">Email address</label><input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className={`focus-ring h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none ${errors.email ? "border-destructive" : "border-border"}`} />{errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}</div><div><label className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">Phone number</label><input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+1 555 000 0000" className={`focus-ring h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none ${errors.phone ? "border-destructive" : "border-border"}`} />{errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}</div></div><div className="rounded-2xl bg-muted p-4"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">How many tickets?</p><p className="mt-1 text-xs text-muted-foreground">Maximum 6 per order</p></div><div className="flex items-center gap-3 rounded-full bg-background p-1"><button disabled={quantity === 1} onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-40" aria-label="Decrease tickets"><Minus size={15} /></button><span className="w-5 text-center text-sm font-bold">{quantity}</span><button disabled={quantity === 6} onClick={() => setQuantity((current) => Math.min(6, current + 1))} className="flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-muted disabled:opacity-40" aria-label="Increase tickets"><Plus size={15} /></button></div></div></div><div className="flex items-center justify-between border-t border-dashed border-border pt-5 text-sm"><span className="text-muted-foreground">${event.price} × {quantity} tickets</span><span className="font-semibold">${subtotal}</span></div><button onClick={nextStep} className="button-press flex w-full items-center justify-center gap-2 rounded-full bg-[var(--pulse-coral)] px-5 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(240,90,71,.2)] hover:bg-[var(--pulse-coral-dark)]">Continue to payment <ArrowRight size={16} /></button></div> : <div className="space-y-5 pt-7"><div className="flex gap-2"><button onClick={() => setPaymentMethod("card")} className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${paymentMethod === "card" ? "border-[var(--pulse-cobalt)] bg-[rgba(21,71,165,.07)] text-[var(--pulse-cobalt)]" : "border-border text-muted-foreground"}`}><CreditCard size={16} /> Card</button><button onClick={() => setPaymentMethod("upi")} className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${paymentMethod === "upi" ? "border-[var(--pulse-cobalt)] bg-[rgba(21,71,165,.07)] text-[var(--pulse-cobalt)]" : "border-border text-muted-foreground"}`}>UPI</button></div>{paymentMethod === "card" ? <><div><label className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">Card number</label><input value={form.card} onChange={(e) => update("card", e.target.value)} placeholder="4242 4242 4242 4242" className={`focus-ring h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none ${errors.card ? "border-destructive" : "border-border"}`} />{errors.card && <p className="mt-1.5 text-xs text-destructive">{errors.card}</p>}</div><div className="grid grid-cols-2 gap-5"><div><label className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">Expiry</label><input value={form.expiry} onChange={(e) => update("expiry", e.target.value)} placeholder="MM / YY" className="focus-ring h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none" /></div><div><label className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">CVC</label><input value={form.cvc} onChange={(e) => update("cvc", e.target.value)} placeholder="123" className="focus-ring h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none" /></div></div></> : <div><label className="mb-2 block text-xs font-bold uppercase tracking-[.12em]">UPI ID</label><input value={form.upi} onChange={(e) => update("upi", e.target.value)} placeholder="name@bank" className={`focus-ring h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none ${errors.upi ? "border-destructive" : "border-border"}`} />{errors.upi && <p className="mt-1.5 text-xs text-destructive">{errors.upi}</p>}</div>}<div className="rounded-2xl bg-muted p-4 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">Tickets</span><span>${subtotal}</span></div><div className="mt-2 flex justify-between"><span className="text-muted-foreground">Service fee + tax</span><span>${serviceFee + tax}</span></div><div className="mt-3 flex justify-between border-t border-border pt-3 font-bold"><span>Total</span><span>${total}</span></div></div><div className="flex flex-col gap-3 sm:flex-row"><button onClick={() => setStep(1)} className="button-press flex-1 rounded-full border border-border px-5 py-3.5 text-sm font-bold hover:border-[var(--pulse-coral)]">Back</button><button onClick={nextStep} className="button-press flex-[2] rounded-full bg-[var(--pulse-coral)] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(240,90,71,.2)] hover:bg-[var(--pulse-coral-dark)]">Pay ${total} <ArrowRight className="ml-1 inline" size={16} /></button></div><p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground"><ShieldCheck size={14} className="text-[var(--pulse-cobalt)]" /> Secure checkout · This is a demo payment flow</p></div>}</div></ModalShell>;
}

function AppHeader({ onMenu, mobileOpen, onTheme, dark }: { onMenu: () => void; mobileOpen: boolean; onTheme: () => void; dark: boolean }) {
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl"><div className="container flex h-[76px] items-center justify-between"><a href="#top" className="focus-ring"><BrandMark /></a><nav className="hidden items-center gap-7 lg:flex"><a href="#events" className="text-sm font-semibold text-muted-foreground transition hover:text-foreground">Explore events</a><a href="#categories" className="text-sm font-semibold text-muted-foreground transition hover:text-foreground">Categories</a><a href="#how-it-works" className="text-sm font-semibold text-muted-foreground transition hover:text-foreground">How it works</a><a href="/organizer" className="text-sm font-semibold text-[var(--pulse-cobalt)] transition hover:text-[var(--pulse-coral)]">Organizer hub</a></nav><div className="hidden items-center gap-3 sm:flex"><button onClick={onTheme} className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-[var(--pulse-coral)] hover:text-[var(--pulse-coral)]" aria-label="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button><a href="/profile" className="focus-ring rounded-full px-4 py-2.5 text-sm font-semibold text-foreground transition hover:text-[var(--pulse-coral)]">Account</a><a href="/profile" className="button-press focus-ring rounded-full bg-[var(--pulse-coral)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--pulse-coral-dark)]">Sign in / Register</a></div><button onClick={onMenu} className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>{mobileOpen ? <X size={19} /> : <Menu size={19} />}</button></div>{mobileOpen && <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-border bg-background px-4 py-4 lg:hidden"><div className="container flex flex-col gap-1"><a href="#events" onClick={onMenu} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-muted">Explore events</a><a href="#categories" onClick={onMenu} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-muted">Categories</a><a href="#how-it-works" onClick={onMenu} className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-muted">How it works</a><a href="/organizer" className="rounded-xl px-3 py-3 text-sm font-semibold text-[var(--pulse-cobalt)] hover:bg-muted">Organizer hub</a><div className="mt-2 flex gap-2 border-t border-border pt-4"><a href="/profile" className="flex-1 rounded-full border border-border px-4 py-3 text-center text-sm font-semibold">Account</a><a href="/profile" className="flex-1 rounded-full bg-[var(--pulse-coral)] px-4 py-3 text-center text-sm font-bold text-white">Sign in / Register</a></div></div></motion.nav>}</header>;
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [type, setType] = useState<EventType>("All types");
  const [price, setPrice] = useState<PriceFilter>("Any price");
  const [date, setDate] = useState<DateFilter>("Any date");
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);
  const [bookingEvent, setBookingEvent] = useState<EventItem | null>(null);
  const [email, setEmail] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(2 * 24 * 60 * 60 + 11 * 60 * 60 + 42 * 60 + 18);

  useEffect(() => { const timer = window.setInterval(() => setSecondsLeft((current) => current > 0 ? current - 1 : 0), 1000); return () => window.clearInterval(timer); }, []);
  const filteredEvents = useMemo(() => EVENTS.filter((event) => { const matchesQuery = [event.title, event.location, event.category, event.description].join(" ").toLowerCase().includes(query.toLowerCase()); const matchesCategory = category === "All" || event.category === category; const matchesType = type === "All types" || event.type === type; const matchesPrice = price === "Any price" || (price === "Under $50" && event.price < 50) || (price === "$50–$100" && event.price >= 50 && event.price <= 100) || (price === "$100+" && event.price > 100); const matchesDate = date === "Any date" || (date === "This week" && event.id <= 2) || (date === "This month" && event.id <= 4); return matchesQuery && matchesCategory && matchesType && matchesPrice && matchesDate; }), [category, date, price, query, type]);
  const days = Math.floor(secondsLeft / 86400); const hours = Math.floor((secondsLeft % 86400) / 3600); const minutes = Math.floor((secondsLeft % 3600) / 60); const seconds = secondsLeft % 60;
  const openBooking = (event: EventItem) => { setActiveEvent(null); setBookingEvent(event); };

  return <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <AppHeader onMenu={() => setMobileOpen((current) => !current)} mobileOpen={mobileOpen} onTheme={() => { toggleTheme?.(); toast.success(theme === "light" ? "Night mode on" : "Back to daylight"); }} dark={theme === "dark"} />
    <main>
      <section className="paper-noise paper-grid relative overflow-hidden border-b border-border bg-[var(--pulse-paper)] dark:bg-background"><div className="container relative grid min-h-[590px] items-center gap-10 py-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-6 lg:py-20"><div className="relative z-10 max-w-xl"><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(240,90,71,.24)] bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[var(--pulse-coral)] dark:bg-card"><span className="h-2 w-2 animate-pulse rounded-full bg-[var(--pulse-coral)]" /> Curated events, real people</div><h1 className="font-display text-[clamp(3.7rem,8vw,7.6rem)] font-semibold leading-[.86] tracking-[-.07em] text-[var(--pulse-ink)] dark:text-foreground">Your next<br /><span className="text-[var(--pulse-coral)]">good night</span><br />starts here<span className="text-[var(--pulse-cobalt)]">.</span></h1><p className="mt-7 max-w-md text-base leading-7 text-[rgba(32,35,42,.66)] dark:text-muted-foreground sm:text-lg">Find the rooms, stages, studios, and people that make a city feel alive.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#events" className="button-press focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[var(--pulse-coral)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(240,90,71,.24)] transition hover:bg-[var(--pulse-coral-dark)]">Explore what’s on <ArrowDownRight size={17} /></a><a href="#how-it-works" className="button-press focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(32,35,42,.18)] px-6 py-3.5 text-sm font-bold text-[var(--pulse-ink)] transition hover:border-[var(--pulse-cobalt)] hover:text-[var(--pulse-cobalt)] dark:border-border dark:text-foreground">How it works</a></div></motion.div><div className="mt-12 flex items-center gap-7 border-t border-[rgba(32,35,42,.12)] pt-5 dark:border-border"><div><p className="font-display text-3xl font-semibold tracking-[-.04em] text-[var(--pulse-ink)] dark:text-foreground">10k<span className="text-[var(--pulse-coral)]">+</span></p><p className="text-xs text-muted-foreground">tickets booked</p></div><div className="h-9 w-px bg-border" /><div><p className="font-display text-3xl font-semibold tracking-[-.04em] text-[var(--pulse-ink)] dark:text-foreground">500<span className="text-[var(--pulse-cobalt)]">+</span></p><p className="text-xs text-muted-foreground">live events</p></div><div className="h-9 w-px bg-border" /><div><p className="font-display text-3xl font-semibold tracking-[-.04em] text-[var(--pulse-ink)] dark:text-foreground">42</p><p className="text-xs text-muted-foreground">cities & counting</p></div></div></div><div className="relative hidden h-[480px] lg:block"><div className="absolute right-[-8%] top-[-9%] h-[520px] w-[520px] rounded-full border border-[rgba(240,90,71,.2)] hero-orbit" /><div className="absolute right-[4%] top-[6%] h-[390px] w-[390px] rounded-full border border-[rgba(21,71,165,.18)] hero-orbit" style={{ animationDirection: "reverse", animationDuration: "26s" }} /><motion.div initial={{ opacity: 0, x: 30, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 2 }} transition={{ delay: .18, duration: .7 }} className="absolute right-0 top-2 h-[390px] w-[78%] rotate-2 overflow-hidden rounded-[2rem] border-[10px] border-white bg-[var(--pulse-sand)] shadow-[0_25px_65px_rgba(32,35,42,.18)]"><img src="/manus-storage/eventpulse-hero_8dd120ed.jpg" alt="People gathering at a sunlit outdoor event" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[rgba(32,35,42,.6)] via-transparent to-transparent" /><div className="absolute bottom-6 left-6 right-6 text-white"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70">Featured this week</p><p className="mt-1 font-display text-3xl font-semibold leading-none">Sunday on the Green</p></div></motion.div><motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48, duration: .6 }} className="float-soft absolute bottom-14 left-0 z-10 w-[210px] rounded-2xl bg-[var(--pulse-ink)] p-4 text-white shadow-[0_18px_38px_rgba(32,35,42,.2)]"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-white/55">Next big thing</p><p className="mt-2 font-display text-xl font-semibold">The Listening Room</p></div><Music2 size={18} className="text-[var(--pulse-sun)]" /></div><div className="mt-4 flex items-end gap-2"><div className="rounded-lg bg-white/10 px-2.5 py-2 text-center"><p className="font-display text-2xl font-semibold">{String(days).padStart(2, "0")}</p><p className="text-[9px] uppercase tracking-widest text-white/50">days</p></div><span className="pb-5 text-white/35">:</span><div className="rounded-lg bg-white/10 px-2.5 py-2 text-center"><p className="font-display text-2xl font-semibold">{String(hours).padStart(2, "0")}</p><p className="text-[9px] uppercase tracking-widest text-white/50">hrs</p></div><span className="pb-5 text-white/35">:</span><div className="rounded-lg bg-white/10 px-2.5 py-2 text-center"><p className="font-display text-2xl font-semibold">{String(minutes).padStart(2, "0")}</p><p className="text-[9px] uppercase tracking-widest text-white/50">min</p></div></div></motion.div><div className="absolute bottom-2 right-14 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--pulse-sun)] text-[var(--pulse-ink)] shadow-lg sun-drift"><Sparkles size={25} /></div></div></div></section>
      <section id="events" className="container scroll-mt-24 py-20 sm:py-28"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionEyebrow>Make a plan</SectionEyebrow><h2 className="max-w-2xl font-display text-5xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">The calendar is<br /><span className="text-[var(--pulse-coral)]">looking good.</span></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">A considered edit of things worth leaving the house for, wherever you are.</p></div><div className="mt-12 rounded-[1.6rem] border border-border bg-card p-3 shadow-[0_14px_40px_rgba(37,36,31,.05)] sm:p-4"><div className="flex flex-col gap-3 lg:flex-row"><label className="focus-within:border-[var(--pulse-coral)] flex h-12 flex-1 items-center gap-3 rounded-2xl border border-border bg-background px-4 transition"><Search size={18} className="text-muted-foreground" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by event, place, or feeling..." className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" /><kbd className="hidden rounded-md bg-muted px-2 py-1 text-[10px] text-muted-foreground sm:block">⌘ K</kbd></label><div className="flex flex-col gap-3 sm:flex-row"><FilterSelect label="Date" value={date} options={["Any date", "This week", "This month"]} onChange={(value) => setDate(value as DateFilter)} /><FilterSelect label="Price" value={price} options={["Any price", "Under $50", "$50–$100", "$100+"]} onChange={(value) => setPrice(value as PriceFilter)} /><FilterSelect label="Type" value={type} options={["All types", "In-person", "Hybrid"]} onChange={(value) => setType(value as EventType)} /></div></div><div id="categories" className="mt-4 flex gap-2 overflow-x-auto pb-1">{categories.map(({ label, icon: Icon }) => <button key={label} onClick={() => setCategory(label)} className={`focus-ring inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition ${category === label ? "bg-[var(--pulse-cobalt)] text-white shadow-[0_7px_16px_rgba(21,71,165,.18)]" : "bg-muted text-muted-foreground hover:bg-[rgba(21,71,165,.08)] hover:text-[var(--pulse-cobalt)]"}`}><Icon size={14} />{label}</button>)}</div></div><div className="mt-10 flex items-center justify-between"><p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">{filteredEvents.length}</span> {filteredEvents.length === 1 ? "event" : "events"} in the edit</p>{(query || category !== "All" || type !== "All types" || price !== "Any price" || date !== "Any date") && <button onClick={() => { setQuery(""); setCategory("All"); setType("All types"); setPrice("Any price"); setDate("Any date"); }} className="text-xs font-bold text-[var(--pulse-coral)] hover:underline">Clear all filters</button>}</div><motion.div layout className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filteredEvents.map((event, index) => <motion.div key={event.id} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} className={index === 0 ? "lg:col-span-2" : ""}><EventCard event={event} large={index === 0} onOpen={() => setActiveEvent(event)} onBook={() => openBooking(event)} /></motion.div>)}</motion.div>{filteredEvents.length === 0 && <div className="mt-6 rounded-[1.5rem] border border-dashed border-border bg-muted px-6 py-16 text-center"><Sparkles className="mx-auto text-[var(--pulse-coral)]" size={28} /><p className="mt-4 font-display text-2xl font-semibold">No events in that corner yet.</p><p className="mt-2 text-sm text-muted-foreground">Try a broader search or clear a filter to see the full edit.</p></div>}</section>
      <section id="how-it-works" className="paper-noise overflow-hidden border-y border-border bg-[var(--pulse-sand)] dark:bg-card"><div className="container py-20 sm:py-24"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><SectionEyebrow tone="cobalt">The EventPulse way</SectionEyebrow><h2 className="font-display text-5xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">Less scrolling.<br /><span className="text-[var(--pulse-cobalt)]">More showing up.</span></h2><p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">We keep the search simple, the details honest, and the booking flow calm. Because plans should feel like anticipation, not admin.</p></div><div className="grid gap-4 sm:grid-cols-3"><div className="stagger-in rounded-2xl bg-background p-5"><span className="font-display text-4xl font-semibold text-[var(--pulse-coral)]">01</span><h3 className="mt-8 font-semibold">Find your spark</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Search by what you want to feel, not just what it’s called.</p></div><div className="stagger-in delay-1 rounded-2xl bg-background p-5"><span className="font-display text-4xl font-semibold text-[var(--pulse-cobalt)]">02</span><h3 className="mt-8 font-semibold">Know the details</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Schedules, locations, hosts, and ticket math in one clear view.</p></div><div className="stagger-in delay-2 rounded-2xl bg-background p-5"><span className="font-display text-4xl font-semibold text-[var(--pulse-sun)]">03</span><h3 className="mt-8 font-semibold">Make it real</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Book in a few taps, then get back to the good part: looking forward.</p></div></div></div></div></section>
      <section className="container py-20 sm:py-28"><div className="relative overflow-hidden rounded-[2rem] bg-[var(--pulse-cobalt)] px-6 py-12 text-white sm:px-12 sm:py-16"><div className="absolute -right-12 -top-28 h-72 w-72 rounded-full border border-white/15" /><div className="absolute -right-2 -top-16 h-56 w-56 rounded-full border border-white/10" /><div className="relative max-w-2xl"><SectionEyebrow tone="coral">Stay in the loop</SectionEyebrow><h2 className="font-display text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-6xl">Keep the plans.<br /><span className="text-[var(--pulse-sun)]">We’ll keep the pulse.</span></h2><p className="mt-5 max-w-md text-sm leading-6 text-white/70">A short, once-a-week note with the good stuff near you. No noise, no urgency, no “just checking in”.</p><form onSubmit={(e) => { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) { toast.error("Add a valid email to join the list"); return; } toast.success("You’re on the list — good things incoming."); setEmail(""); }} className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"><div className="flex h-13 flex-1 items-center gap-3 rounded-full bg-white px-5 text-[var(--pulse-ink)]"><Mail size={17} className="text-[var(--pulse-coral)]" /><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your best email" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[rgba(32,35,42,.52)]" /></div><button className="button-press rounded-full bg-[var(--pulse-coral)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--pulse-coral-dark)]">Send me the good stuff</button></form></div></div></section>
    </main>
    <footer className="border-t border-border bg-[var(--pulse-paper)] dark:bg-card"><div className="container py-12 sm:py-16"><div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-6"><div><BrandMark /><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">A warmer way to find the next thing worth showing up for.</p><div className="mt-6 flex gap-2"><a href="https://instagram.com" target="_blank" rel="noreferrer" className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-[var(--pulse-coral)] hover:text-[var(--pulse-coral)]" aria-label="Instagram"><Instagram size={16} /></a><a href="https://facebook.com" target="_blank" rel="noreferrer" className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-[var(--pulse-coral)] hover:text-[var(--pulse-coral)]" aria-label="Facebook"><Facebook size={16} /></a><a href="mailto:hello@eventpulse.example" className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-[var(--pulse-coral)] hover:text-[var(--pulse-coral)]" aria-label="Email EventPulse"><Mail size={16} /></a></div></div><div><p className="text-xs font-bold uppercase tracking-[.17em]">Discover</p><div className="mt-5 space-y-3 text-sm text-muted-foreground"><a href="#events" className="block hover:text-[var(--pulse-coral)]">All events</a><a href="#categories" className="block hover:text-[var(--pulse-coral)]">Browse categories</a><a href="#events" className="block hover:text-[var(--pulse-coral)]">Near you</a></div></div><div><p className="text-xs font-bold uppercase tracking-[.17em]">For hosts</p><div className="mt-5 space-y-3 text-sm text-muted-foreground"><button onClick={() => toast.info("Host tools are coming soon.")} className="block hover:text-[var(--pulse-coral)]">List an event</button><button onClick={() => toast.info("Host tools are coming soon.")} className="block hover:text-[var(--pulse-coral)]">Host resources</button><button onClick={() => toast.info("We’ll connect you with our team soon.")} className="block hover:text-[var(--pulse-coral)]">Talk to our team</button></div></div><div><p className="text-xs font-bold uppercase tracking-[.17em]">Say hello</p><div className="mt-5 space-y-3 text-sm text-muted-foreground"><a href="mailto:hello@eventpulse.example" className="flex items-center gap-2 hover:text-[var(--pulse-coral)]"><Mail size={14} /> hello@eventpulse.example</a><a href="tel:+15550142026" className="flex items-center gap-2 hover:text-[var(--pulse-coral)]"><Phone size={14} /> +1 555 014 2026</a></div></div></div><div className="mt-12 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 EventPulse. Made for real-world plans.</span><span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[var(--pulse-coral)]" /> Built with a little feeling.</span></div></div></footer>
    <AnimatePresence>{activeEvent && <EventDetails event={activeEvent} onClose={() => setActiveEvent(null)} onBook={() => openBooking(activeEvent)} />}</AnimatePresence>
    <AnimatePresence>{bookingEvent && <BookingFlow event={bookingEvent} onClose={() => setBookingEvent(null)} />}</AnimatePresence>
  </div>;
}
