import { Link } from "react-router-dom";
import pharmacy from "../assets/Pharmacy.png";

export default function PharmacyApp() {
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
              UI/UX Design · Healthcare · Mobile App
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Pharmacy App
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              A mobile pharmacy experience designed to make discovering,
              selecting, and managing healthcare products simple and intuitive.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">
            <img
              src={pharmacy}
              alt="Pharmacy App"
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
              <p className="mt-2 text-sm text-white/80">
                Pharmacy Mobile App
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Focus
              </p>
              <p className="mt-2 text-sm text-white/80">
                UX Structure · UI Design
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
              Making pharmacy services easier to navigate
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                  Challenge
                </p>
                <p className="mt-3 leading-7 text-white/60">
                  Create a clear mobile experience that helps users browse
                  healthcare products and access the information they need
                  without unnecessary complexity.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                  Direction
                </p>
                <p className="mt-3 leading-7 text-white/60">
                  Organize the experience around simple navigation, clear
                  product information, and an accessible visual hierarchy.
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
              From structure to interface
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Structure</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Organizing the main screens and user flows around the core
                  pharmacy experience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Interface</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Creating a clean visual system with clear hierarchy and
                  intuitive interactions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Experience</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Focusing on readability, accessibility, and ease of use
                  throughout the journey.
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
              A structured approach to the experience
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["01", "Understand"],
                ["02", "Structure"],
                ["03", "Wireframes"],
                ["04", "UI Design"],
                ["05", "Prototype"],
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
              04 — Key Screens
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Exploring the pharmacy experience
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <img
                  src={pharmacy}
                  alt="Pharmacy App screen"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <img
                  src={pharmacy}
                  alt="Pharmacy App interface"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:col-span-2">
                <img
                  src={pharmacy}
                  alt="Pharmacy App experience"
                  className="w-full object-cover"
                />
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
              A clearer way to interact with pharmacy services
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Clear Navigation</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  A straightforward structure makes the main actions easier to
                  discover.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Product Focus</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Information is presented in a way that keeps the product
                  experience easy to understand.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-medium">Simple Experience</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  The interface keeps interactions focused and easy to follow.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/65">
              The final direction combines a clean interface with a structured
              mobile journey, creating a more accessible pharmacy experience.
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
              to="/work/healthcare-mobile-app"
              className="mt-1 block text-sm text-white transition hover:text-violet-300"
            >
              Healthcare Mobile App →
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}