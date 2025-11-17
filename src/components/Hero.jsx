import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-[#242D40]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2A7ABC]/20 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-[#36BBD9]" />
              Enterprise SaaS Engineering
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Build and scale SaaS products with confidence
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl">
              Fligno is a software development company helping startups and enterprises design, build, and launch resilient SaaS platforms—fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-[#36BBD9] hover:bg-[#2A7ABC] text-[#0D0D0D] font-semibold transition-colors">
                Start a project
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-white/10 text-white hover:bg-white/10 transition-colors">
                Explore solutions
              </a>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#242D40]" />
          </div>
        </div>
      </div>
    </section>
  )
}
