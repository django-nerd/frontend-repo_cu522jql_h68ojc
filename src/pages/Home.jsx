import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TeamsGrid from '../components/TeamsGrid'
import InfoSections from '../components/InfoSections'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <TeamsGrid />
      <InfoSections />
      <footer className="border-t border-white/10 py-10 text-center text-blue-300/70">
        © {new Date().getFullYear()} BlueBlades Floorball Club
      </footer>
    </div>
  )
}
