import logo from '../assets/Vadesentencelogo.png'
import model from '../assets/model1.jpg'

function Hero() {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full overflow-hidden">

      {/* LEFT / TOP — white, logo */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white flex flex-col items-center justify-center relative">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg,#000 0px,#000 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#000 0px,#000 1px,transparent 1px,transparent 60px)',
          }}
        />
        <img
          src={logo}
          alt="Vade"
          className="w-2/3 md:w-3/4 max-w-xs object-contain relative z-10"
        />
        <p className="mt-4 text-xs tracking-[0.3em] uppercase text-neutral-400 relative z-10">
          Est. 2026
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px md:w-px md:h-full bg-black shrink-0 relative z-20" />

      {/* RIGHT / BOTTOM — model image with overlay */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">

        {/* model image — fills the entire half */}
        <img
          src={model}
          alt="Vade model"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* dark overlay — tweak opacity to taste */}
        <div className="absolute inset-0 bg-black/55" />

        {/* big V background letter */}
        <span
          className="absolute text-[14rem] md:text-[28rem] font-black text-white opacity-[0.04] select-none pointer-events-none leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          V
        </span>

        {/* content — sits above image and overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-5 md:gap-8 px-6">
          <p className="text-white/50 text-[10px] md:text-xs tracking-[0.4em] uppercase">
            New Collection
          </p>

          <h2
            className="text-white font-black leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Everything<br />You Need.
          </h2>

          <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xs hidden sm:block">
            Curated products. Uncompromising quality. Delivered to your door.
          </p>

          {/* EDGY BUTTON */}
          <a href="#products" className="group relative mt-2 md:mt-4">
            <span className="block border border-white text-white text-xs tracking-[0.35em] uppercase px-8 md:px-10 py-3 md:py-4 relative z-10 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              Shop Now
            </span>
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          </a>
        </div>

        {/* scroll hint — desktop only */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/20" />
        </div>
      </div>

    </section>
  )
}

export default Hero