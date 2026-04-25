import { useCart } from '../CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const { name, price, tag, status, imageUrl } = product
  const outOfStock = status === 'outofstock'

  return (
    <div
      className={`group bg-white border border-black flex flex-col relative overflow-hidden w-full ${outOfStock ? 'opacity-60' : ''}`}
      style={{ aspectRatio: '3/5' }}
    >
      {/* badge */}
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

export default ProductCard