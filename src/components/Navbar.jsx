import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 mix-blend-difference pointer-events-none">

      <Link to="/" className="pointer-events-auto text-white text-xs tracking-[0.35em] uppercase font-medium hover:opacity-60 transition-opacity">
        
      </Link>

      <div className="flex items-center gap-6 md:gap-8 pointer-events-auto">
        <Link
          to="/about"
          className="group relative text-white text-xs tracking-[0.35em] uppercase hover:opacity-60 transition-opacity"
        >
          About
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
        </Link>

        <Link to="/cart" className="group relative flex items-center">
          <div className="relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </div>
          <span className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar