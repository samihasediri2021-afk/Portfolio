import { Link } from "react-router-dom";
import designSystem from "../assets/design-system.png";

export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            to="/"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <span className="text-xs uppercase tracking-[0.25em] text-white/40">
            Case Study
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
              UI/UX Design · Design System
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Design System
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              A structured design system created to bring consistency,
              scalability, and clarity across digital interfaces.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">
            <img
              src={designSystem}
              alt="Design System"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Project Info */}
        <section className="mb-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl lg:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                My Role
              </p>
              <p className="mt-2 text-sm text-white/80">UI/UX Designer</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Project
              </p>
              <p className="mt-2 text-sm text-white/80">Design System</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Focus
              </p>
              <p className="mt-2 text-sm text-white/80">
                UI Consistency · Components
              </p>
            </div>
          </div>
        </section>

        {/* 01 Overview */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 py-10 lg:p-12">
          <span className="pointer-events-none absolute -right-4 -top-12 text-[10rem] font-bold leading-none text-white/[0.025]">
            01
          </span>

          <div className="relative max-w-4xl">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              01 — Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Creating consistency across digital products
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                  Challenge
                </p>

                <p className="mt-3 leading-7 text-white/60">
                  Establish a reusable visual foundation that keeps interfaces
                  consistent while making future design work easier to scale.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                  Direction
                </p>

                <p className="mt-3 leading-7 text-white/60">
                  Define reusable components, visual rules, and interaction
                  patterns that can be applied across different screens and
                  products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 My Role */}
        <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 py-10 lg:p-12">
          <span className="pointer-events-none absolute -right-4 -top-12 text-[10rem] font-bold leading-none text-white/[0.025]">
            02
          </span>

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              02 — My Role
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Building a reusable visual foundation
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Components</h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Defining reusable interface elements and consistent visual
                  patterns.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Visual Rules</h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Establishing typography, spacing, colors, and hierarchy to
                  maintain consistency.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Scalability</h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Creating a flexible foundation that can support new screens
                  and future design needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Design Process */}
        <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 py-10 lg:p-12">
          <span className="pointer-events-none absolute -right-4 -top-12 text-[10rem] font-bold leading-none text-white/[0.025]">
            03
          </span>

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              03 — Design Process
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              From foundations to reusable components
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["01", "Audit"],
                ["02", "Foundations"],
                ["03", "Components"],
                ["04", "Patterns"],
                ["05", "Documentation"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="text-xs text-white/35">{number}</span>

                  <h3 className="mt-4 font-medium">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 Key Screens */}
        <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 py-10 lg:p-12">
          <span className="pointer-events-none absolute -right-4 -top-12 text-[10rem] font-bold leading-none text-white/[0.025]">
            04
          </span>

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              04 — Key Elements
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              A visual language built for consistency
            </h2>

            <div className="mt-8 grid gap-5">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <img
                  src={designSystem}
                  alt="Design System overview"
                  className="w-full object-cover"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <img
                    src={designSystem}
                    alt="Design System components"
                    className="w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <img
                    src={designSystem}
                    alt="Design System interface"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 Final Experience */}
        <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 py-10 lg:p-12">
          <span className="pointer-events-none absolute -right-4 -top-12 text-[10rem] font-bold leading-none text-white/[0.025]">
            05
          </span>

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              05 — Final Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              A scalable foundation for future interfaces
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Consistency</h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Reusable rules create a more coherent experience across
                  interfaces.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Efficiency</h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Reusable components help simplify and accelerate future
                  design work.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Scalability</h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  A flexible system makes it easier to evolve the product
                  experience over time.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/65">
              The design system provides a structured visual foundation that
              helps create consistent and scalable digital experiences.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <div className="text-center">
            <p className="text-sm text-white/40">Next project</p>

            <Link
              to="/work/pharmacy-app"
              className="mt-1 block text-sm text-white transition hover:text-violet-300"
            >
              Pharmacy App →
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}