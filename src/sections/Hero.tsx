import { IDENTITY } from '../content'
import heroPhoto from '../assets/samiha.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent px-6 pt-24 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT — CONTENT */}
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-purple-400 sm:text-sm">
              {IDENTITY.role}
            </p>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Making digital
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                things feel a little nicer.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              I create thoughtful digital experiences through UI/UX design,
              graphic design and QA with a focus on clarity, detail and the
              little things that make an experience feel right.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#171525] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                Explore my work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-400/10"
              >
                Let&apos;s work together
              </a>
            </div>
          </div>

          {/* RIGHT — PORTRAIT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[360px] sm:w-[400px] lg:w-[430px]">

              {/* Soft ambient glow */}
              <div className="absolute inset-[-60px] rounded-full bg-purple-600/15 blur-[100px]" />

              {/* Outer decorative ring */}
              <div className="absolute inset-[-18px] rounded-full border border-purple-400/10" />

              {/* Subtle second ring */}
              <div className="absolute inset-[-34px] rounded-full border border-white/[0.04]" />

              {/* Main photo */}
              <div className="relative aspect-square overflow-hidden rounded-full border border-white/15 bg-white/[0.04] shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
                <img
                  src={heroPhoto}
                  alt="Samiha Sediri"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                />

                {/* Cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090817]/35 via-transparent to-transparent" />

                {/* Violet light */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10" />

                {/* Inner highlight */}
                <div className="absolute inset-3 rounded-full border border-white/[0.08]" />
              </div>

              {/* Floating status detail */}
              <div className="absolute bottom-5 left-0 flex items-center gap-3 rounded-full border border-white/10 bg-[#11101d]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.9)]" />

                <span className="text-xs font-medium text-white/70">
                  UI/UX · Graphic · QA
                </span>
              </div>

              {/* Small decorative dot */}
              <div className="absolute right-4 top-10 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}