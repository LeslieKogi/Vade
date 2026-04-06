import { Link } from 'react-router-dom'

const socials = [
  {
    label: 'Instagram',
    handle: '@vade.in',
    url: 'https://www.instagram.com/vade.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    handle: '@vade.in',
    url: 'https://www.tiktok.com/@vade.in?is_from_webapp=1&sender_device=pc',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
]

function SocialLink({ social }) {
  return (
    
      <a href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3"
    >
      <span className="block border border-white/30 text-white px-5 py-3 flex items-center gap-3 text-xs tracking-[0.25em] uppercase transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
        <span className="transition-colors duration-300">{social.icon}</span>
        <span>{social.handle}</span>
      </span>
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 -translate-x-0.5 -translate-y-0.5 group-hover:border-white transition-colors duration-300" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 translate-x-0.5 -translate-y-0.5 group-hover:border-white transition-colors duration-300" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 -translate-x-0.5 translate-y-0.5 group-hover:border-white transition-colors duration-300" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 translate-x-0.5 translate-y-0.5 group-hover:border-white transition-colors duration-300" />
    </a>
  )
}

function About() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ── HERO OPENER ── */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900" />
        {/* <img src={model1} className="absolute inset-0 w-full h-full object-cover object-top" /> */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-6">The Story</p>
          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            About<br />Vade
          </h1>
          <div className="mt-10 w-px h-10 bg-white/20" />

          {/* social links — right under the hero title */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            {socials.map(s => <SocialLink key={s.label} social={s} />)}
          </div>
        </div>

        <span className="absolute bottom-8 left-8 text-white/30 text-[10px] tracking-[0.4em] uppercase z-10">
          Est. 2026
        </span>
      </section>

      {/* ── SECTION 01 — brand statement ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
        <div className="flex flex-col justify-center px-10 md:px-20 py-20 md:py-32 border-b md:border-b-0 md:border-r border-white/10">
          <p className="text-white/30 text-xs tracking-[0.4em] uppercase mb-8">01 — Who We Are</p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Born From<br />A Vision.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Vade was built for those who refuse to settle. We source products with intention —
            every item chosen for quality, character, and longevity. This isn't fast fashion.
            This is a statement.
          </p>
          <div className="mt-10 h-px w-12 bg-white/30" />
        </div>
        <div className="h-[60vh] md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-neutral-800" />
          {/* <img src={model2} className="absolute inset-0 w-full h-full object-cover" /> */}
        </div>
      </section>

      {/* ── SECTION 02 — full width quote ── */}
      <section className="border-t border-white/10 px-8 md:px-20 py-24 md:py-36 flex flex-col items-center text-center">
        <p className="text-white/20 text-xs tracking-[0.5em] uppercase mb-10">02 — The Ethos</p>
        <blockquote
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight max-w-4xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          "Quality is not an act.<br />
          <span className="text-white/40">It is a habit."</span>
        </blockquote>
        <p className="mt-8 text-white/30 text-xs tracking-[0.3em] uppercase">— Vade Standard</p>
      </section>

      {/* ── SECTION 03 — image left, text right ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
        <div className="h-[60vh] md:h-auto relative overflow-hidden order-2 md:order-1">
          <div className="absolute inset-0 bg-neutral-800" />
          {/* <img src={model3} className="absolute inset-0 w-full h-full object-cover object-top" /> */}
        </div>
        <div className="flex flex-col justify-center px-10 md:px-20 py-20 md:py-32 order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/10">
          <p className="text-white/30 text-xs tracking-[0.4em] uppercase mb-8">03 — The Process</p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Curated.<br />Not Collected.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Every product in the Vade catalogue goes through a strict curation process.
            We obsess over materials, craftsmanship, and the story behind every piece
            before it ever reaches you.
          </p>
          <div className="mt-10 h-px w-12 bg-white/30" />
        </div>
      </section>

      {/* ── SECTION 04 — 3-image grid ── */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="h-[50vh] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
            <div className="absolute inset-0 bg-neutral-900" />
            {/* <img src={img1} className="absolute inset-0 w-full h-full object-cover" /> */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Quality</p>
            </div>
          </div>
          <div className="h-[50vh] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
            <div className="absolute inset-0 bg-neutral-800" />
            {/* <img src={img2} className="absolute inset-0 w-full h-full object-cover" /> */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Craft</p>
            </div>
          </div>
          <div className="h-[50vh] relative overflow-hidden">
            <div className="absolute inset-0 bg-neutral-700" />
            {/* <img src={img3} className="absolute inset-0 w-full h-full object-cover" /> */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="border-t border-white/10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-36">
        <p className="text-white/30 text-xs tracking-[0.5em] uppercase mb-8">Ready?</p>
        <h2
          className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-12"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Shop The<br />Collection.
        </h2>

        <Link to="/" className="group relative mb-16">
          <span className="block border border-white text-white text-xs tracking-[0.35em] uppercase px-10 py-4 relative z-10 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
            Go To Store
          </span>
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
        </Link>

        {/* social links — bottom of page */}
        <div className="border-t border-white/10 w-full pt-12 flex flex-col items-center gap-6">
          <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase">Follow Us</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {socials.map(s => <SocialLink key={s.label} social={s} />)}
          </div>
        </div>
      </section>

    </main>
  )
}

export default About