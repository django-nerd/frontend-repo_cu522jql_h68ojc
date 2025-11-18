import Navbar from '../components/Navbar'
import InfoSections from '../components/InfoSections'

export default function Infos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Club Information</h1>
        <p className="text-blue-200/80 mt-2 max-w-2xl">Find everything about training, arena, season tickets and how to contact us.</p>
      </section>
      <InfoSections />
      <footer className="border-t border-white/10 py-10 text-center text-blue-300/70">
        © {new Date().getFullYear()} BlueBlades Floorball Club
      </footer>
    </div>
  )
}
