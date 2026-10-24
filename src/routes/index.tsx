import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import * as Icons from "lucide-react";
import {
  Mic, Camera, Sparkles, Keyboard, Search, Grid3x3, X, Menu, ChevronLeft, ChevronRight,
  MapPin, Star, Droplets, Wind, RefreshCw, ArrowRight, Flame,
} from "lucide-react";
import { Logo } from "@/components/sholok/Logo";
import {
  topNav, allServices, products, productCats, properties, cafes, cities, bn,
} from "@/components/sholok/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sholok — বাংলার সকল সেবা এক জায়গায়" },
      { name: "description", content: "সার্চ, খবর, কেনাকাটা, মেইল, ম্যাপস, রিয়েল এস্টেট, ক্যাফে ও আবহাওয়া — সব Sholok-এ।" },
      { property: "og:title", content: "Sholok — বাংলার সকল সেবা এক জায়গায়" },
      { property: "og:description", content: "সার্চ, খবর, কেনাকাটা, মেইল, ম্যাপস ও আরও অনেক সেবা এক প্ল্যাটফর্মে।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Home() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [lang, setLang] = useState<"bn" | "en">("bn");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-card/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
          <Logo />
          <nav aria-label="প্রধান" className="ml-6 hidden items-center gap-1 lg:flex">
            {topNav.map((n) => (
              <a key={n.label} href={n.href} {...ext}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden rounded-full border p-0.5 text-xs font-semibold sm:flex" role="group" aria-label="ভাষা">
              {(["en", "bn"] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                  className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}>
                  {l === "en" ? "EN" : "বাং"}
                </button>
              ))}
            </div>
            <button onClick={() => setServicesOpen(true)} aria-label="সকল সেবা"
              className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-primary hover:bg-secondary">
              <Grid3x3 className="h-5 w-5" /> <span className="hidden sm:inline">সকল সেবা</span>
            </button>
            <a href="https://sholok.com/login" {...ext}
              className="hidden h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep sm:inline-flex">
              লগ ইন
            </a>
            <button onClick={() => setMobileNav((v) => !v)} aria-expanded={mobileNav} aria-label="মেনু"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary lg:hidden">
              {mobileNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileNav && (
          <nav className="border-t bg-card px-4 py-3 lg:hidden" aria-label="মোবাইল">
            <div className="grid grid-cols-2 gap-1">
              {topNav.map((n) => (
                <a key={n.label} href={n.href} {...ext} className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary hover:text-primary">{n.label}</a>
              ))}
              <a href="https://sholok.com/login" {...ext} className="col-span-2 mt-2 rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground">লগ ইন</a>
            </div>
          </nav>
        )}
      </header>

      <SearchHero />

      <main className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-6">
          <Shopping />
          <RealEstate />
          <Cafes />
        </div>
        <aside className="space-y-6">
          <LoginCard />
          <Weather />
          <div className="card-surface flex h-56 items-center justify-center border-dashed text-sm text-muted-foreground">
            বিজ্ঞাপন স্থান
          </div>
        </aside>
      </main>

      <footer className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <Logo inverted />
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4 lg:grid-cols-7">
            {allServices.map(([l, h]) => (
              <a key={l} href={h} {...ext} className="opacity-80 transition hover:text-brand-orange hover:opacity-100">{l}</a>
            ))}
          </div>
          <p className="mt-10 border-t border-primary-foreground/15 pt-6 text-xs opacity-70">© 2025 Sholok — সকল অধিকার সংরক্ষিত</p>
        </div>
      </footer>

      {servicesOpen && <ServicesPanel onClose={() => setServicesOpen(false)} />}
    </div>
  );
}

function SearchHero() {
  const [q, setQ] = useState("");
  const [hint, setHint] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return setHint("অনুসন্ধানের জন্য কিছু লিখুন");
    window.open(`https://sholok.com/search?q=${encodeURIComponent(q)}`, "_blank", "noopener");
    setHint("");
  };
  const tools = [
    { i: Mic, l: "বলে", d: "ভয়েস সার্চ" },
    { i: Camera, l: "ছবি দিয়ে", d: "ছবি সার্চ" },
    { i: Sparkles, l: "স্মার্ট", d: "AI সার্চ" },
    { i: Keyboard, l: "টাইপ করুন", d: "বাংলা কীবোর্ড" },
  ];
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:py-20">
        <h1 className="font-bangla text-3xl font-bold leading-tight text-primary-foreground sm:text-5xl">
          যা খুঁজছেন, <span className="text-brand-orange">সব</span> এক জায়গায়
        </h1>
        <form onSubmit={submit} className="mt-8 flex items-center gap-2 rounded-2xl bg-card p-2 shadow-2xl">
          <span className="hidden rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-primary sm:block">সব</span>
          <label htmlFor="q" className="sr-only">অনুসন্ধান</label>
          <input id="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Sholok-এ অনুসন্ধান করুন…"
            className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-base outline-none placeholder:text-muted-foreground" />
          <button type="submit" aria-label="অনুসন্ধান"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-primary-foreground transition hover:bg-brand-orange-deep">
            <Search className="h-5 w-5" />
          </button>
        </form>
        {hint && <p className="mt-2 text-sm text-brand-orange-soft" role="alert">{hint}</p>}
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tools.map(({ i: I, l, d }) => (
            <button key={l} type="button" onClick={() => setHint(`${d} শীঘ্রই আসছে`)}
              className="flex items-center gap-2 rounded-xl bg-primary-foreground/10 px-3 py-2.5 text-left text-primary-foreground ring-1 ring-primary-foreground/15 transition hover:bg-primary-foreground/20">
              <I className="h-4 w-4 shrink-0 text-brand-orange" />
              <span className="text-xs leading-tight"><b className="block font-semibold">{l}</b><span className="opacity-75">{d}</span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ title, badge, href, more = "সব দেখুন", icon }: { title: string; badge?: string; href: string; more?: string; icon?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 text-lg font-bold">
        {icon}{title}
        {badge && <span className="rounded-full bg-brand-orange-soft px-2 py-0.5 text-xs font-semibold text-brand-orange-deep">{badge}</span>}
      </h2>
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
        {more} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Shopping() {
  const [cat, setCat] = useState(productCats[0]);
  const [page, setPage] = useState(0);
  const list = cat === productCats[0] ? products : products.filter((p) => p.cat === cat);
  const per = 6;
  const pages = Math.max(1, Math.ceil(list.length / per));
  const shown = list.slice(page * per, page * per + per);
  return (
    <section className="card-surface -mt-8 relative p-5 sm:p-6">
      <SectionHead title="আজকের কেনাকাটা" badge="হট" href="https://shopping.sholok.com/" icon={<Flame className="h-5 w-5 text-brand-orange" />} />
      <div className="scrollbar-none -mx-1 mb-5 flex gap-2 overflow-x-auto px-1" role="tablist">
        {productCats.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => { setCat(c); setPage(0); }}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary-soft"}`}>
            {c}
          </button>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">এই বিভাগে কোনো আইটেম নেই</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {shown.map((p) => (
            <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-2 line-clamp-2 text-sm font-semibold group-hover:text-primary">{p.t}</p>
              <p className="mt-1 flex items-center justify-between text-sm">
                <span className="font-bold text-brand-orange-deep">৳{p.p.toLocaleString("en-US")}</span>
                <span className="text-xs text-muted-foreground">{p.b}</span>
              </p>
            </a>
          ))}
        </div>
      )}
      <div className="mt-5 flex flex-col gap-3 rounded-xl bg-brand-orange-soft p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm"><b className="text-brand-orange-deep">আজকের অফার</b> · সেরা দামে লন, প্রিন্টেড ও এমব্রয়ডারি কালেকশন</p>
        <a href="https://shopping.sholok.com/" target="_blank" rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-brand-orange px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-brand-orange-deep">
          শপিং করুন <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      {pages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span>আরও শপিং আইটেম</span>
          <button aria-label="আগের" disabled={page === 0} onClick={() => setPage(page - 1)} className="rounded-md border p-1 hover:bg-secondary disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>
          <span>{bn(page + 1)} / {bn(pages)}</span>
          <button aria-label="পরের" disabled={page >= pages - 1} onClick={() => setPage(page + 1)} className="rounded-md border p-1 hover:bg-secondary disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button>
        </div>
      )}
    </section>
  );
}

function RealEstate() {
  return (
    <section className="card-surface p-5 sm:p-6">
      <SectionHead title="রিয়েল এস্টেট" badge="নতুন" href="https://sholok.com/realestate" />
      <div className="scrollbar-none -mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-1">
        {properties.map((p) => (
          <a key={p.t} href="https://sholok.com/realestate" target="_blank" rel="noopener noreferrer" className="group w-60 shrink-0 snap-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
              <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-2 top-2 rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">{p.tag}</span>
            </div>
            <p className="mt-2 font-semibold group-hover:text-primary">{p.t}</p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{p.loc}</p>
            <p className="mt-1 flex justify-between text-sm"><b className="text-primary-deep">{p.price}</b><span className="text-muted-foreground">{p.size}</span></p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Cafes() {
  const [openOnly, setOpenOnly] = useState(false);
  const list = openOnly ? cafes.filter((c) => c.open) : cafes;
  return (
    <section className="card-surface p-5 sm:p-6">
      <SectionHead title="Cafés" badge="Bangladesh" href="https://sholok.com/cafe" more="View all" />
      <label className="mb-4 inline-flex cursor-pointer items-center gap-2 text-sm">
        <input type="checkbox" checked={openOnly} onChange={(e) => setOpenOnly(e.target.checked)} className="accent-primary" />
        Open now only
      </label>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => (
          <a key={c.t} href="https://sholok.com/cafe" target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-lg border transition hover:border-primary">
            <div className="relative aspect-video bg-muted">
              <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover" />
              {c.badge && <span className="absolute left-2 top-2 rounded-md bg-brand-orange px-2 py-0.5 text-xs font-semibold text-primary-foreground">{c.badge}</span>}
              <span className={`absolute right-2 top-2 rounded-md px-2 py-0.5 text-xs font-semibold ${c.open ? "bg-card text-primary" : "bg-foreground/70 text-primary-foreground"}`}>{c.open ? "Open" : "Closed"}</span>
            </div>
            <div className="p-3">
              <p className="font-semibold group-hover:text-primary">{c.t}</p>
              <p className="text-xs text-muted-foreground">{c.loc}</p>
              <p className="mt-2 flex items-center gap-1 text-sm"><Star className="h-4 w-4 fill-brand-orange text-brand-orange" /><b>{c.r}</b><span className="text-muted-foreground">({c.n})</span></p>
              <p className="mt-1 text-xs text-muted-foreground">{c.price} · {c.type}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function LoginCard() {
  return (
    <div className="card-surface overflow-hidden lg:-mt-8 lg:relative">
      <div className="bg-secondary p-5">
        <p className="font-semibold text-primary-deep">সেরা অভিজ্ঞতার জন্য লগ ইন করুন</p>
        <a href="https://sholok.com/login" target="_blank" rel="noopener noreferrer"
          className="mt-4 flex h-11 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground transition hover:bg-primary-deep">
          লগ ইন
        </a>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          <a href="https://sholok.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-primary">আইডি অনুসন্ধান</a>
          <span className="mx-2">|</span>
          <a href="https://sholok.com/register" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange-deep hover:underline">নিবন্ধন</a>
        </p>
      </div>
    </div>
  );
}

function Weather() {
  const names = Object.keys(cities);
  const [city, setCity] = useState(names[0]);
  const [stamp, setStamp] = useState("04:46 AM");
  const w = cities[city];
  return (
    <div className="card-surface p-5">
      <div className="flex items-center justify-between">
        <label className="sr-only" htmlFor="city">শহর</label>
        <select id="city" value={city} onChange={(e) => setCity(e.target.value)}
          className="rounded-md bg-secondary px-2 py-1 text-sm font-semibold text-primary-deep outline-none">
          {names.map((n) => <option key={n}>{n}</option>)}
        </select>
        <Icons.CloudSun className="h-6 w-6 text-brand-orange" />
      </div>
      <p className="mt-3 text-4xl font-extrabold text-primary-deep">{w.temp}°C</p>
      <p className="text-sm font-medium">{w.desc}</p>
      <p className="text-xs text-muted-foreground">অনুভূত {w.feels}°C</p>
      <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Droplets className="h-3.5 w-3.5" />{w.hum}%</span>
        <span className="flex items-center gap-1"><Wind className="h-3.5 w-3.5" />{w.wind} km/h</span>
      </div>
      <p className="mt-4 text-xs font-semibold">ঘণ্টাওয়ারি পূর্বাভাস</p>
      <div className="mt-2 grid grid-cols-6 gap-1 text-center">
        {w.hourly.map((t, i) => (
          <div key={i} className="rounded-md bg-muted py-1.5">
            <p className="text-sm font-bold">{t}°</p>
            <p className="text-[10px] text-muted-foreground">সকাল {i + 4}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>সর্বশেষ: {stamp}</span>
        <button onClick={() => setStamp(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }))}
          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
          <RefreshCw className="h-3 w-3" /> রিফ্রেশ
        </button>
      </div>
    </div>
  );
}

function ServicesPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-foreground/40" onClick={onClose} role="dialog" aria-modal aria-label="সকল সেবা">
      <div className="h-full w-full max-w-sm overflow-y-auto bg-card p-6 shadow-2xl animate-in slide-in-from-right" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">সকল সেবা</h2>
          <button onClick={onClose} aria-label="বন্ধ" className="rounded-md p-2 hover:bg-secondary"><X className="h-5 w-5" /></button>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {allServices.map(([l, h, ic]) => {
            const I = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[ic] ?? Icons.Circle;
            return (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl p-3 text-center text-xs font-medium transition hover:bg-secondary hover:text-primary">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary"><I className="h-5 w-5" /></span>
                {l}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
