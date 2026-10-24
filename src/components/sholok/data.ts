export const S = "https://sholok.com";

export const topNav = [
  { label: "কেনাকাটা", href: "https://shopping.sholok.com/" },
  { label: "খবর", href: `${S}/news` },
  { label: "ভিডিও প্ল্যাটফর্ম", href: `${S}/tv` },
  { label: "ব্লগ", href: "https://blog.sholok.com/" },
  { label: "মেইল", href: `${S}/mail/` },
  { label: "মিউজিক", href: `${S}/music/` },
  { label: "জব পোর্টাল", href: `${S}/job-portal/` },
  { label: "ম্যাপস", href: `${S}/maps` },
];

export const allServices = [
  ["মেইল", `${S}/mail/`, "Mail"],
  ["ক্যাফে", `${S}/cafe`, "Coffee"],
  ["ব্লগ", "https://blog.sholok.com/", "PenLine"],
  ["কেনাকাটা", `${S}/shopping/`, "ShoppingBag"],
  ["খবর", `${S}/news`, "Newspaper"],
  ["ম্যাপস", `${S}/maps`, "Map"],
  ["ওয়েবটুন", `${S}/webtoon/`, "BookOpen"],
  ["স্মার্ট স্টোর", `${S}/smartstore`, "Store"],
  ["পেমেন্ট", `${S}/pay`, "Wallet"],
  ["মিউজিক", `${S}/music/`, "Music"],
  ["ভিডিও প্ল্যাটফর্ম", `${S}/tv`, "Tv"],
  ["সিরিজ", `${S}/series/`, "Clapperboard"],
  ["অনুবাদ", `${S}/translate`, "Languages"],
  ["অভিধান", `${S}/dictionary`, "BookA"],
  ["অর্থনীতি", `${S}/finance`, "TrendingUp"],
  ["খেলাধুলা", `${S}/sports/`, "Trophy"],
  ["আবহাওয়া", `${S}/weather`, "CloudSun"],
  ["রিয়েল এস্টেট", `${S}/realestate`, "Building2"],
  ["জ্ঞান", `${S}/qna`, "Lightbulb"],
  ["জব পোর্টাল", `${S}/job-portal/`, "Briefcase"],
] as const;

const u = (f: string) => `https://api.sholok.com/uploads/${f}.jpg`;
const P = "https://shopping.sholok.com/product/";
export const products = [
  { t: "জেবাইশ ডিজিটাল অ্যান্ড এমব্রয়ডারি লন", p: 2350, b: "Zebaish", img: u("zebaish-digital-and-embroidered-lawn"), href: P + "zebaish-digital-and-embroidered-lawn-4", cat: "এমব্রয়ডারি" },
  { t: "জেবাইশ ডিজিটাল অ্যান্ড এমব্রয়ডারি লন", p: 2350, b: "Zebaish", img: u("zebaish-digital-and-embroidered-lawn-2"), href: P + "zebaish-digital-and-embroidered-lawn-3", cat: "এমব্রয়ডারি" },
  { t: "জেবাইশ ডিজিটাল অ্যান্ড এমব্রয়ডারি লন", p: 2350, b: "Zebaish", img: u("zebaish-digital-and-embroidered-lawn-3"), href: P + "zebaish-digital-and-embroidered-lawn-2", cat: "লন সুট" },
  { t: "সুপ্রিম ডিজিটাল লন – ভলিউম ০১", p: 2000, b: "Supreme", img: u("supreme-digital-lawn-vol-01-7"), href: P + "supreme-digital-lawn-vol-01-8", cat: "প্রিন্টেড" },
  { t: "সুপ্রিম ডিজিটাল লন – ভলিউম ০১", p: 2000, b: "Supreme", img: u("supreme-digital-lawn-vol-01-5"), href: P + "supreme-digital-lawn-vol-01-7", cat: "লন সুট" },
  { t: "সুপ্রিম ডিজিটাল লন – ভলিউম ০১", p: 2000, b: "Supreme", img: u("supreme-digital-lawn-vol-01-3"), href: P + "supreme-digital-lawn-vol-01-5", cat: "প্রিন্টেড" },
  { t: "সুপ্রিম ডিজিটাল লন – ভলিউম ০১", p: 2000, b: "Supreme", img: u("supreme-digital-lawn-vol-01"), href: P + "supreme-digital-lawn-vol-01-1", cat: "দুপাট্টা" },
  { t: "রাং বারাং বাই নূর ২০২০", p: 2400, b: "Nur", img: u("rang-barang-by-nur-2020-2"), href: P + "rang-barang-by-nur-2020-2", cat: "প্রিন্টেড" },
  { t: "রাং বারাং বাই নূর ২০২০", p: 2400, b: "Nur", img: u("rang-barang-by-nur-2020"), href: P + "rang-barang-by-nur-2020-1", cat: "দুপাট্টা" },
];
export const productCats = ["সব আইটেম", "লন সুট", "প্রিন্টেড", "এমব্রয়ডারি", "দুপাট্টা"];

const us = (id: string) => `https://images.unsplash.com/photo-${id}?w=600&auto=format&fit=crop`;
export const properties = [
  { t: "গুলশানে বিলাসবহুল অ্যাপার্টমেন্ট", loc: "গুলশান ২, ঢাকা", price: "৳ ২.৫ কোটি", size: "২,৮০০ বর্গফুট", tag: "বিক্রয়ের জন্য", img: us("1545324418-cc1a3fa10c00") },
  { t: "বনানীতে আধুনিক অফিস স্পেস", loc: "বনানী, ঢাকা", price: "৳ ৫ কোটি", size: "৪,৫০০ বর্গফুট", tag: "বিক্রয়ের জন্য", img: us("1497366216548-37526070297c") },
  { t: "ধানমন্ডিতে ডুপ্লেক্স ভিলা", loc: "ধানমন্ডি ৮এ, ঢাকা", price: "৳ ১.৮ কোটি", size: "৩,২০০ বর্গফুট", tag: "ভাড়ার জন্য", img: us("1580587771525-78b9dba3b914") },
  { t: "উত্তরায় স্টুডিও অ্যাপার্টমেন্ট", loc: "উত্তরা সেক্টর ৭, ঢাকা", price: "৳ ৪৫ লক্ষ", size: "৬৫০ বর্গফুট", tag: "বিক্রয়ের জন্য", img: us("1522708323590-d24dbb6b0267") },
  { t: "মিরপুরে বাণিজ্যিক প্লট", loc: "মিরপুর ডিওএইচএস, ঢাকা", price: "৳ ৩.২ কোটি", size: "৫ কাঠা", tag: "বিক্রয়ের জন্য", img: us("1486325212027-8081e485255e") },
];

export const cafes = [
  { t: "Latitude 23", loc: "Gulshan 2, Dhaka", r: 4.7, n: 312, price: "৳৳ · Mid-range", type: "Café", badge: "Travelers' Choice", open: true, img: us("1501339847302-ac426a4a7cbb") },
  { t: "NORTH END Coffee", loc: "Shahajadpur, Dhaka", r: 4.6, n: 289, price: "৳৳ · Mid-range", type: "Coffee & Tea", badge: "Featured", open: true, img: us("1495474472287-4d71bcdd2085") },
  { t: "GBC Baking Company", loc: "Gulshan 1, Dhaka", r: 4.5, n: 201, price: "৳৳ · Mid-range", type: "Bakery & Café", badge: "", open: false, img: us("1554118811-1e0d58224f24") },
  { t: "Kaffeine Dhaka", loc: "Dhanmondi, Dhaka", r: 4.4, n: 178, price: "৳ · Cheap Eats", type: "Café", badge: "", open: true, img: us("1453614512568-c4024d13c247") },
  { t: "Cafe Social", loc: "Shahbagh, Dhaka", r: 4.3, n: 156, price: "৳৳৳ · Fine Dining", type: "Restaurant & Café", badge: "Travelers' Choice", open: true, img: us("1600093463592-8e36ae95ef56") },
];

export const cities = {
  ঢাকা: { temp: 33, feels: 35, hum: 45, wind: 8, desc: "মূলত পরিষ্কার", hourly: [25, 25, 25, 25, 27, 29] },
  চট্টগ্রাম: { temp: 31, feels: 34, hum: 62, wind: 12, desc: "আংশিক মেঘলা", hourly: [26, 26, 26, 27, 28, 29] },
  সিলেট: { temp: 29, feels: 32, hum: 70, wind: 6, desc: "হালকা বৃষ্টি", hourly: [24, 24, 24, 25, 26, 27] },
  রাজশাহী: { temp: 34, feels: 36, hum: 38, wind: 10, desc: "রৌদ্রোজ্জ্বল", hourly: [26, 26, 27, 28, 30, 31] },
} as Record<string, { temp: number; feels: number; hum: number; wind: number; desc: string; hourly: number[] }>;

export const bn = (n: number | string) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);
