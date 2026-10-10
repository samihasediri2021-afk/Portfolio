import { Link } from "react-router-dom";
import qovoltis01 from "../assets/Cover1.png";
import beforeAfter01 from "../assets/Before-After 01.png";
import beforeAfter02 from "../assets/Before-After 02.png";
import beforeAfter03 from "../assets/Before-After 03.png";
import beforeAfter04 from "../assets/Before-After 04.png";
import beforeAfter05 from "../assets/Before-After 05.png";

export default function Qovoltis() {
  return (
    <main className="min-h-screen bg-transparent pt-16 text-white">

     {/* Header */}
      <header>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link
          to="/"
          aria-label="Back to portfolio"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
          <span className="text-xl">←</span>
         </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-0 lg:px-10 lg:pb-20 lg:pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Text */}
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#8B7CFF]">
              UI/UX DESIGN · MOBILE APP · REDESIGN
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              EV Charging
              <br />
              App
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              A redesign of an existing EV charging application, focused on
              creating a clearer, more intuitive and modern user experience.
            </p>
          </div>

          {/* Main image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <img
              src={qovoltis01}
              alt="EV Charging App redesign"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="mx-auto max-w-7xl px-6 pb-0 lg:px-10 lg:pb-0">
        <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] backdrop-blur-2xl">
          {/* Subtle accent */}
          <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#8B7CFF]/70 to-transparent" />

          <div className="grid sm:grid-cols-3">
            {/* Role */}
            <div className="relative p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CFF]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  My Role
                </p>
              </div>

              <p className="text-xl font-medium tracking-[-0.02em] text-white lg:text-2xl">
                UI/UX Designer
              </p>

              <p className="mt-2 text-sm text-white/40">
                Design & experience
              </p>
            </div>

            {/* Project */}
            <div className="relative border-t border-white/10 p-8 sm:border-l sm:border-t-0 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CFF]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  Project
                </p>
              </div>

              <p className="text-xl font-medium tracking-[-0.02em] text-white lg:text-2xl">
                Mobile App Redesign
              </p>

              <p className="mt-2 text-sm text-white/40">
                Existing application
              </p>
            </div>

            {/* Focus */}
            <div className="relative border-t border-white/10 p-8 sm:border-l sm:border-t-0 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CFF]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  Focus
                </p>
              </div>

              <p className="text-xl font-medium tracking-[-0.02em] text-white lg:text-2xl">
                UX Flows · UI Design
              </p>

              <p className="mt-2 text-sm text-white/40">
                Prototyping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Overview */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Background number */}
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            01
          </span>

          {/* Header */}
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Overview
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Redesigning an existing EV charging experience.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              I worked on the redesign of an existing mobile application,
              rethinking its user experience and visual interface to create a
              clearer, more intuitive and more modern experience.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="relative mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                The challenge
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
                Rethink the structure and user experience of an existing
                charging application.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                The direction
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
                Build a clearer interface with stronger hierarchy and a more
                consistent visual language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — My Role */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Background number */}
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            02
          </span>

          {/* Header */}
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              My Role
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              From UX structure to the final interface.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              I handled the UI/UX design process, from reviewing the existing
              application and defining the main user flows to creating the
              interface and final interactive prototype.
            </p>
          </div>

          {/* Role highlights */}
          <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Structure
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                User flows, navigation and screen structure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Interface
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Visual design, hierarchy and reusable UI elements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Prototype
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Connecting the screens into a complete interactive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Design Process */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Background number */}
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            03
          </span>

          {/* Header */}
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Design Process
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              From the existing experience to the final prototype.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              A structured design process focused on understanding the
              existing experience, improving the user flows and creating a
              clearer interface.
            </p>
          </div>

          {/* Process */}
          <div className="relative mt-12 grid gap-3 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Review",
                text: "Understanding the existing application.",
              },
              {
                number: "02",
                title: "User Flows",
                text: "Structuring the main journeys.",
              },
              {
                number: "03",
                title: "Wireframes",
                text: "Exploring layouts and interactions.",
              },
              {
                number: "04",
                title: "UI Design",
                text: "Creating the visual interface.",
              },
              {
                number: "05",
                title: "Prototype",
                text: "Connecting the final screens.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/10 bg-black/10 p-6 transition duration-300 hover:border-[#8B7CFF]/30 hover:bg-white/[0.045]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#9B8FFF]">
                    {step.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition duration-300 group-hover:bg-[#9B8FFF]" />
                </div>

                <h3 className="mt-8 text-base font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Key Screens */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Background number */}
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            04
          </span>

          {/* Header */}
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Key Screens
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Before and after the redesign.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              A visual comparison showing how the interface evolved through
              the redesign, with clearer structure, stronger hierarchy and a
              more consistent visual language.
            </p>
          </div>

          {/* Before / After Screens */}
<div className="relative mt-12 grid gap-5 md:grid-cols-2">

  {/* Before / After 01 */}
  <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10">
    <img
      src={beforeAfter01}
      alt="Before and after redesign comparison 01"
      className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
    />
  </div>

  {/* Before / After 02 */}
  <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10">
    <img
      src={beforeAfter02}
      alt="Before and after redesign comparison 02"
      className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
    />
  </div>

  {/* Before / After 03 */}
  <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10">
    <img
      src={beforeAfter03}
      alt="Before and after redesign comparison 03"
      className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
    />
  </div>

  {/* Before / After 04 */}
  <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10">
    <img
      src={beforeAfter04}
      alt="Before and after redesign comparison 04"
      className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
    />
  </div>

  {/* Before / After 05 */}
  <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10 md:col-span-2">
    <img
      src={beforeAfter05}
      alt="Before and after redesign comparison 05"
      className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
    />
  </div>

</div>
        </div>
      </section>

      {/* 05 — Final Experience */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Background number */}
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            05
          </span>

          {/* Header */}
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Final Experience
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              A clearer and more cohesive charging experience.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              The redesign brought the main user journeys into a more coherent
              experience, with clearer structure, stronger visual hierarchy
              and a more consistent interface.
            </p>
          </div>

          {/* Final highlights */}
          <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Experience
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Clearer journeys and a more intuitive interaction flow.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Interface
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Stronger hierarchy and a more consistent visual language.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Outcome
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                A modernized interface built around the redesigned user flows.
              </p>
            </div>
          </div>

          {/* Closing statement */}
          <div className="relative mt-6 rounded-2xl border border-[#8B7CFF]/20 bg-[#8B7CFF]/[0.06] p-7 sm:p-8">
            <p className="max-w-3xl text-lg leading-8 tracking-[-0.01em] text-white/80 sm:text-xl">
              A complete UI/UX redesign, from reviewing the existing
              experience to defining the flows, designing the interface and
              building the final interactive prototype.
            </p>
          </div>
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