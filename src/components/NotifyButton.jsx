import { useState } from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwnGliU46Sbr1WZwkCsY5YRgtLHOlA7pkdX4E1c9mbS_oOpMdNXWflB50mPdBcK9UGv/exec' 

function NotifyButton() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'exists' | 'error'

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
    <>
      {/* nav trigger button */}
      <button
        onClick={() => { setOpen(true); setStatus(null); }}
        className="group relative text-white text-xs tracking-[0.35em] uppercase hover:opacity-60 transition-opacity"
      >
        Notify Me
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
      </button>

      {/* modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setOpen(false)}
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

            {/* close */}
            <button
              onClick={() => setOpen(false)}
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
                    <span className="block border border-white text-white text-xs tracking-[0.35em] uppercase px-8 py-4 transition-all duration-300 group-hover:bg-white group-hover:text-black">
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
      )}
    </>
  )
}

export default NotifyButton