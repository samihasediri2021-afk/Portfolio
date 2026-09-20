import erp01 from '../assets/erp-01.png'

const projectFocus = [
  'Business workflows',
  'Information hierarchy',
  'Data organization',
  'Professional interface',
]

export default function ERPPlatform() {
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
                ERP · UI/UX
              </span>

              <span className="text-sm text-white/25">
                Selected project
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              ERP
              <br />
              Platform
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/50 sm:text-2xl">
              A business platform interface designed around structured
              workflows, information and professional day-to-day activities.
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
                Business platform
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Focus
              </p>

              <p className="mt-3 text-sm text-white/70">
                Workflows · Information · UX
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
              Making business
              <br />
              workflows easier to read.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
            <p>
              This project focused on the UI/UX design of a business-oriented
              platform built around structured workflows and professional
              activities.
            </p>

            <p>
              Enterprise and business interfaces often contain a large amount
              of information. The design therefore needed to create clear
              relationships between different types of content and actions.
            </p>

            <p>
              The work focused on creating a structured interface that feels
              professional while keeping the experience understandable and
              usable.
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
              Designing structure for professional workflows.
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
            src={erp01}
            alt="ERP platform interface"
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
              Information should
              <br />
              feel organized.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              The interface was approached with a strong focus on hierarchy,
              grouping and visual structure. The goal was to make professional
              information easier to scan and understand without unnecessary
              visual complexity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Structure</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Clear relationships between sections and information.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Hierarchy</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Important information and actions remain easy to identify.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Consistency</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  A coherent visual language across the interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Design approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Balancing density
              <br />
              with clarity.
            </h2>
          </div>

          <div>
            <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
              <p>
                Business platforms need to communicate more information than a
                typical marketing website or simple application.
              </p>

              <p>
                The design approach therefore emphasized grouping related
                information, maintaining visual rhythm and creating clear
                distinctions between different areas of the interface.
              </p>

              <p>
                This creates an experience that can feel detailed without
                becoming visually overwhelming.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  01
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Organize
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Establish clear content relationships.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  02
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Simplify
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Reduce unnecessary visual complexity.
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
                  Create a consistent professional interface.
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
            src={erp01}
            alt="ERP platform final interface"
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
            Structured interfaces,
            <br />
            designed for real work.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
            This project reflects a UI/UX approach focused on making
            information-heavy professional environments clearer, more
            structured and easier to navigate.
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