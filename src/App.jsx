import React, { useEffect, useState } from "react";
import {
  ArrowRight, BadgeCheck, Bug, Check, ChevronDown, Clock, CloudSnow, Droplets, Fence, Gift, House, Leaf, Mail, MapPin,
  Menu, Mountain, Phone, Quote, Rat, Ruler, Scissors, ShieldCheck, Shovel, Sprout, TreeDeciduous, Users, Wind, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/uls-logo.jpg";
import logoMark from "./assets/uls-logo-mark.jpg";
import aerationPhoto from "./assets/core-aeration.jpg";
import mowingPhoto from "./assets/mowing.jpg";
import homePhoto from "./assets/lawn-home.jpg";
import bedsPhoto from "./assets/landscape-beds.jpg";
import magnumPhoto from "./assets/permagreen-magnum.jpg";

// ------------------------------------------------------------------ Content (everything below comes from urbandalelawnsolutions.com)
const COMPANY = "Urbandale Lawn Solutions, Inc.";
const ABBR = "uls";
const END_DATE = "2026-11-30T23:59:59-06:00";
const ORIGINAL = "http://www.urbandalelawnsolutions.com";
const PHONE = "515-771-7674";
const PHONE_HREF = "tel:+15157717674";
const EMAIL = "contactus@urbandalelawnsolutions.com";
const OWNER = "Ryan Jacobs";
const FOUNDED = 2000;
const AREA = "Urbandale, Des Moines and surrounding areas";
const GOOGLE_REVIEWS = "https://www.google.com/search?q=Urbandale+Lawn+Solutions+Urbandale+Iowa";

const NAV = [
  ["Program", "#program"],
  ["Services", "#services"],
  ["Pest barrier", "#pest"],
  ["Offers", "#offers"],
  ["About", "#about"],
  ["Lawn tips", "#tips"],
];

const PROGRAM = [
  { when: "Early spring", title: "Feed + crabgrass barrier", text: "Slow-release granular fertilizer with pre-emergent weed control (Dimension) for crabgrass, foxtail and other annual grasses." },
  { when: "Spring", title: "Blanket weed control", text: "Liquid fertilizer and broadleaf weed control (Trimec) for dandelion, clover, plantain and spurge, plus a second pre-emergent application." },
  { when: "Early summer", title: "Summer-stress feeding", text: "Slow-release granular fertilizer to fight summer stress, with broadleaf weeds spot treated. Optional grub control by the end of July (extra charge)." },
  { when: "Early fall", title: "Weeds, round two", text: "Liquid fertilizer and broadleaf weed control to clear the dandelion, clover, plantain and spurge that come back after summer." },
  { when: "Late fall", title: "Winterizer", text: "Granular fertilizer that builds a stronger root system, keeps the lawn green into late fall and helps it green up sooner in spring." },
];

const SERVICE_GROUPS = [
  {
    name: "Lawn health",
    items: [
      { icon: Leaf, title: "Fertilizing & weed control", text: "A five-application program (a six-application option is also offered) using commercial-grade, encapsulated slow-release fertilizer." },
      { icon: Sprout, title: "Core aeration", text: "Pulls 2–3 inch, finger-size cores to relieve compaction and get air, water and fertilizer to the roots. Fall is the best time." },
      { icon: Shovel, title: "Seeding & sodding", text: "Aerate and overseed in early fall with top-grade seed (about 90% germination), or sod anything from a small patch to a whole new-construction lawn." },
      { icon: Bug, title: "Grub, insect & disease control", text: "Grub control before the late-summer brown patches, flea and tick control, and advice on fungus and disease." },
    ],
  },
  {
    name: "Pest & critter control",
    items: [
      { icon: House, title: "Perimeter pest control", text: "An outside barrier around your foundation, three treatments a year: spring, summer and fall." },
      { icon: Rat, title: "Mole applications", text: "Talpirid bait that mimics a mole's natural food, placed underground after an evaluation, with a follow-up visit." },
    ],
  },
  {
    name: "Mowing & landscape",
    items: [
      { icon: Scissors, title: "Mowing", text: "Cut at the right height for the season, trimmed around every obstacle and edge, with patterns alternated every visit." },
      { icon: Mountain, title: "Landscape design & install", text: "Custom plans from designers with a five-year Landscape Architecture degree from Iowa State: walls, patios, walkways, edging, rock, mulch and plantings." },
      { icon: TreeDeciduous, title: "Tree, shrub & bed fertilizing", text: "Deep-root feeding with a slow-release mix, late fall or early spring, for trees and shrubs in stripped, clay-heavy soil." },
      { icon: Fence, title: "Pruning & bed maintenance", text: "A few visits a year to keep beds, shrubs, perennials and smaller trees clean, or a one-time pruning." },
    ],
  },
  {
    name: "Seasonal & commercial",
    items: [
      { icon: Droplets, title: "Total vegetation control", text: "Treatment for gravel lots, walkway cracks, beds, or lawn areas being killed off for renovation. One time or through the year." },
      { icon: Wind, title: "Fall leaf removal", text: "The whole property cleared, hauled away and dumped for one price, so the lawn isn't smothered over winter." },
      { icon: CloudSnow, title: "Commercial snow removal", text: "Lot plowing, sidewalks and ice melt, done before your business opens the next day." },
    ],
  },
];

const LANDSCAPE_MATERIALS = [
  ["Retaining walls", "Block, limestone, boulder, pressure-treated timber"],
  ["Patios", "Brick, concrete paver, flagstone, stamped concrete"],
  ["Walkways", "Brick, concrete paver, flagstone, stamped concrete"],
  ["Edging", "Concrete paver, limestone, black poly, trench"],
  ["Rock, mulch & boulders", "Various types and colors; granite and limestone boulders"],
  ["Plantings", "Trees, shrubs, perennials, grasses, groundcovers"],
];

const PESTS = ["Ants", "Armyworms", "Banks grass mite", "Beetles", "Billbugs", "Black turfgrass ataenius", "Boxelder bugs", "Centipedes", "Chiggers", "Chinch bugs", "Cockroaches", "Crickets", "Cutworms", "Earwigs", "European crane flies", "Firebrats", "Fleas", "Grasshoppers", "Leafhoppers", "Mealybugs", "Millipedes", "Mites", "Mole crickets", "Mosquitoes", "Pillbugs", "Silverfish", "Sod webworms", "Sowbugs", "Spiders", "Springtails", "Termites (above ground)", "Ticks", "Weevils"];

const OFFERS = [
  { tag: "Lawn treatment", title: "One treatment free", text: "Sign up for the 5-treatment fertilizing & weed control program." },
  { tag: "Mowing", title: "One mowing free", text: "Sign up for mowing service for the year." },
  { tag: "Home bug control", title: "Third treatment free", text: "Sign up for the 3-treatment exterior home bug control program." },
  { tag: "Landscape design", title: "Design free with install", text: "One of the designers customizes a plan for your home at no charge when you install with us." },
];

const WHY = [
  "All the applications you need for nearly the same cost as doing it yourself, with better results.",
  "The same trained, state-certified applicator every visit.",
  "Commercial-grade fertilizers, applied in an environmentally friendly manner.",
  "No treatments in unfavorable weather.",
  "Free service calls with complete lawn care packages.",
  "Equipment for anything from a small yard to several acres at a time.",
];

// Verbatim from the "Our Fan Club" section of urbandalelawnsolutions.com/Referrals.htm (line breaks joined, wording and spelling untouched).
const TESTIMONIALS = [
  { quote: "Thanks so much for taking the time to explain what was going wrong with my lawn, my husband also appreciates it.", name: "Beth", town: "West Des Moines" },
  { quote: "We always thought our lawn looked decent, but never realized how much aerating and seeding last fall would improve the lawn this spring. Thanks again.", name: "Jack", town: "Urbandale" },
  { quote: "I wish I would have known earlier that it would have cost about the same amount of money to have you guys treat my lawn as it does to do it myself", name: "Steve", town: "Johnston" },
  { quote: "It really helps having both my lawn service and my perimeter insect control through one company now. I always thought that I needed the inside treatments as well as the outside ones. You also saved me money. Thanks", name: "Jason", town: "Clive" },
  { quote: "Thanks again for picking up the hoses and toys I left out on the last treatment. I got your call and simply forgot to pick them up. Im glad we can rely on you for your friendly knowledgeable service.", name: "Jessica", town: "Waukee" },
];

const MOWING_RULES = [
  ["Never more than 1/3", "Cut no more than a third of the blade at once. If it got long, mow at the highest setting, wait a few days, then drop a notch or two."],
  ["Mow high", "About 3 inches in spring and fall, about 4 inches in summer. Higher grass holds moisture and crowds out weeds."],
  ["Leave the clippings", "Bagging can throw away about a third of the fertilizer applied in a year. Clippings don't cause thatch."],
  ["Sharp blades", "Sharpen two to three times a year."],
  ["Switch directions", "Turn your pattern 90 degrees each time so the lawn doesn't develop wear patterns."],
  ["Pick your moment", "Skip mowing when the grass is wet or in the peak heat of a summer day."],
];

const FAQ = [
  { q: "How should I water my lawn?", a: "Deeply and infrequently. For most established Iowa lawns that's 1 to 1.5 inches a week in spring and fall and 2 to 2.5 inches in summer, split over 2 or 3 waterings, unless rain covers it. Water in the early morning so the blades dry during the day; watering at night promotes disease." },
  { q: "Can I let my lawn go dormant in summer?", a: "It's never recommended. Most lawns handle about 2 weeks without rain in hot weather; beyond that, areas die and won't regrow, and weeds, insects and disease move in. Keeping a lawn healthy is easier and cheaper than renovating it." },
  { q: "When and how often should I aerate?", a: "Every lawn benefits from core aeration every year, using a machine that pulls cores (spike aerators only compact the soil). Fall is the best time: it comes before the most valuable feeding of the year, it's ideal before reseeding, and far fewer weeds break through than in spring." },
  { q: "Grass won't grow near my trees. What can I do?", a: "Trees compete for moisture, nutrients and light. Limbing the trees up, extra watering around them and a shade mix of seed all help. If none of that works, the area may be better as a landscaped mulch bed with plantings." },
  { q: "Do I need to be home for a pest treatment?", a: "No. Close the first-floor and basement windows, keep pets away until it dries, and move hoses, tools and toys away from the foundation. The details are left on your front door after each treatment." },
];

const PAYMENT_NOTE = "Payment is due when services are rendered; a 2% monthly service charge ($5.00 minimum) is added after 30 days. Service continues from season to season. To change your service, call the office.";

// ------------------------------------------------------------------ Components
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span><BadgeCheck size={15} /> Family owned &amp; operated since {FOUNDED}</span>
          <span className="topbar-mid">Licensed &amp; insured · Free estimates · Residential &amp; commercial</span>
          <a href={PHONE_HREF}><Phone size={14} /> {PHONE}</a>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
            <img src={logoMark} alt="Urbandale Lawn Solutions, Inc. logo" width="281" height="125" />
          </a>
          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
            {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Free estimate</a>
          </nav>
          <a href={PHONE_HREF} className="header-call"><Phone size={17} /><span>{PHONE}</span></a>
          <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-stripes" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Urbandale · Des Moines · Since {FOUNDED}</p>
          <h1>Your consultant for a <em>beautiful lawn.</em></h1>
          <p className="hero-lede">Fertilizing and weed control, perimeter pest control, mowing, aeration and landscaping from a family-owned company with the same state-certified applicator every visit.</p>
          <div className="hero-ctas">
            <a href={PHONE_HREF} className="btn btn-lime"><Phone size={19} /> Call {PHONE}</a>
            <a href="#contact" className="btn btn-ghost">Get a free estimate <ArrowRight size={18} /></a>
          </div>
          <ul className="hero-proof">
            <li><strong>{new Date().getFullYear() - FOUNDED}+</strong><span>years family run</span></li>
            <li><strong>5</strong><span>step lawn program</span></li>
            <li><strong>13</strong><span>lawn &amp; property services</span></li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-ball">
            <img src={aerationPhoto} alt="Soil cores pulled from a lawn during core aeration" width="500" height="400" />
          </div>
          <div className="hero-card">
            <img src={logo} alt="Urbandale Lawn Solutions, Inc. 515-771-7674, serving Urbandale, Des Moines and surrounding areas" width="281" height="235" />
          </div>
          <div className="hero-tag"><ShieldCheck size={18} /> Licensed &amp; insured</div>
        </div>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section className="program" id="program">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The season plan</p>
          <h2>Five visits. <em>One great lawn.</em></h2>
          <p>The 5-application fertilizing and weed control program, timed to what an Iowa lawn needs from the first thaw to the last cut. A 6-application program is also available.</p>
        </div>
        <ol className="track">
          {PROGRAM.map((step, i) => (
            <li key={step.when} className="track-step">
              <span className="track-dot" aria-hidden="true">{i + 1}</span>
              <span className="track-when">{step.when}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="program-note"><Check size={17} /> Free service calls with complete lawn care packages. All applicators are state certified and receive ongoing training.</p>
      </div>
    </section>
  );
}

function Services() {
  const [showMaterials, setShowMaterials] = useState(false);
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head section-head-row">
          <div>
            <p className="eyebrow">Residential &amp; commercial services</p>
            <h2>Everything from the roots <em>to the curb line.</em></h2>
          </div>
          <a href={PHONE_HREF} className="btn btn-dark"><Phone size={18} /> {PHONE}</a>
        </div>
        <div className="service-groups">
          {SERVICE_GROUPS.map((group) => (
            <div className="service-group" key={group.name}>
              <h3 className="group-name"><span>{group.name}</span></h3>
              <div className="service-list">
                {group.items.map(({ icon: Icon, title, text }) => (
                  <article className="service" key={title}>
                    <span className="service-icon"><Icon size={22} /></span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="photo-row">
          <figure><img src={mowingPhoto} alt="Mower on a freshly cut lawn" loading="lazy" width="400" height="300" /><figcaption>Mowing on the 1/3 rule</figcaption></figure>
          <figure><img src={bedsPhoto} alt="Landscaped beds in front of a home" loading="lazy" width="535" height="324" /><figcaption>Landscape design &amp; install</figcaption></figure>
          <figure><img src={homePhoto} alt="Green lawn and flower beds in front of a brick home" loading="lazy" width="452" height="325" /><figcaption>Tree, shrub &amp; bed care</figcaption></figure>
        </div>
        <div className="materials">
          <button type="button" onClick={() => setShowMaterials((v) => !v)} aria-expanded={showMaterials}>
            <Ruler size={18} /> Landscape materials we install <ChevronDown size={18} className={showMaterials ? "rot" : ""} />
          </button>
          {showMaterials && (
            <dl>
              {LANDSCAPE_MATERIALS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}

function PestBarrier() {
  return (
    <section className="pest" id="pest">
      <div className="wrap pest-grid">
        <div>
          <p className="eyebrow">Perimeter pest control</p>
          <h2>Stop bugs <em>outside</em> the house.</h2>
          <p>Your specialist treats 3 feet up the foundation and 4 to 6 feet out from the house, paying close attention to window wells, cracks and other entry points. The barrier helps eliminate 90% of insects trying to get in, so interior treatments usually aren't needed.</p>
          <ul className="checks">
            <li><Check size={18} /> Three treatments a year: spring, summer and fall</li>
            <li><Check size={18} /> Won't harm plants or pets once dry</li>
            <li><Check size={18} /> No need to be home; details are left on your door</li>
          </ul>
        </div>
        <figure className="barrier" aria-label="Diagram: the treatment covers 3 feet up the foundation and 4 to 6 feet out from the house">
          <svg viewBox="0 0 420 280" role="img" aria-hidden="true">
            <defs>
              <pattern id="soil" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#1b2412" /><circle cx="3" cy="4" r="1.2" fill="#34431f" /></pattern>
            </defs>
            <rect x="0" y="200" width="420" height="80" fill="url(#soil)" />
            <rect x="0" y="194" width="420" height="8" fill="#5f8f22" />
            <rect x="0" y="188" width="70" height="12" fill="rgba(161,214,77,.35)" />
            <rect x="350" y="188" width="70" height="12" fill="rgba(161,214,77,.35)" />
            <path d="M120 200 V95 L210 40 L300 95 V200 Z" fill="#11150c" stroke="#a1d64d" strokeWidth="2.5" />
            <rect x="150" y="120" width="34" height="34" fill="none" stroke="#a1d64d" strokeOpacity=".6" />
            <rect x="236" y="120" width="34" height="34" fill="none" stroke="#a1d64d" strokeOpacity=".6" />
            <rect x="196" y="150" width="28" height="50" fill="none" stroke="#a1d64d" strokeOpacity=".6" />
            <rect x="70" y="158" width="50" height="42" fill="rgba(161,214,77,.28)" />
            <rect x="300" y="158" width="50" height="42" fill="rgba(161,214,77,.28)" />
            <rect x="70" y="188" width="280" height="12" fill="rgba(161,214,77,.28)" />
            <line x1="108" y1="158" x2="108" y2="200" stroke="#e8ff9d" strokeWidth="1.5" />
            <text x="102" y="150" fill="#e8ff9d" fontSize="13" textAnchor="end" fontFamily="Figtree, sans-serif">3 ft up</text>
            <line x1="300" y1="222" x2="350" y2="222" stroke="#e8ff9d" strokeWidth="1.5" />
            <text x="325" y="242" fill="#e8ff9d" fontSize="13" textAnchor="middle" fontFamily="Figtree, sans-serif">4–6 ft out</text>
            <text x="210" y="262" fill="#a1d64d" fontSize="12" textAnchor="middle" fontFamily="Figtree, sans-serif" letterSpacing="2">PROTECTIVE BARRIER</text>
          </svg>
        </figure>
      </div>
      <div className="wrap">
        <p className="pest-list-label">Pests controlled by the perimeter treatment</p>
        <ul className="pest-list">{PESTS.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section className="offers" id="offers">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Sign-up offers</p>
          <h2>Start a program, <em>get one on us.</em></h2>
        </div>
        <div className="offer-grid">
          {OFFERS.map((o) => (
            <article className="offer" key={o.tag}>
              <span className="offer-tag"><Gift size={15} /> Free {o.tag.toLowerCase()}</span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </article>
          ))}
        </div>
        <div className="neighbors">
          <div className="neighbors-head">
            <Users size={28} />
            <div>
              <h3>Neighborhood pricing</h3>
              <p>Team up with the homes next door on the 5-treatment program.</p>
            </div>
          </div>
          <div className="neighbors-deals">
            <div><strong>2 homes in a row</strong><span>Each home gets 50% off its 5th treatment, every season both are customers.</span></div>
            <div><strong>3+ homes in a row</strong><span>Each home gets its 5th treatment free, every season all are customers.</span></div>
            <div><strong>Refer a neighbor</strong><span>A $20 credit on your account for every new customer who signs up for a 5 or 6 step program.</span></div>
          </div>
          <p className="fine">Discounts come off the current regular price; all prior treatments must be paid to receive them.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="eyebrow">About us</p>
          <h2>Family owned since {FOUNDED}. <em>Still growing by referral.</em></h2>
          <p>Urbandale Lawn Solutions, Inc. was started in {FOUNDED} as a family owned and operated company, focused from day one on giving customers the most personal service. Not by low-balling prices or adding treatments you don't need, but on the quality and value of each treatment, backed up by a better lawn every year.</p>
          <blockquote className="mission">
            <span>Mission</span>
            As your personal consultant, we will do everything in our power to provide you with the knowledge and know how to create the most beautiful lawn possible.
          </blockquote>
          <p className="signoff">{OWNER}, Owner · <a href={PHONE_HREF}>{PHONE}</a></p>
        </div>
        <div className="about-side">
          <h3>Why hire us for fertilizing &amp; weed control</h3>
          <ul className="why">{WHY.map((w) => <li key={w}><Check size={17} /><span>{w}</span></li>)}</ul>
          <div className="equipment">
            <img src={magnumPhoto} alt="Permagreen Magnum spreader sprayer" loading="lazy" width="339" height="316" />
            <p><strong>The right machine for the yard.</strong> Traditional spreaders and hose sprayers on smaller properties; Permagreen Magnum spreader-sprayers on medium to multi-acre sites for precise, calibrated coverage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FanClub() {
  return (
    <section className="fans" id="reviews">
      <div className="wrap">
        <div className="section-head section-head-row">
          <div>
            <p className="eyebrow">Our fan club</p>
            <h2>From customers <em>around the metro.</em></h2>
          </div>
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">See our reviews on Google <ArrowRight size={17} /></a>
        </div>
        <div className="fan-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="fan" key={t.name}>
              <Quote size={26} aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <figcaption><strong>{t.name}</strong>, {t.town}<span>From our website</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tips() {
  const [open, setOpen] = useState(0);
  return (
    <section className="tips" id="tips">
      <div className="wrap tips-grid">
        <div>
          <p className="eyebrow">Lawn tips from the pros</p>
          <h2>Mow it <em>like we would.</em></h2>
          <ol className="rules">
            {MOWING_RULES.map(([t, d], i) => (
              <li key={t}><span className="rule-n">{String(i + 1).padStart(2, "0")}</span><div><strong>{t}</strong><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
        <div>
          <p className="eyebrow">Questions we hear</p>
          <div className="faq">
            {FAQ.map((item, i) => (
              <div className={`faq-item${open === i ? " is-open" : ""}`} key={item.q}>
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {item.q}<ChevronDown size={20} />
                </button>
                {open === i && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ service: "", name: "", phone: "", email: "", address: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Please call us instead.");
      setStatus("sent");
      setMessage(data.demo ? `Thanks! This is a concept preview, so nothing was sent. Please call ${PHONE}.` : "Thanks! We'll be in touch about your free estimate.");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }
  const allServices = SERVICE_GROUPS.flatMap((g) => g.items.map((s) => s.title));
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Free estimates</p>
          <h2>Let's look at <em>your lawn.</em></h2>
          <p>Questions about anything on this site, or about your lawn? Call anytime. We're glad to help.</p>
          <a className="big-phone" href={PHONE_HREF}><Phone size={28} /> {PHONE}</a>
          <ul className="contact-list">
            <li><Mail size={18} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><MapPin size={18} /><span>Serving {AREA}</span></li>
            <li><Clock size={18} /><span>Call anytime; service continues season to season</span></li>
          </ul>
          <p className="fine">{PAYMENT_NOTE}</p>
        </div>
        <form className="estimate" onSubmit={submit}>
          <h3>Request a free estimate</h3>
          <label>Service
            <select value={form.service} onChange={(e) => update("service", e.target.value)}>
              <option value="">Choose a service…</option>
              {allServices.map((s) => <option key={s}>{s}</option>)}
              <option>Not sure yet</option>
            </select>
          </label>
          <div className="two">
            <label>Name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
            <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
          </div>
          <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
          <label>Property address<input value={form.address} onChange={(e) => update("address", e.target.value)} autoComplete="street-address" /></label>
          <label>What's going on with your lawn?<textarea rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} /></label>
          <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={(e) => update("website", e.target.value)} />
          <button type="submit" className="btn btn-lime" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send request"} <ArrowRight size={18} /></button>
          {message && <p className={`form-msg ${status}`} role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-stripes" aria-hidden="true" />
      <div className="wrap footer-grid">
        <div>
          <img src={logoMark} alt="Urbandale Lawn Solutions, Inc." width="200" height="89" className="footer-logo" loading="lazy" />
          <p>Family owned &amp; operated since {FOUNDED}. Licensed &amp; insured. Free estimates.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={PHONE_HREF}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>{AREA}</span>
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY} Concept redesign by Blueprint WebStudio · Independent concept, not for official use. Current site: <a href={ORIGINAL}>urbandalelawnsolutions.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Program />
        <Services />
        <PestBarrier />
        <Offers />
        <About />
        <FanClub />
        <Tips />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
