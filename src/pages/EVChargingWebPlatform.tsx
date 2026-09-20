import evChargingWeb01 from '../assets/evChargingWeb01.png'

const projectFocus = [
  'Web experience',
  'Information hierarchy',
  'Charging ecosystem',
  'Professional interface',
]

export default function EVChargingWebPlatform() {
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
              EV Charging
              <br />
              Web Platform
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/50 sm:text-2xl">
              A professional web experience designed for an electric vehicle
              charging ecosystem, with a focus on clarity and structured
              information.
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
                EV charging web platform
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Focus
              </p>

              <p className="mt-3 text-sm text-white/70">
                Web · Information · UX
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
              Designing a clearer
              <br />
              charging experience.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
            <p>
              This project focused on the UI/UX design of a web platform for
              an electric vehicle charging company.
            </p>

            <p>
              The interface needed to communicate information clearly while
              presenting a professional digital experience around the charging
              ecosystem.
            </p>

            <p>
              The design work focused on creating a structured experience with
              clear hierarchy, consistent visual elements and an interface that
              feels easy to understand.
            </p>
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
              Building a professional digital layer around EV charging.
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

      {/* MAIN IMAGE */}
      <section className="px-6 pb-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={evChargingWeb01}
            alt="EV charging web platform interface"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* UI / UX */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              UI / UX
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Turning complex
              <br />
              information into clarity.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              The design approach focused on creating a visual hierarchy that
              makes information easier to scan and understand. Content,
              navigation and interface elements were structured to support a
              professional and coherent web experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Clarity</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Present information in a direct and understandable way.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Hierarchy</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Guide attention through clear visual priorities.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Consistency</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Maintain a coherent experience across the interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Design approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Professional,
              <br />
              without unnecessary complexity.
            </h2>
          </div>

          <div>
            <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
              <p>
                A web platform connected to a technical ecosystem needs to
                communicate information without making the experience feel
                complicated.
              </p>

              <p>
                The design therefore emphasized structure, visual balance and
                clear relationships between different areas of the experience.
              </p>

              <p>
                The result is an interface direction designed to feel modern,
                professional and approachable.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  01
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Structure
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Establish clear relationships between content.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  02
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Clarify
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Make important information easier to understand.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  03
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Refine
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Create a polished and consistent interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL IMAGE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={evChargingWeb01}
            alt="EV charging web platform final interface"
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
            A clearer digital
            <br />
            experience for EV charging.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
            This project reflects a UI/UX approach focused on translating a
            technical charging ecosystem into a structured, professional and
            approachable web experience.
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