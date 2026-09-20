export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B0B0F] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-white/10 pt-20">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
                Contact
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Let&apos;s create something thoughtful.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/45">
                Have a project, a product or a digital experience that needs
                thoughtful design? Let&apos;s talk about how I can help.
              </p>

              <a
                href="mailto:samihasediri2021@gmail.com"
                className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-white transition hover:text-purple-300"
              >
                samihasediri2021@gmail
                <span>↗</span>
              </a>

              <div className="mt-12 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  View my work
                </a>

                <a
                  href="#about"
                  className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  About me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}