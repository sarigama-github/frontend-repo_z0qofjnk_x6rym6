export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-[#242D40] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Built with awesome people</h2>
              <p className="mt-4 text-white/80 leading-relaxed">We collaborate to get things done. We train gifted individuals to become leaders and equip them with the mindset to navigate a competitive tech landscape.</p>
            </div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• Mentorship and continuous learning</li>
              <li>• Pragmatic innovation with measurable outcomes</li>
              <li>• Ownership, transparency, and trust</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
