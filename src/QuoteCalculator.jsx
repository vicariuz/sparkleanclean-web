import { useState } from "react";

const RES_PRICES = {
  basic:           { "1bd": 120, "2bd": 145, "3bd": 170, "4bd": 200, "5bd": 230 },
  deep:            { "1bd": 250, "2bd": 300, "3bd": 350, "4bd": 420, "5bd": 500 },
  airbnb:          { "1bd": 130, "2bd": 160, "3bd": 185, "4bd": 215, "5bd": 250 },
  moveout:         { "1bd": 200, "2bd": 250, "3bd": 320, "4bd": 380, "5bd": 450 },
  postconstruction:{ "1bd": 220, "2bd": 270, "3bd": 320, "4bd": 390, "5bd": 460 },
  windows:         { "1bd": 100, "2bd": 120, "3bd": 145, "4bd": 170, "5bd": 200 },
};

const RES_FREQ_DISC = { once: 0, monthly: 0.05, biweekly: 0.1, weekly: 0.15 };

const COM_MONTHLY = {
  sm: { weekly: 300, biweekly: 220, monthly: 200, daily: 550 },
  md: { weekly: 500, biweekly: 380, monthly: 320, daily: 900 },
  lg: { weekly: 700, biweekly: 530, monthly: 480, daily: 1300 },
  xl: { weekly: 1000, biweekly: 780, monthly: 650, daily: 1800 },
};

const COM_VISITS = { weekly: 4, biweekly: 2, monthly: 1, daily: 20 };

const RES_SERVICES = [
  { val: "basic",            label: "Basic clean",       formVal: "Residential Cleaning", sub: "From $120" },
  { val: "deep",             label: "Deep clean",        formVal: "Deep Cleaning",         sub: "From $250" },
  { val: "airbnb",           label: "Airbnb turnover",   formVal: "Residential Cleaning", sub: "From $130" },
  { val: "moveout",          label: "Move in / out",     formVal: "Move-In/Move-Out",      sub: "From $200" },
  { val: "postconstruction", label: "Post-construction", formVal: "Residential Cleaning", sub: "From $220" },
  { val: "windows",          label: "Window washing",    formVal: "Residential Cleaning", sub: "From $100" },
];

const RES_SIZES = [
  { val: "1bd", label: "1 bed",  sub: "1 bath"   },
  { val: "2bd", label: "2 bed",  sub: "1-2 bath" },
  { val: "3bd", label: "3 bed",  sub: "2 bath"   },
  { val: "4bd", label: "4 bed",  sub: "2-3 bath" },
  { val: "5bd", label: "5+ bed", sub: "3+ bath"  },
];

const RES_FREQS = [
  { val: "once",     label: "One-time",  sub: "No discount" },
  { val: "monthly",  label: "Monthly",   sub: "Save 5%"     },
  { val: "biweekly", label: "Bi-weekly", sub: "Save 10%"    },
  { val: "weekly",   label: "Weekly",    sub: "Save 15%"    },
];

const RES_ADDONS = [
  { key: "fridge",     label: "Inside fridge",      price: 25 },
  { key: "oven",       label: "Inside oven",         price: 25 },
  { key: "laundry",    label: "Laundry (1 load)",    price: 20 },
  { key: "cabinets",   label: "Inside cabinets",     price: 35 },
  { key: "pets",       label: "Pet hair treatment",  price: 15 },
  { key: "baseboards", label: "Baseboards detail",   price: 20 },
];

const COM_SIZES = [
  { val: "sm", label: "Small",      sub: "1,000–2,000 sqft" },
  { val: "md", label: "Medium",     sub: "2,000–4,000 sqft" },
  { val: "lg", label: "Large",      sub: "4,000–8,000 sqft" },
  { val: "xl", label: "Enterprise", sub: "8,000+ sqft"      },
];

const COM_FREQS = [
  { val: "weekly",   label: "Weekly",    sub: "Most popular" },
  { val: "biweekly", label: "Bi-weekly", sub: "Save 8%"      },
  { val: "monthly",  label: "Monthly",   sub: "Deep clean"   },
  { val: "daily",    label: "Daily",     sub: "High traffic" },
];

const COM_ADDONS = [
  { key: "restrooms",   label: "Deep restroom clean",   price: 50 },
  { key: "windows_com", label: "Window washing",        price: 75 },
  { key: "kitchen_com", label: "Break room deep clean", price: 40 },
  { key: "supplies",    label: "Supply restocking",     price: 30 },
];

function OptionCard({ label, sub, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer w-full
        ${selected
          ? "border-[#1D9E75] border-2 bg-[#E1F5EE]"
          : "border-gray-200 bg-white hover:border-gray-400"
        }`}
    >
      <p className={`text-sm font-medium ${selected ? "text-[#085041]" : "text-gray-900"}`}>{label}</p>
      <p className={`text-xs mt-0.5 ${selected ? "text-[#0F6E56]" : "text-gray-500"}`}>{sub}</p>
    </button>
  );
}

function AddonCard({ label, price, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-150 cursor-pointer w-full text-left
        ${selected
          ? "border-[#1D9E75] border-2 bg-[#E1F5EE]"
          : "border-gray-200 bg-white hover:border-gray-400"
        }`}
    >
      <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border
        ${selected ? "bg-[#1D9E75] border-[#1D9E75]" : "border-gray-400"}`}
      >
        {selected && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="white" strokeWidth="2" />
          </svg>
        )}
      </div>
      <div>
        <p className={`text-sm ${selected ? "text-[#085041]" : "text-gray-800"}`}>{label}</p>
        <p className="text-xs text-gray-500">+${price}</p>
      </div>
    </button>
  );
}

function StepLabel({ number, text }) {
  return (
    <p className="text-xs font-medium text-gray-400 tracking-wide uppercase mb-2">
      {String(number).padStart(2, "0")} — {text}
    </p>
  );
}

export default function QuoteCalculator({ onBooking }) {
  const [mode, setMode]         = useState("residential");
  const [resService, setResService] = useState("basic");
  const [resSize, setResSize]   = useState("1bd");
  const [resFreq, setResFreq]   = useState("once");
  const [resExtras, setResExtras] = useState({});
  const [comSize, setComSize]   = useState("sm");
  const [comFreq, setComFreq]   = useState("weekly");
  const [comExtras, setComExtras] = useState({});

  function toggleResExtra(key, price) {
    setResExtras((prev) =>
      prev[key]
        ? Object.fromEntries(Object.entries(prev).filter(([k]) => k !== key))
        : { ...prev, [key]: price }
    );
  }

  function toggleComExtra(key, price) {
    setComExtras((prev) =>
      prev[key]
        ? Object.fromEntries(Object.entries(prev).filter(([k]) => k !== key))
        : { ...prev, [key]: price }
    );
  }

  function switchMode(m) {
    setMode(m);
    setResExtras({});
    setComExtras({});
  }

  let priceText = "", rangeText = "", labelText = "", breakdown = [];
  let bookingData = {};

  if (mode === "residential") {
    const base        = RES_PRICES[resService][resSize];
    const disc        = RES_FREQ_DISC[resFreq];
    const extrasTotal = Object.values(resExtras).reduce((a, b) => a + b, 0);
    const afterDisc   = Math.round(base * (1 - disc));
    const total       = afterDisc + extrasTotal;
    const savings     = Math.round(base * disc);
    const svcObj      = RES_SERVICES.find((s) => s.val === resService);
    const sizeLabel   = RES_SIZES.find((s) => s.val === resSize)?.label;
    const freqLabel   = RES_FREQS.find((f) => f.val === resFreq)?.label;
    const addonList   = Object.keys(resExtras)
      .map((k) => RES_ADDONS.find((a) => a.key === k)?.label)
      .filter(Boolean).join(", ");

    priceText = `$${total}`;
    labelText = `${svcObj?.label} · ${sizeLabel} · ${freqLabel}`;

    breakdown.push({ label: "Base price", value: `$${base}` });
    if (disc > 0) breakdown.push({ label: `Recurring discount (${Math.round(disc * 100)}%)`, value: `-$${savings}`, green: true });
    if (extrasTotal > 0) breakdown.push({ label: "Add-ons", value: `+$${extrasTotal}` });
    breakdown.push({ label: "Estimated total", value: `$${total}`, bold: true });
    if (disc > 0) breakdown.push({ label: "You save per visit", value: `$${savings}`, green: true, small: true });

    bookingData = {
      service: svcObj?.formVal || "Residential Cleaning",
      message: `Quote from calculator:\n- Service: ${svcObj?.label}\n- Home size: ${sizeLabel}\n- Frequency: ${freqLabel}${addonList ? `\n- Add-ons: ${addonList}` : ""}\n- Estimated price: $${total}${disc > 0 ? ` (saving $${savings}/visit)` : ""}\n\nPlease confirm availability and final pricing.`,
    };

  } else {
    const base        = COM_MONTHLY[comSize][comFreq];
    const extrasTotal = Object.values(comExtras).reduce((a, b) => a + b, 0);
    const total       = base + extrasTotal;
    const visits      = COM_VISITS[comFreq];
    const perVisit    = Math.round(total / visits);
    const sizeLabel   = COM_SIZES.find((s) => s.val === comSize)?.label;
    const freqLabel   = COM_FREQS.find((f) => f.val === comFreq)?.label;
    const addonList   = Object.keys(comExtras)
      .map((k) => COM_ADDONS.find((a) => a.key === k)?.label)
      .filter(Boolean).join(", ");

    priceText = `$${total}/mo`;
    rangeText = `$${perVisit} per visit · ${visits} visit${visits > 1 ? "s" : ""}/month`;
    labelText = `${sizeLabel} · ${freqLabel}`;

    breakdown.push({ label: "Base monthly rate", value: `$${base}` });
    if (extrasTotal > 0) breakdown.push({ label: "Add-on services", value: `+$${extrasTotal}` });
    breakdown.push({ label: "Monthly total", value: `$${total}`, bold: true });
    breakdown.push({ label: "Cost per visit", value: `$${perVisit}`, small: true });

    bookingData = {
      service: "Commercial Cleaning",
      message: `Quote from calculator:\n- Type: Commercial cleaning\n- Office size: ${sizeLabel}\n- Frequency: ${freqLabel}${addonList ? `\n- Add-ons: ${addonList}` : ""}\n- Estimated monthly: $${total} ($${perVisit}/visit)\n\nPlease confirm availability and final pricing.`,
    };
  }

  // Sube datos al padre y hace scroll al formulario
  function handleBook() {
    if (onBooking) onBooking(bookingData);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <section className="py-16 px-4 bg-gray-50" id="get-your-quote">
      <div className="max-w-2xl mx-auto">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#E1F5EE] flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-900">Get your instant quote</h2>
            <p className="text-sm text-gray-500">Sparklean Cleaning Services · Lafayette, LA</p>
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          {["residential", "commercial"].map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className={`px-5 py-2 rounded-lg text-sm transition-all duration-150 capitalize
                ${mode === m
                  ? "bg-[#1D9E75] text-white border border-[#1D9E75]"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                }`}
            >
              {m}
            </button>
          ))}
        </div>

        {mode === "residential" && (
          <div className="space-y-6">
            <div>
              <StepLabel number={1} text="Service type" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {RES_SERVICES.map((s) => (
                  <OptionCard key={s.val} {...s} selected={resService === s.val} onClick={() => setResService(s.val)} />
                ))}
              </div>
            </div>
            <div>
              <StepLabel number={2} text="Home size" />
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {RES_SIZES.map((s) => (
                  <OptionCard key={s.val} {...s} selected={resSize === s.val} onClick={() => setResSize(s.val)} />
                ))}
              </div>
            </div>
            <div>
              <StepLabel number={3} text="Frequency" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {RES_FREQS.map((f) => (
                  <OptionCard key={f.val} {...f} selected={resFreq === f.val} onClick={() => setResFreq(f.val)} />
                ))}
              </div>
            </div>
            <div>
              <StepLabel number={4} text="Add-ons (optional)" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {RES_ADDONS.map((a) => (
                  <AddonCard key={a.key} {...a} selected={!!resExtras[a.key]} onClick={() => toggleResExtra(a.key, a.price)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {mode === "commercial" && (
          <div className="space-y-6">
            <div>
              <StepLabel number={1} text="Office size" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {COM_SIZES.map((s) => (
                  <OptionCard key={s.val} {...s} selected={comSize === s.val} onClick={() => setComSize(s.val)} />
                ))}
              </div>
            </div>
            <div>
              <StepLabel number={2} text="Cleaning frequency" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {COM_FREQS.map((f) => (
                  <OptionCard key={f.val} {...f} selected={comFreq === f.val} onClick={() => setComFreq(f.val)} />
                ))}
              </div>
            </div>
            <div>
              <StepLabel number={3} text="Add-ons (optional)" />
              <div className="grid grid-cols-2 gap-2">
                {COM_ADDONS.map((a) => (
                  <AddonCard key={a.key} {...a} selected={!!comExtras[a.key]} onClick={() => toggleComExtra(a.key, a.price)} />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-4xl font-medium text-gray-900">{priceText}</p>
              {rangeText && <p className="text-sm text-gray-500 mt-1">{rangeText}</p>}
              <p className="text-sm text-gray-500 mt-1">{labelText}</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-[#E1F5EE] text-[#085041]">
              Instant estimate
            </span>
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-1.5">
            {breakdown.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between text-sm
                  ${row.bold ? "font-medium text-gray-900 border-t border-gray-100 pt-2 mt-2" : ""}
                  ${row.green ? "text-[#0F6E56]" : "text-gray-500"}
                  ${row.small ? "text-xs" : ""}
                `}
              >
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <button
              onClick={handleBook}
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-sm font-medium py-2.5 rounded-lg text-center transition-colors"
            >
              Book this cleaning
            </button>
            <button
              onClick={handleBook}
              className="border border-gray-200 hover:border-gray-400 text-gray-800 text-sm py-2.5 rounded-lg text-center transition-colors"
            >
              Get custom quote
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-3">
            Final price confirmed after a quick call · (337) 554-0468
          </p>
        </div>

      </div>
    </section>
  );
}
