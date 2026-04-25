import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import ProductCard from './ProductCard'

function ProductSection({ search }) {
  const { products, loading, error } = useProducts()

  const visible = products.filter(p => p.name).slice(0, 3)
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

      {loading && (
        <div className="flex flex-col items-center gap-4 py-20">
          <div className="w-px h-16 bg-white/20 animate-pulse" />
          <p className="text-white/30 text-xs tracking-[0.4em] uppercase">Loading</p>
        </div>
      )}

      {error && (
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase py-20">{error}</p>
      )}

      {!loading && !error && (
        <div className={`${gridClass} w-full max-w-5xl`}>
          {visible.map(p => (
            <div key={p.id} className={cardWidth}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}

      {/* explore all — links to /products page */}
      <div className="mt-12 md:mt-16">
        <Link to="/products" className="group relative">
          <span className="block border border-white/40 text-white text-xs tracking-[0.35em] uppercase px-10 md:px-12 py-4 relative z-10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
            Explore All
          </span>
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white -translate-x-0.5 -translate-y-0.5" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white translate-x-0.5 -translate-y-0.5" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white -translate-x-0.5 translate-y-0.5" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white translate-x-0.5 translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}

export default ProductSection