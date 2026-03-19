import { Link } from 'react-router-dom'
import { useContext } from 'react'
// import { CartContext } from '../CartContext' // uncomment when you set up context

function Navbar() {
  // const { cartCount } = useContext(CartContext)
  const cartCount = 0 // placeholder until CartContext is ready

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 md:px-10 py-4 mix-blend-difference pointer-events-none">
      <Link
        to="/cart"
        className="pointer-events-auto group relative flex items-center gap-2"
      >
        {/* cart icon */}
        <div className="relative">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>

          {/* count badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
              {cartCount}
            </span>
          )}
        </div>

        {/* edgy corner accents on hover */}
        <span className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
        </span>
      </Link>
    </nav>
  )
}

export default Navbar