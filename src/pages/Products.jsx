import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'

function Products() {
  const { products, loading, error } = useProducts()
  const [filter, setFilter] = useState('all')

  const filters = ['all', 'active', 'outofstock']
  const [search, setSearch] = useState('')

  const visible = products
  .filter(p => p.name)
  .filter(p => {
    const status = p.status?.trim().toLowerCase()

    const matchesFilter =
      filter === 'all' ? true : status === filter

    const matchesSearch =
      p.name?.toLowerCase().includes(search.trim().toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <main className="bg-black min-h-screen pt-24 pb-20 px-6 md:px-16 text-white">
      <div className="max-w-5xl mx-auto">

        {/* header */}
        <div className="flex items-center gap-6 mb-6">
          <div className="h-px flex-1 bg-white/20" />
          <h1 className="text-xs tracking-[0.5em] uppercase whitespace-nowrap">All Products</h1>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* back link */}
        <div className="mb-12">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-2 text-white/30 text-xs tracking-[0.3em] uppercase hover:text-white transition-colors duration-200"
          >
            <span className="text-base leading-none">←</span>
            Back to Home
          </Link>
        </div>
        {/* search bar */}
<div className="mb-8">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3 outline-none focus:border-white transition-colors placeholder:text-white/30"
  />
</div>

        {/* filter tabs */}
        <div className="flex items-center gap-6 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative text-xs tracking-[0.3em] uppercase transition-colors duration-200 pb-1 ${
                filter === f ? 'text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              {f === 'all' ? 'All' : f === 'active' ? 'Available' : 'Out of Stock'}
              {filter === f && (
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-white" />
              )}
            </button>
          ))}
          <div className="h-px flex-1 bg-white/10" />
          {!loading && (
            <span className="text-white/20 text-xs tracking-widest">
              {visible.length} {visible.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {/* loading */}
        {loading && (
          <div className="flex flex-col items-center gap-4 py-32">
            <div className="w-px h-16 bg-white/20 animate-pulse" />
            <p className="text-white/30 text-xs tracking-[0.4em] uppercase">Loading</p>
          </div>
        )}

        {/* error */}
        {error && (
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase py-32 text-center">{error}</p>
        )}

        {/* empty filter result */}
        {!loading && !error && visible.length === 0 && (
          <div className="flex flex-col items-center py-32 text-center">
            <p
              className="text-6xl font-black text-white/10 mb-6 leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              None.
            </p>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase">
              No products in this category
            </p>
          </div>
        )}

        {/* grid */}
        {!loading && !error && visible.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {visible.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

      </div>
    </main>
  )
}

export default Products