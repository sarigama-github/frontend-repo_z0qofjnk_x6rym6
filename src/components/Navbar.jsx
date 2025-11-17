import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Platform', href: '#platform' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Company', href: '#company' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#36BBD9] to-[#2A7ABC] shadow-lg" />
              <span className="text-white font-semibold tracking-tight">Fligno</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#36BBD9] hover:bg-[#2A7ABC] text-[#0D0D0D] font-semibold transition-colors"
              >
                Book a demo
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-lg px-3 py-2 bg-[#36BBD9] hover:bg-[#2A7ABC] text-[#0D0D0D] font-semibold"
                >
                  Book a demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
