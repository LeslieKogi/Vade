import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

const WHATSAPP_NUMBER = '254114093651' 

function Cart() {
  const { items, removeItem, updateQty, clearCart, total } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [ordered, setOrdered] = useState(false)

  const allFilled = form.name.trim() && form.phone.trim() && form.address.trim()

  const handleOrder = () => {
    if (!allFilled || items.length === 0) return

    const itemLines = items
      .map(i => `• ${i.name} × ${i.qty} — KSh ${(i.price * i.qty).toLocaleString()}`)
      .join('\n')

    const message = encodeURIComponent(
      `Hi, I'd like to place an order:\n\n${itemLines}\n\nTotal: KSh ${total.toLocaleString()}\n\nName: ${form.name}\nPhone: ${form.phone}\nDeliver to: ${form.address}`
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    clearCart()
    setOrdered(true)
  }

  /* ── ORDER SUCCESS SCREEN ── */
  if (ordered) {
    return (
      <main className="bg-black min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
        <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-6">Order sent</p>
        <h1
          className="text-6xl md:text-8xl font-black mb-6 leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Thank You.
        </h1>
        <p className="text-white/50 text-sm mb-12 max-w-xs leading-relaxed">
          Check WhatsApp — your order details are waiting there.
        </p>
        <Link to="/" className="group relative">
          <span className="block border border-white text-white text-xs tracking-[0.35em] uppercase px-10 py-4 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
            Back to Store
          </span>
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-1 translate-y-1" />
        </Link>
      </main>
    )
  }

  /* ── MAIN CART ── */
  return (
    <main className="bg-black min-h-screen pt-24 pb-20 px-6 md:px-16 text-white">
      <div className="max-w-5xl mx-auto">

        {/* header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px flex-1 bg-white/20" />
          <h1 className="text-xs tracking-[0.5em] uppercase whitespace-nowrap">Your Cart</h1>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* empty state */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p
              className="text-6xl md:text-8xl font-black text-white/10 mb-8 leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Empty.
            </p>
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-10">
              Nothing in your cart yet
            </p>
            <Link to="/" className="group relative">
              <span className="block border border-white/40 text-white text-xs tracking-[0.35em] uppercase px-10 py-4 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                Shop Now
              </span>
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white -translate-x-0.5 -translate-y-0.5" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white translate-x-0.5 -translate-y-0.5" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white -translate-x-0.5 translate-y-0.5" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white translate-x-0.5 translate-y-0.5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* ── LEFT: items ── */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </p>

              <div className="flex flex-col divide-y divide-white/10">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-4 py-5">

                    {/* thumbnail */}
                    <div className="w-14 h-14 border border-white/10 overflow-hidden shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-neutral-800" />
                      )}
                    </div>

                    {/* name + price */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-white/40 text-xs mt-0.5">KSh {item.price.toLocaleString()}</p>
                    </div>

                    {/* qty controls */}
                    <div className="flex items-center border border-white/20 shrink-0">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors text-base"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm select-none">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors text-base"
                      >
                        +
                      </button>
                    </div>

                    {/* line total */}
                    <p className="text-sm w-24 text-right shrink-0">
                      KSh {(item.price * item.qty).toLocaleString()}
                    </p>

                    {/* remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white/20 hover:text-white transition-colors ml-2 shrink-0 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* total */}
              <div className="flex justify-between items-center pt-6 mt-2 border-t border-white/20">
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">Total</span>
                <span className="text-2xl font-semibold">KSh {total.toLocaleString()}</span>
              </div>
            </div>

            {/* ── RIGHT: order form ── */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">
                Delivery Details
              </p>

              <div className="flex flex-col gap-7">

                {/* name */}
                <div className="relative">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white placeholder-white/20 text-sm py-2 outline-none transition-colors duration-200"
                  />
                </div>

                {/* phone */}
                <div className="relative">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="0712 345 678"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white placeholder-white/20 text-sm py-2 outline-none transition-colors duration-200"
                  />
                </div>

                {/* address */}
                <div className="relative">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-2">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    placeholder="Westlands, Nairobi"
                    value={form.address}
                    onChange={e => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white placeholder-white/20 text-sm py-2 outline-none transition-colors duration-200"
                  />
                </div>

                {/* whatsapp button */}
                <button
                  onClick={handleOrder}
                  disabled={!allFilled}
                  className="group relative mt-2 disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-3 border border-white text-white text-xs tracking-[0.35em] uppercase px-8 md:px-10 py-4 transition-all duration-300 group-hover:bg-white group-hover:text-black group-disabled:pointer-events-none">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Place Order on WhatsApp
                  </span>
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
                  <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
                </button>

                <p className="text-white/20 text-[10px] tracking-wide text-center">
                  Opens WhatsApp with your order pre-filled — fill all fields to continue
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  )
}

export default Cart