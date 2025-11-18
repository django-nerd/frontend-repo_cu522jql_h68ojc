import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Flame, Facebook, Instagram } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/teams', label: 'Teams' },
  { to: '/infos', label: 'Infos' },
]

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full transition-colors ${
          isActive
            ? 'text-white bg-white/10'
            : 'text-slate-200 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">BlueBlades</p>
              <p className="text-xs text-blue-200/80">Floorball Club</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavItem key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-white/10 text-slate-200 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-white/10 text-slate-200 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map((n) => (
              <NavItem key={n.to} to={n.to} label={n.label} onClick={() => setOpen(false)} />
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
