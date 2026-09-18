import qovoltis01 from '../assets/qovoltis-01.png'
import qovoltis02 from '../assets/qovoltis-02.png'
import qovoltis03 from '../assets/qovoltis-03.png'
import qovoltis04 from '../assets/qovoltis-04.png'

export default function Qovoltis() {
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
                UI / UX · QA
              </span>

              <span className="text-sm text-white/25">
                Selected project
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              Qovoltis
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/50 sm:text-2xl">
              A digital product experience approached from both a design and
              quality perspective.
            </p>
          </div>

          {/* PROJECT META */}
          <div className="mt-16 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Role
              </p>

              <p className="mt-3 text-sm text-white/70">
                UI/UX Design · Manual QA
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Focus
              </p>

              <p className="mt-3 text-sm text-white/70">
                Interface · UX · Quality
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Tools
              </p>

              <p className="mt-3 text-sm text-white/70">
                Figma · Manual testing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              The project
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Designing with both the user and the product in mind.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/45 sm:text-lg">
              <p>
                Qovoltis is a real product project where UI/UX design and
                manual quality testing came together as part of the overall
                product experience.
              </p>

              <p>
                The work involved reviewing interfaces, paying attention to
                visual consistency and identifying areas where the experience
                could be clearer, more coherent and easier to use.
              </p>

              <p>
                Working across both design and QA provided a broader
                perspective on the relationship between interface decisions,
                usability and product quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE 01 */}
      <section className="px-6 pb-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={qovoltis01}
            alt="Qovoltis interface"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* DESIGN */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              UI / UX
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Clear interfaces.
              <br />
              Consistent experience.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              The design work focused on creating interfaces that are clear,
              structured and consistent. Attention was given to hierarchy,
              spacing, visual relationships and interaction patterns to make
              the experience easier to understand.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Hierarchy</p>
                <p className="mt-2 text-sm leading-6 text-white/35">
                  Clear organization of information and actions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Consistency</p>
                <p className="mt-2 text-sm leading-6 text-white/35">
                  Coherent visual and interaction patterns.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Usability</p>
                <p className="mt-2 text-sm leading-6 text-white/35">
                  Interfaces designed with the user journey in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE 02 */}
      <section className="px-6 pb-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={qovoltis02}
            alt="Qovoltis interface screen"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* QA */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Quality assurance
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Design is only part of the experience.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              Manual QA was used to review the product from a quality and
              usability perspective. The process included checking interfaces,
              validating visual consistency and identifying issues that could
              affect the overall user experience.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-400/10 text-sm text-purple-300">
                  01
                </span>

                <span className="text-sm text-white/60">
                  Interface and visual review
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-400/10 text-sm text-purple-300">
                  02
                </span>

                <span className="text-sm text-white/60">
                  Functional and interaction testing
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-400/10 text-sm text-purple-300">
                  03
                </span>

                <span className="text-sm text-white/60">
                  Identification of UX inconsistencies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE 03 */}
      <section className="px-6 pb-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={qovoltis03}
            alt="Qovoltis interface screen"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* FINAL SCREEN */}
      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={qovoltis04}
            alt="Qovoltis interface screen"
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
            Design and quality,
            <br />
            considered together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
            Qovoltis reflects an approach where visual design, usability and
            product quality are considered as connected parts of the same
            experience.
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