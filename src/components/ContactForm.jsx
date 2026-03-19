import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({ name: '', message: '' })

  const WHATSAPP_NUMBER = '254114093651' // ← replace with real number

  const handleSend = () => {
    if (!form.name.trim() || !form.message.trim()) return
    const text = encodeURIComponent(`Hi, I'm ${form.name}.\n\n${form.message}`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="bg-white border-t border-black flex flex-col items-center justify-center px-6 md:px-8 py-16 md:py-24">
      <div className="w-full max-w-xl">
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <div className="h-px flex-1 bg-black/20" />
          <h2 className="text-xs tracking-[0.5em] uppercase text-black whitespace-nowrap">Get In Touch</h2>
          <div className="h-px flex-1 bg-black/20" />
        </div>

        <p className="text-center text-neutral-400 text-sm mb-8 md:mb-10 tracking-wide">
          Send us a message directly on WhatsApp
        </p>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full border-b border-black bg-transparent text-black placeholder-neutral-300 text-sm py-3 px-0 outline-none tracking-wide"
          />
          <textarea
            placeholder="Your message..."
            rows={5}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="w-full border border-black bg-transparent text-black placeholder-neutral-300 text-sm py-3 px-4 outline-none resize-none tracking-wide mt-4"
          />

          <button onClick={handleSend} className="group relative self-start mt-4">
            <span className="flex items-center gap-3 border border-black text-black text-xs tracking-[0.35em] uppercase px-8 md:px-10 py-3 md:py-4 relative z-10 transition-all duration-300 group-hover:bg-black group-hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send on WhatsApp
            </span>
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black -translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black translate-x-1 -translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black -translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black translate-x-1 translate-y-1 transition-all duration-300 group-hover:w-4 group-hover:h-4" />
          </button>
        </div>

        <p className="text-center text-neutral-300 text-xs mt-12 md:mt-16 tracking-widest uppercase">
          © 2025 Vade
        </p>
      </div>
    </section>
  )
}

export default ContactForm