import { useCart } from '../CartContext'
import { useProducts } from '../hooks/useProducts'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const { name, price, tag, status, imageUrl } = product
  const outOfStock = status === 'outofstock'

  return (
    <div
      className={`group bg-white border border-black flex flex-col relative overflow-hidden w-full ${outOfStock ? 'opacity-60' : ''}`}
      style={{ aspectRatio: '3/5' }}
    >
      {/* status / tag badge */}
      <span className={`absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase px-3 py-1 z-10 ${outOfStock ? 'bg-neutral-400 text-white' : 'bg-black text-white'}`}>
        {outOfStock ? 'Out of Stock' : tag}
      </span>

      {/* image */}
      <div className="flex-1 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-700 ${!outOfStock ? 'group-hover:scale-105' : ''}`}
          />
        ) : (
          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
            <span className="text-neutral-300 text-xs tracking-widest uppercase">Image</span>
          </div>
        )}
      </div>

      {/* footer */}
      <div className="p-4 md:p-5 border-t border-black flex justify-between items-end bg-white">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-1">Vade</p>
          <p className="text-black font-semibold text-sm">{name}</p>
          <p className="text-black text-xs mt-1">KSh {Number(price).toLocaleString()}</p>
        </div>

        <button
          onClick={() => !outOfStock && addItem(product)}
          disabled={outOfStock}
          title={outOfStock ? 'Out of stock' : 'Add to cart'}
          className="group/btn relative w-9 h-9 border border-black flex items-center justify-center text-black text-xl leading-none transition-colors duration-200 hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
        >
          +
          <span className="absolute -inset-1 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200">
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-black" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-black" />
            <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-black" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-black" />
          </span>
        </button>
      </div>

      {!outOfStock && <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-500" />}
    </div>
  )
}

function ProductSection() {
  const { products, loading, error } = useProducts()

  // only show active + outofstock, never empty rows
  const visible = products.filter(p => p.name)
  const count = visible.length

  const gridClass =
    count === 1 ? 'flex justify-center' :
    count === 2 ? 'flex justify-evenly gap-6' :
    'grid grid-cols-1 md:grid-cols-3 gap-6'

  const cardWidth = count < 3 ? 'w-full max-w-xs' : 'w-full'

  return (
    <section id="products" className="bg-black min-h-[75vh] flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-20">

      <div className="flex items-center gap-6 mb-10 md:mb-16 w-full max-w-5xl">
        <div className="h-px flex-1 bg-white/20" />
        <h2 className="text-white text-xs tracking-[0.5em] uppercase whitespace-nowrap">Our Products</h2>
        <div className="h-px flex-1 bg-white/20" />
      </div>

      {/* loading state */}
      {loading && (
        <div className="flex flex-col items-center gap-4 py-20">
          <div className="w-px h-16 bg-white/20 animate-pulse" />
          <p className="text-white/30 text-xs tracking-[0.4em] uppercase">Loading</p>
        </div>
      )}

      {/* error state */}
      {error && (
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase py-20">{error}</p>
      )}

      {/* cards */}
      {!loading && !error && (
        <div className={`${gridClass} w-full max-w-5xl`}>
          {visible.map(p => (
            <div key={p.id} className={cardWidth}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}

      {/* explore button */}
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