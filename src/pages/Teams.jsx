import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const roster = [
  { id: 'men-a', name: 'Men A', intro: 'Our elite squad competing at the highest level.', color: 'from-sky-400 to-blue-500' },
  { id: 'men-b', name: 'Men B', intro: 'Development team for emerging talent.', color: 'from-indigo-400 to-purple-500' },
  { id: 'women', name: 'Women', intro: 'High-tempo women’s team with national ambitions.', color: 'from-rose-400 to-pink-500' },
  { id: 'u18', name: 'U18', intro: 'Preparing the next generation of stars.', color: 'from-emerald-400 to-teal-500' },
  { id: 'u15', name: 'U15', intro: 'Skills-focused youth program.', color: 'from-amber-400 to-orange-500' },
  { id: 'u12', name: 'U12', intro: 'Fun-first introduction to the sport.', color: 'from-fuchsia-400 to-violet-500' },
]

export default function Teams() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Our Teams</h1>
          <p className="text-blue-200/80 mt-2">Meet the squads representing our colors.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roster.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
              <Link to={`/teams/${t.id}`} className={`block p-6 rounded-2xl ring-1 ring-white/10 bg-gradient-to-br ${t.color}`}>
                <h3 className="text-2xl font-bold text-white">{t.name}</h3>
                <p className="text-blue-50/90 mt-1">{t.intro}</p>
                <div className="mt-3 text-sm text-slate-900 font-semibold bg-white/90 inline-flex px-3 py-1 rounded-full">View details</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
