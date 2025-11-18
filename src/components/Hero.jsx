import { motion } from 'framer-motion'
import { ArrowRight, Trophy, Users2, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -inset-[20%] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/15">Official Floorball Club</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              BlueBlades Floorball Club
            </h1>
            <p className="mt-4 text-lg text-blue-100/90 max-w-xl">
              Passion. Precision. Pace. Join our community of players and fans as we push the sport forward.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link to="/teams" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20">
                Explore Teams
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/infos" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/15">
                Club Info
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <Trophy className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-sm text-blue-200/80">League Titles</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <Users2 className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="text-sm text-blue-200/80">Active Members</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <Star className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">7</p>
                <p className="text-sm text-blue-200/80">Age Groups</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx0ZWFtfGVufDB8MHx8fDE3NjM0NzgxOTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="team" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="absolute -bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur ring-1 ring-white/10">
              <p className="text-sm text-blue-200/90">Season 24/25 kickoff this Saturday. Home arena: Northside Dome.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
