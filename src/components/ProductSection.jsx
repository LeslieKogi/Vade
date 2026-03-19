const products = [
  { id: 1, name: 'Product One', price: 'KSh 2,500', tag: 'New' },
  { id: 2, name: 'Product Two', price: 'KSh 1,800', tag: 'Popular' },
  { id: 3, name: 'Product Three', price: 'KSh 3,200', tag: 'Limited' },
]

function ProductCard({ name, price, tag }) {
  return (
    <div className="group bg-white border border-black flex flex-col relative overflow-hidden w-full" style={{ aspectRatio: '3/5' }}>
      <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase bg-black text-white px-3 py-1 z-10">
        {tag}
      </span>
      <div className="flex-1 bg-neutral-100 flex items-center justify-center">
        <span className="text-neutral-300 text-xs tracking-widest uppercase">Image</span>
      </div>
      <div className="p-4 md:p-5 border-t border-black flex justify-between items-end">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-1">Vade</p>
          <p className="text-black font-semibold text-sm">{name}</p>
          <p className="text-black text-xs mt-1">{price}</p>
        </div>
        <button className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 text-black text-lg leading-none">
          +
        </button>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-500" />
    </div>
  )
}

function ProductSection() {
  const count = products.length

  // responsive: 1 col on mobile, adapts on desktop based on count
  const desktopGrid =
    count === 1 ? 'md:flex md:justify-center' :
    count === 2 ? 'md:flex md:justify-evenly' :
    'md:grid md:grid-cols-3 md:gap-8'

  const desktopCardWidth = count < 3 ? 'md:w-72' : ''

  return (
    <section id="products" className="bg-black min-h-[75vh] flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-20">
      <div className="flex items-center gap-6 mb-10 md:mb-16 w-full max-w-5xl">
        <div className="h-px flex-1 bg-white/20" />
        <h2 className="text-white text-xs tracking-[0.5em] uppercase whitespace-nowrap">Our Products</h2>
        <div className="h-px flex-1 bg-white/20" />
      </div>

      {/* cards: single col on mobile, dynamic on desktop */}
      <div className={`grid grid-cols-1 gap-6 w-full max-w-5xl ${desktopGrid}`}>
        {products.map(p => (
          <div key={p.id} className={desktopCardWidth}>
            <ProductCard {...p} />
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16">
        <button className="group relative">
          <span className="block border border-white/40 text-white text-xs tracking-[0.35em] uppercase px-10 md:px-12 py-4 relative z-10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
            Explore All
          </span>
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white -translate-x-0.5 -translate-y-0.5" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white translate-x-0.5 -translate-y-0.5" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white -translate-x-0.5 translate-y-0.5" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white translate-x-0.5 translate-y-0.5" />
        </button>
      </div>
    </section>
  )
}

export default ProductSection