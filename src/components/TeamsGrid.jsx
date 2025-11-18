import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const teams = [
  { id: 'men-a', name: 'Men A', level: 'Premier League', color: 'from-sky-400 to-blue-500' },
  { id: 'men-b', name: 'Men B', level: 'Division 2', color: 'from-indigo-400 to-purple-500' },
  { id: 'women', name: 'Women', level: 'National', color: 'from-rose-400 to-pink-500' },
  { id: 'u18', name: 'U18', level: 'Regional', color: 'from-emerald-400 to-teal-500' },
  { id: 'u15', name: 'U15', level: 'Regional', color: 'from-amber-400 to-orange-500' },
  { id: 'u12', name: 'U12', level: 'Local', color: 'from-fuchsia-400 to-violet-500' },
]

export default function TeamsGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Teams</h2>
            <p className="text-blue-200/80">From juniors to elite level</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="group">
              <Link to={`/teams/${t.id}`} className={`relative block overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-br ${t.color}`}>
                <img src={`https://picsum.photos/seed/${t.id}/800/500`} alt={t.name} className="w-full h-48 object-cover mix-blend-overlay opacity-60 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="relative p-5 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 bg-white/90 px-2 py-1 rounded-full self-start">{t.level}</div>
                  <h3 className="text-2xl font-bold text-white">{t.name}</h3>
                  <p className="text-blue-100/90">View roster, schedule and results</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
