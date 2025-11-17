export default function AIBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1324] via-[#14243d] to-[#1b2c46] p-6">
      <div className="pointer-events-none absolute -inset-16 opacity-40 [background:radial-gradient(600px_200px_at_10%_0%,rgba(54,187,217,.25),transparent),radial-gradient(600px_200px_at_90%_100%,rgba(42,122,188,.25),transparent)]" />
      <div className="relative">
        <p className="text-white/80">
          AI-enhanced delivery: from code generation and test coverage to analytics and support, our teams ship faster with higher quality.
        </p>
      </div>
    </div>
  )
}
