export default function ExecutiveSummary() {
  return (
    <section id="about" className="relative bg-[#242D40] py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[conic-gradient(at_top_left,_#36BBD9,_#2A7ABC,_transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-[#36BBD9]" />
            Executive Summary
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Your full-service technology partner</h2>
          <p className="mt-4 text-white/80 leading-relaxed">Fligno is a team of IT professionals dedicated to turning business ideas into reality. We partner end-to-end—from strategy and design to development, security, marketing, and backend operational support—to launch and scale products with confidence.</p>
        </div>
      </div>
    </section>
  )
}
