export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/40">
          © 2026 Samiha Sediri. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-white/40">
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
      </div>
    </footer>
  )
}