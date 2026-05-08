import { Link } from 'react-router-dom'

// hero
import model1 from '../assets/model1.jpg'

// section images
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic7 from '../assets/pic7.jpg'
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic11 from '../assets/pic11.jpg'
import pic12 from '../assets/pic12.jpg'
import pic13 from '../assets/pic13.jpg'
import pic14 from '../assets/pic14.jpg'
import pic15 from '../assets/pic15.jpg'
import pic18 from '../assets/pic18.jpg'
import pic19 from '../assets/pic19.jpg'
import pic20 from '../assets/pic20.jpg'
import pic21 from '../assets/pic21.jpg'
import Vadesentencelogo from '../assets/Vadesentencelogo.png'
import pic22 from '../assets/pic22.jpg'
import pic23 from '../assets/pic23.jpg'
import pic24 from '../assets/pic24.jpg'
import pic25 from '../assets/pic25.jpg'
import fav from '../assets/fav.jpg'

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
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center"
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

      {/* ── HERO — full bleed model shot ── */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={pic2}
          alt="Vade"
          className="absolute inset-0 w-full h-full object-cover object-[center_53%] scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-6">The Story</p>
          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            About<br />Vade
          </h1>
          <div className="mt-10 w-px h-10 bg-white/20" />
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            {socials.map(s => <SocialLink key={s.label} social={s} />)}
          </div>
        </div>

        <span className="absolute bottom-8 left-8 text-white/30 text-[10px] tracking-[0.4em] uppercase z-10">
          Est. 2026
        </span>
      </section>

      {/* ── SECTION 01 — brand statement + image ── */}
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
          <img src={pic1} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </section>

      {/* ── SECTION 02 — 2-col asymmetric image block ── */}
      <section className="border-t border-white/10 grid grid-cols-1 md:grid-cols-2">
        <div className="h-[50vh] md:h-[70vh] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <img src={pic14} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase">The Look</p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="h-[35vh] relative overflow-hidden border-b border-white/10">
            <img src={pic12} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="h-[35vh] relative overflow-hidden">
            <img src={pic4} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* ── SECTION 03 — full width quote ── */}
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

      {/* ── SECTION 04 — 3-col image strip ── */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="h-[50vh] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
            <img src={pic21} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase">Quality</p>
            </div>
          </div>
          <div className="h-[50vh] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
            <img src={pic5} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase">Craft</p>
            </div>
          </div>
          <div className="h-[50vh] relative overflow-hidden">
            <img src={pic13} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase">Vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 05 — image left, text right ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
        <div className="h-[60vh] md:h-auto relative overflow-hidden order-2 md:order-1">
          <img src={pic18} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_75%] transition-transform duration-700 hover:scale-105" />
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

      {/* ── SECTION 06 — full bleed single image ── */}
      <section className="border-t border-white/10 relative h-[45vh] md:h-[80vh] overflow-hidden">
        <img src={Vadesentencelogo} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-contain invert opacity-90" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-end justify-end p-10 md:p-16">
          <p
            className="text-4xl md:text-6xl font-black leading-none tracking-tight text-white/90 text-right"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <br />
          </p>
        </div>
      </section>

      {/* ── SECTION 07 — 4-col tight grid ── */}
      <section className="border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[pic23, pic15, pic22, pic25].map((img, i) => (
            <div key={i} className={`h-[40vh] relative overflow-hidden ${i < 3 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}>
              <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 08 — 2-col tall grid ── */}
      <section className="border-t border-white/10 grid grid-cols-1 md:grid-cols-2">
        <div className="h-[55vh] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <img src={pic10} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase">The Detail</p>
          </div>
        </div>
        <div className="h-[55vh] relative overflow-hidden">
          <img src={pic24} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase">The Finish</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 09 — final full bleed ── */}
      <section className="border-t border-white/10 relative h-[50vh] overflow-hidden">
        <img src={fav} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <p
            className="text-5xl md:text-8xl font-black text-white/90 tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            This Is Vade.
          </p>
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