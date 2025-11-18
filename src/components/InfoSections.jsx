import { CalendarDays, MapPin, Mail, Clock } from 'lucide-react'

export default function InfoSections() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="flex items-center gap-3 mb-3">
            <CalendarDays className="w-5 h-5 text-cyan-300" />
            <h3 className="text-white font-semibold">Training Schedule</h3>
          </div>
          <p className="text-blue-200/85 text-sm leading-relaxed">
            Weekly practices run Mon-Fri across all teams. Newcomers are welcome to trial sessions any Tuesday and Thursday.
          </p>
          <ul className="mt-4 text-blue-100/90 text-sm space-y-2">
            <li>Mon/Wed/Fri — Elite: 19:00 - 21:00</li>
            <li>Tue/Thu — Development: 18:00 - 20:00</li>
            <li>Sat — Youth Academy: 10:00 - 12:00</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-5 h-5 text-cyan-300" />
            <h3 className="text-white font-semibold">Home Arena</h3>
          </div>
          <p className="text-blue-200/85 text-sm">Northside Dome, 100 Arena Way, Blue City</p>
          <div className="mt-4 overflow-hidden rounded-xl">
            <img className="w-full h-48 object-cover opacity-90" src="https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcmVuYXxlbnwwfDB8fHwxNzYzNDc4MTk2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Arena" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-5 h-5 text-cyan-300" />
            <h3 className="text-white font-semibold">Season Tickets</h3>
          </div>
          <p className="text-blue-200/85 text-sm">Season passes on sale now. Family packages available.</p>
          <ul className="mt-4 text-blue-100/90 text-sm space-y-2">
            <li>Adult — $120</li>
            <li>Youth/Senior — $60</li>
            <li>Family (4) — $280</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-cyan-300" />
            <h3 className="text-white font-semibold">Contact</h3>
          </div>
          <p className="text-blue-200/85 text-sm">General: hello@blueblades.club</p>
          <p className="text-blue-200/85 text-sm">Academy: academy@blueblades.club</p>
          <p className="text-blue-200/85 text-sm">Media: press@blueblades.club</p>
        </div>
      </div>
    </section>
  )
}
