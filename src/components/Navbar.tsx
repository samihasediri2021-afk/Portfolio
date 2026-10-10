import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#11101F]/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
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
            className="text-sm text-white/70 transition hover:text-white"
          >
            Work
          </a>

          <a
            href="/#services"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="/#about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </a>

          <a
            href="/#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-purple-400/50 hover:bg-purple-400/10"
          >
            Let's talk
          </a>
        </nav>

        {/* MOBILE */}
        <a
          href="/#contact"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-purple-400/50 hover:bg-purple-400/10 md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}