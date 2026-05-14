"use client";

import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */
type Breakpoint = "mobile" | "tablet" | "desktop";

type ParsedYT = {
  id: string;
  isShort: boolean;
} | null;

function parseYT(url: string): ParsedYT {
  const shorts = url.match(/shorts\/([^?&/]+)/);
  if (shorts) return { id: shorts[1], isShort: true };

  const v = url.match(/(?:youtu\.be\/|[?&]v=)([^?&]+)/);
  if (v) return { id: v[1], isShort: false };

  return null;
}

function ytThumb(id: string): string {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function ytWatch(url: string): string {
  return url;
}

function smoothScroll(id: string): void {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─────────────────────────────────────────────────────────────
   RESPONSIVE HOOK
───────────────────────────────────────────────────────────── */
function useBreakpoint(): Breakpoint {
    const [bp, setBp] = useState<Breakpoint>("desktop");
  
    useEffect(() => {
      const check = () => {
        const w = window.innerWidth;
        setBp(w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop");
      };
  
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);
  
    return bp;
  }
/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

interface Ad {
    id: number;
    badge: string;
    brand: string;
    headline: string;
    format: string;
    aspect: string;
    url: string;
    accent: string;
    insight: string;
    brief: string;
    tags: string[];
    vo?: string;
    voTranslation?: string;
    voTagline?: string;
  }
  
  interface Film {
    id: number;
    icon: string;
    title: string;
    role: string;
    roleColor: string;
    roleBg: string;
    url: string;
    about: string;
    insight: string;
  }
  
  interface Owner {
    name: string;
    firstName: string;
    phone: string;
    email: string;
  }

const ADS: Ad[] = [
  {
    id: 1,
    badge: "🥭",
    brand: "Aamchi by Hocco",
    headline: "The First Bite Takes You Back",
    format: "Video Ad · Food & Beverage · Digital / Social",
    aspect: "16/9",
    url: "https://youtu.be/yTDXWqg9_cs",
    accent: "#F59E0B",
    insight:
      "Taste is the most powerful memory trigger the human brain possesses — and this ad weaponises it deliberately. Aamchi's mango ice cream isn't being sold as a dessert; it's being sold as a time machine. The moment an elderly viewer catches that familiar mango flavour, they're not in a shop — they're back in a summer they loved. This nostalgia-first approach bypasses rational purchase decisions entirely, making the brand feel emotionally indispensable. In a crowded ice cream market, this is how you build loyalty that no discount can dislodge.",
    brief:
      "A great mango doesn't just taste good — it remembers for you. This ad captures the moment a man smells Aamchi mango ice cream and is instantly transported back to childhood summers of climbing trees and eating raw mangoes with friends. It targets elderly consumers for whom the flavour of a real mango triggers a flood of vivid, joyful memories.",
    tags: ["Nostalgia marketing", "Sensory storytelling", "Elderly targeting", "Brand loyalty", "Food & Beverage"],
  },
  {
    id: 2,
    badge: "🔋",
    brand: "Duracell · Gujarati Market",
    headline: "Garam Din, Dead Remote",
    format: "Video Ad · Consumer Electronics · Regional TV / Digital",
    aspect: "16/9",
    url: "https://youtu.be/WeO5kNqdvZM",
    accent: "#3B82F6",
    insight:
      "This ad is engineered to create a conscious brand switch. The viewer has suffered a dead battery at the worst moment — that frustration is the hook. But the real strategy is in what happens next: the voiceover doesn't just remind you Duracell exists; it makes you feel foolish for not having bought it already. 'Bus aatla jaldi battery khallas?' triggers mild self-reproach — a proven psychological lever that drives purchase behaviour. The Gujarati language makes it feel like advice from a trusted neighbour, not a brand. After watching this, buying any other battery feels like a deliberate bad choice.",
    brief:
      "After suffering through brutal heat and a long commute, a man reaches for his AC remote — and nothing happens. Dead batteries. The Gujarati voiceover lands the punchline that makes buyers consciously choose Duracell over any other battery, because they know it lasts longer.",
    vo: '"Bus aatla jaldi battery khallas? Aa le, Duracell lagad — Duracell laambu chale."',
    voTranslation: "Already dead this fast? Here, put in Duracell — Duracell lasts longer.",
    tags: ["Conscious brand switching", "Pain-point marketing", "Regional localisation", "Gujarati market", "Scriptwriting"],
  },
  {
    id: 3,
    badge: "✨",
    brand: "Fixderma Nigrifix · AI UGC",
    headline: "Real Results, Reimagined",
    format: "Vertical Reel 9:16 · Skincare · Instagram / Meta",
    aspect: "9/16",
    url: "https://www.youtube.com/shorts/w_EkTwjbCdk",
    accent: "#8B5CF6",
    insight:
      "This ad is a masterclass in performance marketing architecture. UGC-style content earns trust because it doesn't look like an ad — and on Meta feeds, trust is the difference between a scroll and a click. Using AI-generated talent eliminates production cost while keeping the human, relatable look that makes UGC work. The elbow pigmentation focus is precision targeting: a specific, common insecurity that people actively search solutions for. The CTA closes the awareness-to-purchase loop inside a single 30-second unit — a full marketing funnel in one piece of content.",
    brief:
      "An AI-generated woman applies Nigrifix cream to a visibly pigmented elbow in an intimate, close-up style that looks and feels like organic skincare content. Shot in vertical 9:16 for Instagram and Meta, it targets both men and women dealing with skin pigmentation, and closes with a direct-to-purchase CTA.",
    tags: ["AI content creation", "UGC advertising", "Performance marketing", "Reel-first", "Full-funnel", "CTA optimisation"],
  },
  {
    id: 4,
    badge: "👖",
    brand: "Jane Jeans",
    headline: "The Best In You",
    format: "Video Ad · Fashion & Apparel · Digital / OTT",
    aspect: "16/9",
    url: "https://youtu.be/rL9lk3ioRf8",
    accent: "#D1D5DB",
    insight:
      "This ad operates at the highest level of fashion marketing — identity-based storytelling. Rather than competing on fabric, fit, or price, Jane Jeans positions itself as the catalyst for the version of yourself you actually want to be. The split-screen device does the heavy lifting visually: you see both sides of yourself at once, and the contrast is uncomfortable in exactly the right way. The voiceover doesn't sell jeans — it gives permission. 'Confidence is within you' removes the barrier between the viewer and their aspirational self, with Jane Jeans as the vehicle. This is brand-building that creates lifelong customers, not one-time buyers.",
    brief:
      "A split-screen shows the same man in the same situations — on one side, hesitant and under-confident; on the other, assured and magnetic. No dialogue, just contrast. Then the voiceover speaks directly to the viewer's sense of self, positioning Jane Jeans not as clothing but as a choice to become your best self.",
    vo: "\"Confidence is something that you feel about yourself. It's within you. Feel yourself, meet your real confidence.\"",
    voTagline: "Jane Jeans — The Best In You.",
    tags: ["Identity-based marketing", "Brand storytelling", "Copywriting", "Fashion & Apparel", "Split-screen technique"],
  },
];

const FILMS: Film[] = [
  {
    id: 1,
    icon: "🎭",
    title: "The Final Fold",
    role: "Actor",
    roleColor: "#92400E",
    roleBg: "#FEF3C7",
    url: "https://youtu.be/8FUJPhwIZ_k",
    about: "Performed as an on-screen actor, bringing a character to life through presence, timing, and physicality on a short film set.",
    insight:
      "Marketers who have stood in front of a camera understand viscerally what makes a performance feel authentic versus forced — whether the talent looks comfortable, whether the line delivery sounds natural, whether the emotion reads on screen. This is an invaluable instinct when directing talent for brand films, briefing UGC creators, or reviewing social video content. Most marketing candidates have never been on camera; this credit is a genuine differentiator.",
  },
  {
    id: 2,
    icon: "🎙️",
    title: "Min Uyir",
    role: "Production · Location Scout · VO Artist",
    roleColor: "#166534",
    roleBg: "#DCFCE7",
    url: "https://youtu.be/ysAG3JiQaX0",
    about: "Wore multiple hats — scouting and locking filming locations, supporting on-set production logistics, and performing as the film's voiceover artist.",
    insight:
      "Location scouting is visual thinking made practical — knowing whether a space serves the story's mood, the light, the blocking. That is the exact same skill used when selecting backdrops for brand shoots, product photography, or campaign visuals. The voiceover credit is equally valuable: vocal performance, pacing, and tone are core to brand voice work, podcast advertising, and audio branding. This role shows range that few marketing candidates can claim.",
  },
  {
    id: 3,
    icon: "💡",
    title: "Cassandra",
    role: "Lighting & Scene Continuity",
    roleColor: "#0C4A6E",
    roleBg: "#E0F2FE",
    url: "https://youtu.be/aoE3UZR80F4",
    about: "Responsible for managing the lighting of scenes and maintaining continuity across takes — ensuring consistent visual quality throughout the shoot.",
    insight:
      "Lighting and continuity are two of the most invisible-yet-critical elements of any visual production. A marketer who understands how lighting shapes mood, directs viewer attention, and affects how a product looks on camera has a decisive edge when briefing photographers, art-directing brand shoots, or reviewing content edits. Continuity thinking — catching what changed between takes — is also a proxy for the detail-orientation that every great marketing coordinator needs daily.",
  },
];

const OWNER: Owner = {
    name: "Maharshi Alpesh Chavda",
    firstName: "Maharshi",
    phone: "9426036764",
    email: "maharshialpesh@gmail.com",
  };
  

interface YTPreviewProps {
    url: string;
    aspect: string;
    isPortrait: boolean;
    bp: Breakpoint;
  }
  
/* ─────────────────────────────────────────────────────────────
   YOUTUBE THUMBNAIL PLAYER
   Shows real thumbnail → click opens YouTube in new tab
───────────────────────────────────────────────────────────── */
function YTPreview({ url, aspect, isPortrait, bp }: YTPreviewProps) {
  const [hovered, setHovered] = useState(false);
  const parsed = parseYT(url);
  const isMobile = bp === "mobile";

  if (!parsed) return null;
  const { id } = parsed;
  const thumb = ytThumb(id);

  const wrapStyle = isPortrait
    ? {
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#090909",
        padding: isMobile ? "1.5rem 1rem" : "2rem 1.5rem",
      }
    : { background: "#090909" };

    const innerStyle: React.CSSProperties = isPortrait
    ? {
        width: isMobile ? "min(200px,70%)" : "min(240px,55%)",
        aspectRatio: "9 / 16",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 8px 40px rgba(0,0,0,0.7)"
          : "0 4px 20px rgba(0,0,0,0.5)",
        transition: "box-shadow 0.2s, transform 0.2s",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }
    : {
        width: "100%",
        aspectRatio: "16 / 9",
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        transition: "opacity 0.2s",
      };

  return (
    <div style={wrapStyle}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", ...innerStyle, textDecoration: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Thumbnail image */}
        <img
          src={thumb}
          alt="Video thumbnail"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", display: "block",
            filter: hovered ? "brightness(0.65)" : "brightness(0.85)",
            transition: "filter 0.25s",
          }}
        />

        {/* Play button overlay */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "10px",
        }}>
          {/* Play circle */}
          <div style={{
            width: hovered ? "68px" : "58px",
            height: hovered ? "68px" : "58px",
            borderRadius: "50%",
            background: hovered ? "rgba(255,0,0,0.9)" : "rgba(0,0,0,0.7)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.22s ease",
            boxShadow: hovered ? "0 4px 24px rgba(255,0,0,0.5)" : "0 2px 12px rgba(0,0,0,0.5)",
          }}>
            {/* Triangle play icon */}
            <div style={{
              width: 0, height: 0,
              borderTop: "11px solid transparent",
              borderBottom: "11px solid transparent",
              borderLeft: "20px solid #fff",
              marginLeft: "4px",
            }} />
          </div>

          {/* "Watch on YouTube" label on hover */}
          {hovered && (
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#fff",
              background: "rgba(0,0,0,0.55)",
              padding: "4px 12px", borderRadius: "20px",
              backdropFilter: "blur(4px)",
            }}>
              Watch on YouTube ↗
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NAV
───────────────────────────────────────────────────────────── */
const F = { playfair: "'Playfair Display', Georgia, serif", dm: "'DM Sans', system-ui, sans-serif" };

function Nav({ bp }: {bp: Breakpoint}) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = bp === "mobile";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["hero","ads","films","contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [{ label:"Home", id:"hero" },{ label:"Ads", id:"ads" },{ label:"Films", id:"films" },{ label:"Contact", id:"contact" }];

  const go = (id: any) => { smoothScroll(id); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:200,
        background: scrolled || menuOpen ? "rgba(8,8,8,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding: isMobile ? "0 1.25rem" : "0 2.5rem",
        height: isMobile ? "56px" : "62px",
        transition:"background 0.3s, border-color 0.3s",
      }}>
        <button onClick={() => go("hero")} style={{ background:"none", border:"none", cursor:"pointer", padding:0, fontFamily:F.playfair, fontSize: isMobile?"1rem":"1.1rem", color:"#fff" }}>
          {OWNER.firstName}
        </button>

        {!isMobile && (
          <div style={{ display:"flex", gap:"2rem" }}>
            {links.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)} style={{
                background:"none", border:"none", cursor:"pointer", padding:"4px 0",
                borderBottom: active===id ? "1px solid #F59E0B" : "1px solid transparent",
                fontFamily:F.dm, fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase",
                color: active===id ? "#F59E0B" : "rgba(255,255,255,0.48)",
                transition:"color 0.2s, border-color 0.2s",
              }}>{label}</button>
            ))}
          </div>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{ background:"none", border:"none", cursor:"pointer", padding:"6px", display:"flex", flexDirection:"column", gap:"5px", alignItems:"flex-end" }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:"block", height:"1.5px", borderRadius:"2px", background:"#fff", transition:"all 0.25s",
                width: menuOpen ? (i===1?"0":"22px") : (i===1?"16px":"22px"),
                transform: menuOpen ? (i===0?"rotate(45deg) translate(4px,4px)" : i===2?"rotate(-45deg) translate(4px,-4px)":"none") : "none",
              }}/>
            ))}
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{ position:"fixed", top:"56px", left:0, right:0, zIndex:199, background:"rgba(8,8,8,0.97)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(255,255,255,0.07)", display:"flex", flexDirection:"column", padding:"1rem 1.5rem 1.5rem" }}>
          {links.map(({ label, id }) => (
            <button key={id} onClick={() => go(id)} style={{ background:"none", border:"none", cursor:"pointer", padding:"0.85rem 0", borderBottom:"1px solid rgba(255,255,255,0.06)", fontFamily:F.dm, fontSize:"0.9rem", letterSpacing:"0.08em", textTransform:"uppercase", textAlign:"left", color: active===id?"#F59E0B":"rgba(255,255,255,0.6)" }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */
function Hero({ bp }: {bp: Breakpoint}) {
  const isMobile = bp==="mobile", isTablet = bp==="tablet";
  return (
    <section id="hero" style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding: isMobile?"5rem 1.5rem 4rem":"6rem 2rem 5rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"38%", left:"50%", transform:"translate(-50%,-50%)", width: isMobile?"400px":"800px", height: isMobile?"400px":"800px", borderRadius:"50%", background:"radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 68%)", pointerEvents:"none" }} />

      <p style={{ fontFamily:F.dm, fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#F59E0B", marginBottom:"1rem", animation:"fadeUp 0.6s ease both" }}>
        Marketing Assistant · Creative &amp; Strategy
      </p>
      <h1 style={{ fontFamily:F.playfair, fontSize: isMobile?"2.2rem":isTablet?"3.6rem":"5rem", fontWeight:700, color:"#fff", lineHeight:1.1, margin:"0 0 0.5rem", animation:"fadeUp 0.6s 0.1s ease both", opacity:0 }}>
        {OWNER.name}
      </h1>
      <p style={{ fontFamily:F.playfair, fontStyle:"italic", fontSize: isMobile?"1rem":"1.25rem", color:"#F59E0B", margin:"0 0 1.25rem", animation:"fadeUp 0.6s 0.18s ease both", opacity:0 }}>
        Where Strategy Meets Storytelling
      </p>
      <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.87rem":"0.97rem", color:"rgba(255,255,255,0.46)", maxWidth:"520px", lineHeight:1.85, marginBottom:"2.5rem", animation:"fadeUp 0.6s 0.26s ease both", opacity:0 }}>
        A portfolio of original ads and short film work — blending creative execution with strategic intent across food, fashion, FMCG, and skincare.
      </p>

      <div style={{ display:"flex", gap:"0.85rem", flexWrap:"wrap", justifyContent:"center", animation:"fadeUp 0.6s 0.34s ease both", opacity:0 }}>
        <button onClick={() => smoothScroll("ads")} style={{ background:"#F59E0B", color:"#000", border:"none", cursor:"pointer", fontFamily:F.dm, fontWeight:700, fontSize: isMobile?"0.75rem":"0.8rem", letterSpacing:"0.08em", textTransform:"uppercase", padding: isMobile?"0.8rem 1.8rem":"0.9rem 2.2rem", borderRadius:"2px" }}>
          View Ads ↓
        </button>
        <button onClick={() => smoothScroll("films")} style={{ background:"transparent", color:"#fff", cursor:"pointer", border:"1px solid rgba(255,255,255,0.25)", fontFamily:F.dm, fontWeight:500, fontSize: isMobile?"0.75rem":"0.8rem", letterSpacing:"0.08em", textTransform:"uppercase", padding: isMobile?"0.8rem 1.8rem":"0.9rem 2.2rem", borderRadius:"2px" }}>
          View Films ↓
        </button>
      </div>

      <div style={{ display:"flex", gap: isMobile?"2rem":"4rem", marginTop: isMobile?"4rem":"5.5rem", flexWrap:"wrap", justifyContent:"center", animation:"fadeUp 0.6s 0.42s ease both", opacity:0 }}>
        {[["4","Original Ads"],["3","Short Films"],["4+","Industries"],["1","AI-native UGC"]].map(([n,l]) => (
          <div key={l} style={{ textAlign:"center" }}>
            <p style={{ fontFamily:F.playfair, fontSize: isMobile?"2rem":"2.4rem", color:"#F59E0B", margin:0, lineHeight:1 }}>{n}</p>
            <p style={{ fontFamily:F.dm, fontSize:"0.65rem", color:"rgba(255,255,255,0.3)", letterSpacing:"0.12em", textTransform:"uppercase", margin:"6px 0 0" }}>{l}</p>
          </div>
        ))}
      </div>

      <div style={{ position:"absolute", bottom:"2rem", left:"50%", animation:"bounce 2.2s ease-in-out infinite" }}>
        <div style={{ width:"1px", height:"44px", background:"linear-gradient(to bottom, transparent, rgba(255,255,255,0.18))", margin:"0 auto" }} />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ATOMS
───────────────────────────────────────────────────────────── */
function Tag({ label, accent } : {
    label: string;
    accent?: string;
  }) {
  return <span style={{ fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.06em", textTransform:"uppercase", color: accent||"rgba(255,255,255,0.4)", border:`1px solid ${accent?accent+"55":"rgba(255,255,255,0.12)"}`, padding:"3px 9px", borderRadius:"2px", display:"inline-block" }}>{label}</span>;
}

function Divider() {
  return <div style={{ padding:"0 2rem" }}><div style={{ maxWidth:"1100px", margin:"0 auto", height:"1px", background:"rgba(255,255,255,0.06)" }} /></div>;
}

interface SectionHeaderProps {
    num: string;
    title: string;
    sub: string;
    bp: Breakpoint;
  }

function SectionHeader({ num, title, sub, bp } : SectionHeaderProps) {
  const isMobile = bp==="mobile";
  return (
    <div style={{ marginBottom: isMobile?"2.5rem":"3.5rem" }}>
      <p style={{ fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#F59E0B", marginBottom:"0.55rem" }}>{num}</p>
      <h2 style={{ fontFamily:F.playfair, fontSize: isMobile?"1.9rem":"2.8rem", color:"#fff", margin:"0 0 0.75rem", lineHeight:1.15 }}>{title}</h2>
      <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.86rem":"0.92rem", color:"rgba(255,255,255,0.4)", maxWidth:"600px", lineHeight:1.85 }}>{sub}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   AD CARD
───────────────────────────────────────────────────────────── */
interface AdCardProps {
  ad: Ad;
  index: number;
  bp: Breakpoint;
}


function AdCard({ ad, index, bp } : AdCardProps) {
  const [briefOpen, setBriefOpen] = useState(false);
  const isPortrait = ad.aspect === "9/16";
  const isMobile   = bp === "mobile";

  return (
    <article style={{ background:"#111", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"10px", overflow:"hidden", display:"flex", flexDirection:"column", animation:`fadeUp 0.55s ${0.05+index*0.07}s ease both`, opacity:0 }}>

      {/* Thumbnail preview */}
      <YTPreview url={ad.url} aspect={ad.aspect} isPortrait={isPortrait} bp={bp} />

      {/* Body */}
      <div style={{ padding: isMobile?"1.3rem 1.25rem":"1.6rem 1.8rem", display:"flex", flexDirection:"column", gap:"1rem", flexGrow:1 }}>

        {/* Brand + title */}
        <div>
          <p style={{ fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.14em", textTransform:"uppercase", color:ad.accent, marginBottom:"0.3rem" }}>{ad.badge} &nbsp;{ad.brand}</p>
          <h3 style={{ fontFamily:F.playfair, fontSize: isMobile?"1.25rem":"1.42rem", color:"#fff", margin:"0 0 3px", lineHeight:1.2 }}>{ad.headline}</h3>
          <p style={{ fontFamily:F.dm, fontSize:"0.68rem", color:"rgba(255,255,255,0.26)", letterSpacing:"0.04em" }}>{ad.format}</p>
        </div>

        {/* ★ MARKETING INSIGHT — primary, always visible ★ */}
        <div style={{ background:`linear-gradient(135deg,${ad.accent}12 0%,transparent 100%)`, border:`1px solid ${ad.accent}33`, borderLeft:`4px solid ${ad.accent}`, borderRadius:"0 8px 8px 0", padding: isMobile?"0.9rem 1rem":"1.1rem 1.25rem" }}>
          <p style={{ fontFamily:F.dm, fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase", color:ad.accent, marginBottom:"0.5rem" }}>💡 Marketing Insight</p>
          <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.84rem":"0.9rem", color:"rgba(255,255,255,0.82)", lineHeight:1.82, margin:0 }}>{ad.insight}</p>
        </div>

        {/* VO */}
        {ad.vo && (
          <blockquote style={{ borderLeft:`2px solid ${ad.accent}44`, margin:0, padding:"0.65rem 1rem", background:"rgba(255,255,255,0.02)", borderRadius:"0 4px 4px 0" }}>
            <p style={{ fontFamily:F.playfair, fontStyle:"italic", fontSize:"0.88rem", color:"rgba(255,255,255,0.75)", margin:0 }}>{ad.vo}</p>
            {ad.voTranslation && <p style={{ fontFamily:F.dm, fontSize:"0.72rem", color:"rgba(255,255,255,0.32)", marginTop:"4px" }}>Translation: {ad.voTranslation}</p>}
            {ad.voTagline     && <p style={{ fontFamily:F.dm, fontSize:"0.72rem", color:ad.accent, marginTop:"4px", letterSpacing:"0.04em" }}>{ad.voTagline}</p>}
          </blockquote>
        )}

        {/* Collapsible brief */}
        <div>
          <button onClick={() => setBriefOpen(o=>!o)} style={{ background:"none", border:"1px solid rgba(255,255,255,0.08)", cursor:"pointer", width:"100%", textAlign:"left", padding:"0.6rem 0.9rem", borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily:F.dm, fontSize:"0.68rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(255,255,255,0.34)", transition:"border-color 0.2s,color 0.2s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; e.currentTarget.style.color="rgba(255,255,255,0.6)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.color="rgba(255,255,255,0.34)"; }}>
            <span>📋 Ad Brief &amp; Concept</span>
            <span style={{ fontSize:"1.1rem", lineHeight:1 }}>{briefOpen?"−":"+"}</span>
          </button>
          {briefOpen && (
            <div style={{ marginTop:"0.45rem", background:"rgba(255,255,255,0.02)", borderLeft:"2px solid rgba(255,255,255,0.1)", padding:"0.85rem 1rem", borderRadius:"0 4px 4px 0" }}>
              <p style={{ fontFamily:F.dm, fontSize:"0.86rem", color:"rgba(255,255,255,0.52)", lineHeight:1.8, margin:0 }}>{ad.brief}</p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"auto", paddingTop:"0.25rem" }}>
          {ad.tags.map(t=><Tag key={t} label={t} accent={ad.accent}/>)}
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   FILM CARD
───────────────────────────────────────────────────────────── */

interface FilmCardProps {
    film: Film;
    index: number;
    bp: Breakpoint;
  }
function FilmCard({ film, index, bp } : FilmCardProps) {
  const [insightOpen, setInsightOpen] = useState(false);
  const isMobile = bp==="mobile";

  return (
    <article style={{ background:"#111", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"10px", overflow:"hidden", display:"flex", flexDirection:"column", animation:`fadeUp 0.55s ${0.05+index*0.09}s ease both`, opacity:0 }}>
      <YTPreview url={film.url} aspect="16/9" isPortrait={false} bp={bp} />

      <div style={{ padding: isMobile?"1.2rem 1.25rem":"1.4rem 1.7rem", display:"flex", flexDirection:"column", gap:"0.9rem", flexGrow:1 }}>
        <div>
          <p style={{ fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.26)", marginBottom:"0.25rem" }}>{film.icon} &nbsp;Short Film</p>
          <h3 style={{ fontFamily:F.playfair, fontSize: isMobile?"1.2rem":"1.28rem", color:"#fff", margin:"0 0 0.45rem" }}>{film.title}</h3>
          <span style={{ display:"inline-block", fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.06em", textTransform:"uppercase", color:film.roleColor, background:film.roleBg, padding:"3px 10px", borderRadius:"2px" }}>{film.role}</span>
        </div>

        <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.84rem":"0.87rem", color:"rgba(255,255,255,0.5)", lineHeight:1.78 }}>{film.about}</p>

        {/* ★ MARKETING INSIGHT ★ */}
        <div style={{ background:"linear-gradient(135deg,rgba(245,158,11,0.08) 0%,transparent 100%)", border:"1px solid rgba(245,158,11,0.2)", borderLeft:"4px solid #F59E0B", borderRadius:"0 8px 8px 0", overflow:"hidden" }}>
          <button onClick={() => setInsightOpen(o=>!o)} style={{ background:"none", border:"none", cursor:"pointer", width:"100%", textAlign:"left", padding:"0.8rem 1rem", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#F59E0B" }}>
            <span>💡 Marketing Insight</span>
            <span style={{ fontSize:"1.1rem", lineHeight:1, color:"rgba(245,158,11,0.6)" }}>{insightOpen?"−":"+"}</span>
          </button>
          {insightOpen && (
            <div style={{ padding:"0 1rem 0.9rem" }}>
              <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.83rem":"0.87rem", color:"rgba(255,255,255,0.75)", lineHeight:1.82, margin:0 }}>{film.insight}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────── */
function Contact({ bp } : {bp: Breakpoint}) {
  const isMobile = bp==="mobile";
  const cards = [
    { icon:"📧", label:"Email", value:OWNER.email, href:`mailto:${OWNER.email}` },
    { icon:"📱", label:"Phone", value:OWNER.phone, href:`tel:${OWNER.phone}` },
  ];
  return (
    <section id="contact" style={{ padding: isMobile?"5rem 0 6rem":"7rem 0 8rem" }}>
      <div style={{ maxWidth:"720px", margin:"0 auto", padding:"0 1.5rem", textAlign:"center" }}>
        <p style={{ fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#F59E0B", marginBottom:"0.7rem" }}>Let&apos;s Work Together</p>
        <h2 style={{ fontFamily:F.playfair, fontSize: isMobile?"2rem":"2.9rem", color:"#fff", margin:"0 0 1rem" }}>Open to Opportunities</h2>
        <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.88rem":"0.95rem", color:"rgba(255,255,255,0.42)", lineHeight:1.85, marginBottom:"2.5rem" }}>
          I&apos;m actively looking for marketing assistant roles where creative storytelling and strategic thinking are both valued. Whether it&apos;s social content, brand campaigns, or video production — I bring both the ideas and the on-set experience to execute them.
        </p>
        <div style={{ display:"grid", gridTemplateColumns: isMobile?"1fr":"1fr 1fr", gap:"1rem", marginBottom:"2rem" }}>
          {cards.map(({ icon, label, value, href }) => (
            <a key={label} href={href} style={{ display:"block", background:"#111", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"8px", padding:"1.25rem 1.5rem", textDecoration:"none", transition:"border-color 0.2s,background 0.2s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(245,158,11,0.4)"; e.currentTarget.style.background="#161616"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.background="#111"; }}>
              <p style={{ fontSize:"1.4rem", margin:"0 0 0.4rem" }}>{icon}</p>
              <p style={{ fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:"0.25rem" }}>{label}</p>
              <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.88rem":"0.92rem", color:"#fff", margin:0 }}>{value}</p>
            </a>
          ))}
        </div>
        <a href={`mailto:${OWNER.email}`} style={{ display:"inline-block", background:"#F59E0B", color:"#000", fontFamily:F.dm, fontWeight:700, fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", padding:"1rem 2.5rem", borderRadius:"2px", textDecoration:"none", transition:"opacity 0.2s" }}
          onMouseEnter={e=>e.currentTarget.style.opacity="0.82"}
          onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
          Get in Touch →
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────────── */

function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
export default function Portfolio() {
  const mounted = useMounted();

  
  const bp = useBreakpoint();
  const isMobile = bp==="mobile";
  const pad = isMobile?"4rem 0 3.5rem":"7rem 0 5rem";
  const inner = { maxWidth:"1100px", margin:"0 auto", padding: isMobile?"0 1.25rem":"0 2rem" };
  if (!mounted) return null; 

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
        body{background:#080808;color:#fff;overflow-x:hidden}
        img,iframe,video{max-width:100%}
        button{-webkit-tap-highlight-color:transparent}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#0a0a0a}
        ::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:3px}
        button:focus-visible{outline:2px solid #F59E0B;outline-offset:2px}
        @media(max-width:639px){.ads-grid{grid-template-columns:1fr!important}.films-grid{grid-template-columns:1fr!important}}
        @media(min-width:640px) and (max-width:1023px){.ads-grid{grid-template-columns:1fr!important}.films-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>

      <div style={{ background:"#080808", minHeight:"100vh" }}>
        <Nav bp={bp}/>
        <Hero bp={bp}/>
        <Divider/>

        {/* ADS */}
        <section id="ads" style={{ padding:pad }}>
          <div style={inner}>
            <SectionHeader num="Section 01 — Advertisements" title="Original Ads" sub="Four ads across food, FMCG, skincare, and fashion — each built around a clear strategic intent. Hover any thumbnail to watch on YouTube." bp={bp}/>
            <div className="ads-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,490px),1fr))", gap: isMobile?"1.25rem":"1.75rem" }}>
              {ADS.map((ad,i)=><AdCard key={ad.id} ad={ad} index={i} bp={bp}/>)}
            </div>
          </div>
        </section>

        <Divider/>

        {/* FILMS */}
        <section id="films" style={{ padding:pad }}>
          <div style={inner}>
            <SectionHeader num="Section 02 — Short Films" title="On-Screen & On-Set Experience" sub="Three films, three different roles — actor, production crew, and lighting department. Hover any thumbnail to watch on YouTube." bp={bp}/>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"7px", marginBottom: isMobile?"2rem":"3rem" }}>
              {["On-camera performance","Production coordination","Location scouting","Voiceover","Scene continuity","Lighting management","Cross-dept. collaboration"].map(s=><Tag key={s} label={s}/>)}
            </div>
            <div className="films-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,330px),1fr))", gap: isMobile?"1.25rem":"1.5rem", marginBottom: isMobile?"2rem":"2.5rem" }}>
              {FILMS.map((f,i)=><FilmCard key={f.id} film={f} index={i} bp={bp}/>)}
            </div>
            <div style={{ background:"#111", border:"1px solid rgba(255,255,255,0.07)", borderLeft:"4px solid #F59E0B", borderRadius:"0 8px 8px 0", padding: isMobile?"1.25rem":"1.75rem 2rem" }}>
              <p style={{ fontFamily:F.dm, fontSize:"0.65rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"#F59E0B", marginBottom:"0.55rem" }}>What this section says about you</p>
              <p style={{ fontFamily:F.dm, fontSize: isMobile?"0.86rem":"0.93rem", color:"rgba(255,255,255,0.58)", lineHeight:1.85, margin:0 }}>
                Across three films, you&apos;ve worked in front of the camera, behind it, and inside the production machine itself. That 360° experience is rare for a marketing candidate — it means you can collaborate fluently with directors, editors, and crew on branded content shoots, and bring genuine on-set credibility to any video-led marketing role.
              </p>
            </div>
          </div>
        </section>

        <Divider/>
        <Contact bp={bp}/>

        <footer style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding: isMobile?"1.25rem":"1.5rem 2.5rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.75rem" }}>
          <p style={{ fontFamily:F.dm, fontSize:"0.72rem", color:"rgba(255,255,255,0.18)" }}>© 2025 · {OWNER.name} · All rights reserved.</p>
          <p style={{ fontFamily:F.playfair, fontSize:"0.85rem", color:"rgba(255,255,255,0.16)", fontStyle:"italic" }}>Strategy. Story. Screen.</p>
        </footer>
      </div>
    </>
  );
}