import { Link } from "react-router-dom";
import qovoltis01 from "../assets/qovoltis-01.png";
import qovoltis02 from "../assets/qovoltis-02.png";
import qovoltis03 from "../assets/qovoltis-03.png";
import qovoltis04 from "../assets/qovoltis-04.png";

export default function Qovoltis() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link
            to="/"
            className="text-sm font-medium tracking-wide text-white/70 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <span className="text-xs uppercase tracking-[0.25em] text-white/40">
            Case Study
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#8B7CFF]">
            APP REDESIGN · UI/UX · MANUAL QA
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            EV Charging
            <br />
            App
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
            A mobile EV charging experience that I first designed from a
            UI/UX perspective, then tested as part of the product team.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <img
            src={qovoltis01}
            alt="EV Charging App interface"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Project overview */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              My role
            </p>
            <p className="mt-3 text-base text-white/80">
              UI/UX Designer
              <br />
              Manual QA Tester
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Approach
            </p>
            <p className="mt-3 text-base text-white/80">
              Design first
              <br />
              Testing after implementation
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Product
            </p>
            <p className="mt-3 text-base text-white/80">
              Mobile EV charging
              <br />
              application
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Focus
            </p>
            <p className="mt-3 text-base text-white/80">
              UI quality
              <br />
              Functional testing
            </p>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="text-sm uppercase tracking-[0.25em] text-[#8B7CFF]">
          01 — Context
        </p>

        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          From interface design to product testing.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/60 sm:text-lg">
          <p>
            I started this project on the design side, working on the mobile
            application interface and user experience.
          </p>

          <p>
            After completing the design work, I joined the product team in a
            QA role and tested the implemented application.
          </p>

          <p>
            This gave me the opportunity to look at the same product from two
            perspectives: first as the person designing the experience, and
            then as the person checking how that experience worked in the
            implemented product.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B7CFF]">
            02 — Process
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-white/40">01</span>

              <h3 className="mt-8 text-2xl font-semibold">
                Design
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                I designed the application interface and worked on the user
                experience across the main product areas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-white/40">02</span>

              <h3 className="mt-8 text-2xl font-semibold">
                Implementation
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                The designed experience was then implemented as part of the
                product development process.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-sm text-white/40">03</span>

              <h3 className="mt-8 text-2xl font-semibold">
                Testing
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                I joined the team as a QA tester and manually tested the
                implemented application across its different product areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product areas */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="text-sm uppercase tracking-[0.25em] text-[#8B7CFF]">
          03 — Product areas
        </p>

        <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Areas covered across the application.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Login & Account",
            "Cards",
            "Charging",
            "Qontrol",
            "One Click Charge",
            "QR",
            "Invoices",
            "Syder",
          ].map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="text-base text-white/80">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Design */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B7CFF]">
            04 — UI/UX work
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Designing the experience before testing the product.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
            My first involvement with the project was focused on the interface
            and user experience. I worked on the application screens and
            interactions before moving into the QA phase.
          </p>
        </div>
      </section>

      {/* Screens */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="text-sm uppercase tracking-[0.25em] text-[#8B7CFF]">
          05 — Screens
        </p>

        <div className="mt-12 space-y-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <img
              src={qovoltis02}
              alt="EV Charging App screen"
              className="h-auto w-full"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src={qovoltis03}
                alt="EV Charging App interface"
                className="h-auto w-full"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img
                src={qovoltis04}
                alt="EV Charging App interface"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QA */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B7CFF]">
            06 — QA / Testing
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Testing the implemented experience.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/60 sm:text-lg">
            <p>
              After the design phase, I joined the team as a QA tester and
              manually tested the implemented application.
            </p>

            <p>
              My testing covered the main product areas, with attention to how
              the implemented experience behaved across the application.
            </p>

            <p>
              Working on both the design and QA sides helped me evaluate the
              product not only from a visual perspective, but also from the
              perspective of the implemented user experience.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Login & Account",
              "Cards",
              "Charging",
              "Qontrol",
              "One Click Charge",
              "QR",
              "Invoices",
              "Syder",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-6 py-5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8B7CFF]/10 text-xs text-[#A79EFF]">
                  ✓
                </span>

                <span className="text-sm text-white/70">
                  Manual testing — {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perspective */}
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="text-sm uppercase tracking-[0.25em] text-[#8B7CFF]">
          07 — Project perspective
        </p>

        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Seeing the product from both sides.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
          This project allowed me to experience the complete transition from
          interface design to an implemented product and then evaluate that
          product through manual QA testing.
        </p>

        <div className="mt-12 rounded-3xl border border-[#8B7CFF]/20 bg-[#8B7CFF]/5 p-8 sm:p-10">
          <p className="text-xl leading-8 text-white/80 sm:text-2xl">
            Design helped me define the experience. QA helped me look at how
            that experience actually worked in the product.
          </p>
        </div>
      </section>

      {/* Bottom navigation */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <Link
            to="/"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <span className="text-xs uppercase tracking-[0.2em] text-white/30">
            EV Charging App
          </span>
        </div>
      </footer>
    </main>
  );
}