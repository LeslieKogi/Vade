// src/components/Hero.jsx
import { Link } from 'react-router-dom'
import logo from '../assets/Vadesentencelogo.png'

function Hero() {
  return (
    <section className="flex h-screen w-full overflow-hidden">

      {/* LEFT — white side with logo */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center relative">
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 60px)',
          }}
        />
        <img
          src={logo}
          alt="Vade"
          className="w-3/4 max-w-xs object-contain relative z-10"
        />
        <p className="mt-6 text-xs tracking-[0.3em] uppercase text-neutral-400 relative z-10">
          Est. 2025
        </p>
      </div>

      {/* CENTER divider line */}
      <div className="w-px bg-black shrink-0 relative z-20" />

      {/* RIGHT — black side with CTA */}
      <div className="w-1/2 bg-black flex flex-col items-center justify-center relative overflow-hidden">

        {/* large background letter */}
        <span
          className="absolute text-[28rem] font-black text-white opacity-[0.03] select-none pointer-events-none leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          V
        </span>

        <div className="relative z-10 flex flex-col items-center text-center px-10 gap-8">
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase">
            New Collection
          </p>

          <h2
            className="text-white text-5xl font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Everything<br />You Need.
          </h2>

          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Curated products. Uncompromising quality. Delivered to your door.
          </p>

          {/* THE COOL BUTTON */}
          <a
            href="#products"
            className="group relative mt-4"
          >
            <span className="block border border-white text-white text-xs tracking-[0.35em] uppercase px-10 py-4 relative z-10 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              Shop Now
            </span>
            {/* edgy corner accents */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          </a>
        </div>

        {/* bottom scroll hint */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2">
          <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/20" />
        </div>
      </div>
    </section>
  )
}

export default Hero