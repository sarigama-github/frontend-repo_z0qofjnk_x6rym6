import { Shield, Rocket, Cog, Server } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Security-first',
    desc: 'Best practices baked-in, from auth to data governance, for regulated industries.'
  },
  {
    icon: Rocket,
    title: 'Faster to market',
    desc: 'Lean, iterative delivery so you ship what matters and learn faster.'
  },
  {
    icon: Cog,
    title: 'Scalable architecture',
    desc: 'Cloud-native foundations that grow with your product and your users.'
  },
  {
    icon: Server,
    title: 'Managed DevOps',
    desc: 'Observability, CI/CD, and SRE practices handled end-to-end.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="relative bg-[#242D40] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#36BBD9] to-[#2A7ABC] flex items-center justify-center text-[#0D0D0D] shadow">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
