import Navbar from '../components/Navbar'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Users } from 'lucide-react'

const teamData = {
  'men-a': {
    name: 'Men A',
    color: 'from-sky-400 to-blue-500',
    coach: 'Alex Porter',
    captain: 'M. Novak',
    players: ['M. Novak', 'J. Eriksen', 'T. Muller', 'S. Ito', 'K. Rossi', 'D. Silva'],
    schedule: [
      { date: 'Sat, Nov 23', vs: 'Redhawks', home: true },
      { date: 'Sat, Nov 30', vs: 'South City', home: false },
      { date: 'Sat, Dec 7', vs: 'Northern FC', home: true },
    ],
  },
  'men-b': {
    name: 'Men B',
    color: 'from-indigo-400 to-purple-500',
    coach: 'Chris Lang',
    captain: 'A. Becker',
    players: ['A. Becker', 'R. Klein', 'L. Costa', 'O. Berg', 'Y. Tanaka'],
    schedule: [
      { date: 'Sun, Nov 24', vs: 'Weston', home: true },
      { date: 'Sun, Dec 1', vs: 'Greenvale', home: false },
    ],
  },
  women: {
    name: 'Women',
    color: 'from-rose-400 to-pink-500',
    coach: 'S. Morales',
    captain: 'H. Keller',
    players: ['H. Keller', 'V. Lind', 'E. Park', 'C. Meyer', 'I. Ricci'],
    schedule: [
      { date: 'Fri, Nov 22', vs: 'Eastside', home: false },
      { date: 'Fri, Nov 29', vs: 'Riverton', home: true },
    ],
  },
  u18: {
    name: 'U18',
    color: 'from-emerald-400 to-teal-500',
    coach: 'P. Silva',
    captain: 'N. Cohen',
    players: ['N. Cohen', 'L. Patel', 'R. Chang', 'S. Ahmed', 'T. Ivanov'],
    schedule: [
      { date: 'Sat, Nov 23', vs: 'Rangers U18', home: true },
      { date: 'Sat, Nov 30', vs: 'Comets U18', home: false },
    ],
  },
  u15: {
    name: 'U15',
    color: 'from-amber-400 to-orange-500',
    coach: 'D. Osei',
    captain: 'G. Weber',
    players: ['G. Weber', 'T. Brown', 'M. Khan', 'Z. Ali', 'U. Singh'],
    schedule: [
      { date: 'Sun, Nov 24', vs: 'Falcons U15', home: true },
    ],
  },
  u12: {
    name: 'U12',
    color: 'from-fuchsia-400 to-violet-500',
    coach: 'R. Gupta',
    captain: '—',
    players: ['Team of 20 rising stars'],
    schedule: [
      { date: 'Sun, Nov 24', vs: 'Rockets U12', home: false },
    ],
  },
}

export default function TeamDetail() {
  const { id } = useParams()
  const team = teamData[id] || teamData['men-a']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/teams" className="inline-flex items-center gap-2 text-blue-200 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to teams
          </Link>
        </div>

        <div className={`p-6 rounded-2xl ring-1 ring-white/10 bg-gradient-to-br ${team.color}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-white">{team.name}</h1>
              <p className="text-slate-900/90 font-semibold bg-white/90 inline-flex px-3 py-1 rounded-full mt-2">Coach: {team.coach}</p>
            </div>
            <div className="text-white/90">
              <p className="font-semibold">Captain: {team.captain}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="flex items-center gap-2 mb-3 text-white font-semibold">
              <Users className="w-5 h-5 text-cyan-300" /> Roster
            </div>
            <ul className="text-blue-100/90 space-y-2 text-sm">
              {team.players.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" /> {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3 text-white font-semibold">
              <Calendar className="w-5 h-5 text-cyan-300" /> Upcoming Games
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {team.schedule.map((g, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 ring-1 ring-white/10">
                  <p className="text-white font-semibold">{g.date}</p>
                  <p className="text-blue-200/90">vs {g.vs}</p>
                  <p className="text-xs text-blue-200/70 mt-1">{g.home ? 'Home — Northside Dome' : 'Away'}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
