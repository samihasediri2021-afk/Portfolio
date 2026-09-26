export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* LOGO */}
        <a
          href="/"
          className="text-lg font-semibold tracking-[-0.02em] text-white transition hover:text-purple-300"
        >
          Samiha Sediri
        </a>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/#work"
            className="text-sm text-white/55 transition hover:text-white"
          >
            Work
          </a>

          <a
            href="/#services"
            className="text-sm text-white/55 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="/#about"
            className="text-sm text-white/55 transition hover:text-white"
          >
            About
          </a>

          <a
            href="/#contact"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-purple-400/50 hover:bg-purple-400/10"
          >
            Let&apos;s talk
          </a>
        </nav>

        {/* MOBILE */}
        <a
          href="/#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  )
}