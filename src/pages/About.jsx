import { Link } from 'react-router-dom'

// swap these divs for <img src={...} /> when you have the images
function ImgBlock({ className, tall = false }) {
  return (
    <div className={`bg-neutral-800 w-full ${tall ? 'h-[70vh]' : 'h-[50vh]'} ${className}`} />
  )
}

function About() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ── HERO OPENER ── full bleed image with title over it */}
      <section className="relative h-screen overflow-hidden">
        {/* swap with your image */}
        <div className="absolute inset-0 bg-neutral-900" />
        {/* <img src={model1} className="absolute inset-0 w-full h-full object-cover object-top" /> */}

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* centered text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-6">
            The Story
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            About<br />Vade
          </h1>
          <div className="mt-10 w-px h-16 bg-white/20" />
        </div>

        {/* bottom left label */}
        <span className="absolute bottom-8 left-8 text-white/30 text-[10px] tracking-[0.4em] uppercase z-10">
          Est. 2026
        </span>
      </section>

      {/* ── SECTION 01 — brand statement ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">

        {/* text left */}
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

        {/* image right */}
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

        {/* image left */}
        <div className="h-[60vh] md:h-auto relative overflow-hidden order-2 md:order-1">
          <div className="absolute inset-0 bg-neutral-800" />
          {/* <img src={model3} className="absolute inset-0 w-full h-full object-cover object-top" /> */}
        </div>

        {/* text right */}
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
        <Link to="/" className="group relative">
          <span className="block border border-white text-white text-xs tracking-[0.35em] uppercase px-10 py-4 relative z-10 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
            Go To Store
          </span>
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
        </Link>
      </section>

    </main>
  )
}

export default About