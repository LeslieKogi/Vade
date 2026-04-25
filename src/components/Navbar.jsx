import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwnGliU46Sbr1WZwkCsY5YRgtLHOlA7pkdX4E1c9mbS_oOpMdNXWflB50mPdBcK9UGv/exec' 

function NotifyModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return
    setStatus('loading')
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setEmail('')
      } else if (data.message === 'Already subscribed') {
        setStatus('exists')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-black border border-white/20 w-full max-w-md p-10"
        onClick={e => e.stopPropagation()}
      >
        {/* corner accents */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white -translate-x-0.5 -translate-y-0.5" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white translate-x-0.5 -translate-y-0.5" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white -translate-x-0.5 translate-y-0.5" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white translate-x-0.5 translate-y-0.5" />

        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors text-xs tracking-widest"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-4">You're in</p>
            <h3
              className="text-4xl font-black text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Stay Tuned.
            </h3>
            <p className="text-white/40 text-sm mt-4">
              We'll hit your inbox when the next drop lands.
            </p>
          </div>
        ) : (
          <>
            <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-6">New drops</p>
            <h3
              className="text-4xl font-black text-white leading-none mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Be First.
            </h3>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              Get notified the moment Vade drops something new.
            </p>

            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                className="w-full bg-transparent border-b border-white/20 focus:border-white text-white placeholder-white/20 text-sm py-2 outline-none transition-colors"
              />

              {status === 'exists' && (
                <p className="text-white/40 text-xs tracking-wide">Already on the list.</p>
              )}
              {status === 'error' && (
                <p className="text-white/40 text-xs tracking-wide">Something went wrong. Try again.</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="group relative disabled:opacity-40 mt-2"
              >
                <span className="block border border-white text-white text-xs tracking-[0.35em] uppercase px-8 py-4 transition-all duration-300 group-hover:bg-white group-hover:text-black text-center">
                  {status === 'loading' ? 'Submitting...' : 'Notify Me'}
                </span>
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Navbar() {
  const { cartCount } = useCart()
  const [notifyOpen, setNotifyOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 md:px-10 py-5 mix-blend-difference pointer-events-none">
        <div className="flex items-center gap-6 md:gap-8 pointer-events-auto">

          <Link
            to="/"
            className="group relative text-white text-xs tracking-[0.35em] uppercase font-medium hover:opacity-60 transition-opacity"
          >
            Home
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            to="/about"
            className="group relative text-white text-xs tracking-[0.35em] uppercase hover:opacity-60 transition-opacity"
          >
            About
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
          </Link>

          {/* notify me button */}
          <button
            onClick={() => { setNotifyOpen(true) }}
            className="group relative text-white text-xs tracking-[0.35em] uppercase hover:opacity-60 transition-opacity"
          >
            Notify Me
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
          </button>

          {/* cart */}
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

      {/* modal rendered outside nav so it's not clipped by mix-blend-difference */}
      {notifyOpen && <NotifyModal onClose={() => setNotifyOpen(false)} />}
    </>
  )
}

export default Navbar