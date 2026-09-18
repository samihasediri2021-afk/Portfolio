export default function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white"
        >
          SAMIHA<span className="text-purple-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a
            href="#work"
            className="transition hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-purple-400/50 hover:bg-purple-400/10"
        >
          Let's talk
        </a>
      </div>
    </nav>
  )
}