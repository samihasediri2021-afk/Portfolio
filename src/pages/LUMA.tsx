import luma01 from '../assets/luma01.png'

const productFocus = [
  'AI-powered clarity',
  'Thought organization',
  'Personal prioritization',
  'Calm user experience',
]

export default function LUMA() {
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
                AI-POWERED DEVELOPMENT · PRODUCT DESIGN
              </span>

              <span className="text-sm text-white/25">
                Personal product
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              LUMA
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/50 sm:text-2xl">
              An AI-powered personal clarity product designed to turn
              unstructured thoughts into a clearer, more manageable day.
            </p>

            <p className="mt-6 text-lg font-medium text-purple-300">
              Less to carry. More to live.
            </p>
          </div>

          {/* PROJECT META */}
          <div className="mt-16 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Role
              </p>

              <p className="mt-3 text-sm text-white/70">
                Product Design · AI Development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Product
              </p>

              <p className="mt-3 text-sm text-white/70">
                AI personal clarity assistant
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Focus
              </p>

              <p className="mt-3 text-sm text-white/70">
                AI · UX · Product
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
              From mental clutter
              <br />
              to clarity.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
            <p>
              LUMA is an AI-powered personal clarity assistant designed to
              help people get thoughts out of their head and turn them into
              something easier to understand and manage.
            </p>

            <p>
              Instead of requiring users to organize everything themselves,
              LUMA starts with unstructured thoughts and uses AI to identify
              useful information such as tasks, events and ideas.
            </p>

            <p>
              The product is intentionally designed around clarity rather than
              productivity pressure.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT FOCUS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Product focus
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              AI that helps organize the mind, not just the task list.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {productFocus.map((item, index) => (
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
            src={luma01}
            alt="LUMA AI personal clarity interface"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* THE IDEA */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              The idea
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Drop the thought.
              <br />
              Let LUMA make sense of it.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              LUMA begins with a simple interaction: write down what is taking
              up space in your mind. The input does not need to be structured,
              categorized or written in a particular way.
            </p>

            <p className="mt-5 text-base leading-8 text-white/45 sm:text-lg">
              AI then analyzes the thought and helps transform it into useful,
              structured information that can be acted on or revisited later.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Drop</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Capture what is on your mind naturally.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Understand</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Let AI identify useful structure and meaning.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-medium">Organize</p>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Turn scattered thoughts into clearer information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT EXPERIENCE */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              Product experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Designed around
              <br />
              clarity, not pressure.
            </h2>
          </div>

          <div>
            <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
              <p>
                LUMA separates different kinds of information into simple
                spaces such as Today, Upcoming and Ideas, helping users see
                what matters without turning the experience into another
                overwhelming task manager.
              </p>

              <p>
                Tasks, events and ideas can be organized with useful context
                such as dates and priorities, while the original thoughts can
                remain accessible through History.
              </p>

              <p>
                The interface is intentionally calm and minimal so the product
                feels supportive rather than demanding.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  01
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Simplify
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Reduce mental and visual clutter.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  02
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Prioritize
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Bring useful context to the right information.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  03
                </span>

                <h3 className="mt-3 text-base font-medium">
                  Focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Make the next step easier to see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              AI-powered development
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From product idea
              <br />
              to working experience.
            </h2>
          </div>

          <div>
            <div className="space-y-5 text-base leading-8 text-white/45 sm:text-lg">
              <p>
                LUMA was designed and developed as a real product rather than
                only a visual concept.
              </p>

              <p>
                The experience combines modern web technologies with
                AI-assisted development and an AI analysis layer that helps
                transform natural-language thoughts into structured items.
              </p>

              <p>
                This project brings together product thinking, UI/UX design,
                frontend development and practical AI integration in one
                experience.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                Product Design
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                UI / UX
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                React
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                AI
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55">
                AI-assisted development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL IMAGE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111116]">
          <img
            src={luma01}
            alt="LUMA product interface"
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
            Less to carry.
            <br />
            More to live.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
            LUMA explores how AI can be used to reduce mental clutter and
            create a calmer relationship with everyday information.
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