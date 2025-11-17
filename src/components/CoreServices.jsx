import { Smartphone, CreditCard, Link, ShieldCheck, GraduationCap, Palette, Megaphone, Wrench, Headset, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'We Build Apps',
    desc: 'Custom mobile and web applications that automate workflows, boost productivity, and elevate customer service.'
  },
  {
    icon: CreditCard,
    title: 'We Do Payments',
    desc: 'PCI DSS compliant solutions across QR, e-wallets, tap-to-pay, BNPL, e‑commerce plug-ins, and POS terminals.'
  },
  {
    icon: Link,
    title: 'We Integrate',
    desc: 'Deep API expertise connecting platforms like Fiserv, Stripe, Salesforce, Zip, and Zoom with your systems.'
  },
  {
    icon: ShieldCheck,
    title: 'We Secure Infrastructure',
    desc: 'Cloud and database configuration, maintenance, and security—built to scale and hardened against vulnerabilities.'
  },
  {
    icon: GraduationCap,
    title: 'We Train',
    desc: 'Learn@Fligno courses on blockchain, big data, machine learning, fintech, and other emerging technologies.'
  },
  {
    icon: Palette,
    title: 'We Design',
    desc: 'Human-centered design for sites and stores—from sleek landing pages to interactive e-commerce experiences.'
  },
  {
    icon: Megaphone,
    title: 'We Advertise',
    desc: 'New Media Marketing strategies spanning SEO, Google Ads, email, and data-driven ad campaigns.'
  },
  {
    icon: Wrench,
    title: 'We Fix Issues',
    desc: 'Quality assurance services including beta testing and application audits for reliability and peace of mind.'
  },
  {
    icon: Headset,
    title: 'We Support',
    desc: 'Backend administrative operations for HR and Finance so your teams can focus on core business.'
  },
  {
    icon: Sparkles,
    title: 'We Do More',
    desc: 'Strategic partnership for investor meetings, planning, and technical/business reviews to unlock your vision.'
  }
]

export default function CoreServices() {
  return (
    <section id="services" className="relative bg-[#242D40] py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[conic-gradient(at_bottom_right,_#2A7ABC,_#36BBD9,_transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">The 10 Core Services</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A complete stack of capabilities to build, launch, secure, and grow your product—powered by senior engineers and AI-assisted workflows.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg px-4 py-2 bg-white/10 text-white hover:bg-white/20 border border-white/10">Talk to us</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 transition-all hover:translate-y-[-2px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-full w-full bg-[radial-gradient(120px_120px_at_20%_20%,rgba(54,187,217,0.2),transparent)]" />
              </div>
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#36BBD9] to-[#2A7ABC] flex items-center justify-center text-[#0D0D0D] shadow">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
