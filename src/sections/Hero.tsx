import { IDENTITY } from '../content'
import heroPhoto from '../assets/hero-photo.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0F] px-6 pt-24 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-purple-400 sm:text-sm">
              {IDENTITY.role}
            </p>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Making digital
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
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
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                Explore my work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-400/10"
              >
                Let&apos;s work together
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-purple-500/10 blur-3xl" />

              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-2xl sm:h-[450px] sm:w-[340px]">
                <img
                  src={heroPhoto}
                  alt="Samiha Sediri"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#111116]/90 px-5 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Based on
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Design · UX · Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}