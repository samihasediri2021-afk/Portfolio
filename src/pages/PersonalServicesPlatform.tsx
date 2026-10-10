import { Link } from "react-router-dom";
import personalServices01 from "../assets/personal-services-01.png";
import image01 from "../assets/Image 01.png";
import image02 from "../assets/Image 02.png";
import image03 from "../assets/Image 03.png";

export default function PersonalServicesPlatform() {
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
              UI/UX DESIGN · WEB PLATFORM
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Personal
              <br />
              Services
              <br />
              Platform
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              A web platform designed for a cooperative of independent
              professionals providing personal services to individuals,
              with a focus on clear navigation and a structured user
              experience.
            </p>
          </div>

          {/* Main image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <img
              src={personalServices01}
              alt="Personal Services Platform"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="mx-auto max-w-7xl px-6 pb-0 lg:px-10 lg:pb-0">
        <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] backdrop-blur-2xl">
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
                Personal Services Platform
              </p>

              <p className="mt-2 text-sm text-white/40">
                Services management platform
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
                UX Structure · UI Design
              </p>

              <p className="mt-2 text-sm text-white/40">
                Platform experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Overview */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            01
          </span>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Overview
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Connecting independent professionals with personal services.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              The platform was designed to provide a structured digital
              environment for a cooperative of independent professionals
              offering personal services to individuals.
            </p>
          </div>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                The challenge
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
                Organize the different services and platform interactions
                within a clear and easy-to-navigate experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                The direction
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
                Create a structured interface that makes services,
                information and actions easier to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — My Role */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            02
          </span>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              My Role
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Designing a clear experience for service-based interactions.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              I focused on structuring the user experience and designing the
              interface to make the platform easier to navigate and use.
            </p>
          </div>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Structure
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Organizing the platform and its main user flows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Interface
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Creating a clear hierarchy for services, information and
                actions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Experience
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Building a consistent and intuitive platform experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Design Process */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            03
          </span>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Design Process
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              From user needs to a structured platform experience.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              A structured design approach focused on understanding the
              platform, organizing its flows and creating a clear visual
              interface.
            </p>
          </div>

          <div className="relative mt-12 grid gap-3 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Understanding the platform needs and user interactions.",
              },
              {
                number: "02",
                title: "Structure",
                text: "Organizing the main sections, content and user flows.",
              },
              {
                number: "03",
                title: "Wireframes",
                text: "Exploring layouts, navigation and information hierarchy.",
              },
              {
                number: "04",
                title: "UI Design",
                text: "Creating the visual interface and reusable elements.",
              },
              {
                number: "05",
                title: "Prototype",
                text: "Connecting the screens into a coherent experience.",
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
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            04
          </span>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Key Screens
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              A selection of the Personal Services platform interface.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Selected screens showcasing the platform experience,
              information hierarchy and visual direction.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-2">
            <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10">
              <img
                src={image01}
                alt="Personal Services Platform interface"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
              />
            </div>

            <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10">
              <img
                src={image02}
                alt="Personal Services Platform screen"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
              />
            </div>

            <div className="group overflow-hidden rounded-[22px] border border-white/10 bg-black/10 md:col-span-2">
              <img
                src={image03}
                alt="Personal Services Platform dashboard"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Final Experience */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-10 lg:py-7">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <span className="pointer-events-none absolute -right-4 -top-16 text-[180px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[240px]">
            05
          </span>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B8FFF]">
              Final Experience
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              A structured experience for personal services.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              The platform brings services, information and interactions
              together in one coherent experience, making the different
              elements easier to navigate and understand.
            </p>
          </div>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Services
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                A clearer way to present and organize personal services.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Navigation
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Structured navigation to make the platform easier to explore.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Experience
              </p>

              <p className="mt-3 text-sm leading-7 text-white/65">
                A consistent interface designed around clarity and usability.
              </p>
            </div>
          </div>

          <div className="relative mt-6 rounded-2xl border border-[#8B7CFF]/20 bg-[#8B7CFF]/[0.06] p-7 sm:p-8">
            <p className="max-w-3xl text-lg leading-8 tracking-[-0.01em] text-white/80 sm:text-xl">
              A structured platform experience designed to make personal
              services easier to present, navigate and manage.
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
            Personal Services Platform
          </span>

          <Link
            to="/work/ev-charging-web-platform"
            className="text-sm text-white/50 transition hover:text-white"
          >
            Next project →
          </Link>
        </div>
      </footer>
    </main>
  );
}