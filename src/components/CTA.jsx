export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#242D40] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#295E73] to-[#2A7ABC] p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build your next SaaS</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Share your goals and we’ll craft a roadmap, timeline, and team to get you there.
          </p>
          <form className="mt-8 grid gap-3 sm:grid-cols-3">
            <input className="sm:col-span-1 rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#36BBD9]" placeholder="Your name" />
            <input className="sm:col-span-1 rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#36BBD9]" placeholder="Work email" />
            <button className="sm:col-span-1 rounded-lg bg-[#36BBD9] hover:bg-[#2A7ABC] text-[#0D0D0D] font-semibold px-4 py-3 transition-colors">
              Book a discovery call
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
