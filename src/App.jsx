import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ExecutiveSummary from './components/ExecutiveSummary'
import CoreServices from './components/CoreServices'
import Philosophy from './components/Philosophy'
import CTA from './components/CTA'
import AIBanner from './components/AIBanner'

function App() {
  return (
    <div className="min-h-screen bg-[#242D40]">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <AIBanner />
      </div>
      <ExecutiveSummary />
      <CoreServices />
      <Features />
      <Philosophy />
      <CTA />
      <footer id="company" className="bg-[#242D40] py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-[#36BBD9] to-[#2A7ABC]" />
            <span className="text-white/80">© {new Date().getFullYear()} Fligno. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
