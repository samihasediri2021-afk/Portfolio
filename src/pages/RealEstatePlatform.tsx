import realEstate01 from '../assets/real-estate-01.png'

const projectFocus = [
  'Property presentation',
  'Website experience',
  'Information hierarchy',
  'Visual consistency',
]

export default function RealEstatePlatform() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* BACK TO WORK */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <a
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <span>←</span>
          Back to work
        </a>
      </div>

      {/* HERO */}
      <section className="px-6 pb-24 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-purple-300">
                WEB PLATFORM · UI/UX
              </span>

              <span className="text-sm text-white/25">
                Selected project
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              Real Estate
              <br />
              Platform
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/50 sm:text-2xl">
              A UI/UX project focused on presenting properties through a clear,
              structured and professional digital experience.
            </p>
          </div>

          {/* PROJECT META */}
          <div className="mt-16 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Role
              </p>

              <p className="mt-3 text-sm text-white/70">
                UI/UX Design
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Product
              </p>

              <p className="mt-3 text-sm text-white/70">
                Real estate platform
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Focus
              </p>

              <p className="mt-3 text-sm text-white/70">
                Interface · UX · Properties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Presenting properties
              <br />
              with clarity.
            </h2>
          </div>

          <div>
            <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
              <p>
                This project focused on the UI/UX design of a digital real
                estate platform created to present and promote properties.
              </p>

              <p>
                The experience needed to communicate property information in a
                clear and visually structured way while maintaining a
                professional overall interface.
              </p>

              <p>
                The design approach focused on hierarchy, composition and the
                relationship between property content and the surrounding
                interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT FOCUS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Project focus
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Building a visual language for property presentation.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projectFocus.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.04]"
              >
                <span className="text-xs text-white/25">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="mt-6 text-sm font-medium text-white/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SCREEN */}
      <section className="px-6 pb-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={realEstate01}
            alt="Real estate platform interface"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              UI / UX
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Structure first.
              <br />
              Visual impact second.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              Real estate interfaces contain a large amount of information.
              The design therefore focused on creating a visual hierarchy that
              helps users understand the content without making the interface
              feel overloaded.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Hierarchy</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Organizing property information into clear visual levels.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Clarity</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Keeping important content easy to identify and understand.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Consistency</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Creating a coherent experience across the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL DETAILS */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Design considerations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A balance between
              <br />
              information and presentation.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
            <p>
              Property presentation needs to communicate useful information
              while still giving visual importance to the property itself.
            </p>

            <p>
              The interface was therefore approached with attention to
              spacing, typography, content grouping and visual balance.
            </p>

            <p>
              The goal was to create an experience that feels structured and
              professional without adding unnecessary visual complexity.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL SCREEN */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={realEstate01}
            alt="Real estate platform final interface"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            Project perspective
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Clear property presentation,
            <br />
            designed as an experience.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
            This project reflects a UI/UX approach focused on making
            information easier to navigate while preserving the visual
            importance of the properties being presented.
          </p>

          <a
            href="/#work"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            ← Back to selected work
          </a>
        </div>
      </section>
    </main>
  )
}