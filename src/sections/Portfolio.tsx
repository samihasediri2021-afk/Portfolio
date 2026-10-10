
import { useState } from 'react'
import qovoltis01 from '../assets/qovoltis-01.png'
import realEstate01 from '../assets/real-estate-01.png'
import erp01 from '../assets/erp-01.png'
import personalServices01 from '../assets/personal-services-01.png'
import evChargingWeb01 from '../assets/evChargingWeb01.png'
import designSystem from '../assets/design-system.png'
import healthcare from '../assets/healthcare.png'
import pharmacy from '../assets/Pharmacy.png'
import graphic01 from '../assets/graphic-01.png'
import graphic02 from '../assets/graphic-02.png'
import graphic03 from '../assets/graphic-03.png'
import graphic04 from '../assets/graphic-04.png'
import graphic05 from '../assets/graphic-05.png'

const projects = [
  {
    title: 'EV Charging App',
    description:
      'Mobile charging experience designed with a focus on clarity and usability.',
    image: qovoltis01,
    category: 'UI / UX',
    categoryStyle: 'purple',
    href: '/work/ev-charging-app',
  },
  {
    title: 'Real Estate Platform',
    description:
      'A structured digital experience for browsing and managing real estate information.',
    image: realEstate01,
    category: 'UI / UX',
    categoryStyle: 'purple',
    href: '/work/real-estate-platform',
  },
  {
    title: 'ERP Platform',
    description:
      'Dashboard and digital interface designed to make complex information easier to navigate.',
    image: erp01,
    category: 'UI / UX',
    categoryStyle: 'purple',
    href: '/work/erp-platform',
  },
  {
    title: 'Personal Services Platform',
    description:
      'A digital platform designed around services, users and a clear browsing experience.',
    image: personalServices01,
    category: 'UI / UX',
    categoryStyle: 'purple',
    href: '/work/personal-services-platform',
  },
  {
    title: 'EV Charging Web Platform',
    description:
      'Web interface designed for managing and monitoring EV charging experiences.',
    image: evChargingWeb01,
    category: 'UI / UX',
    categoryStyle: 'purple',
    href: '/work/ev-charging-web-platform',
  },
  {
    title: 'Healthcare Mobile App',
    description:
      'Mobile healthcare experience designed around simplicity and accessibility.',
    image: healthcare,
    category: 'UI / UX',
    categoryStyle: 'purple',
    status: 'In Progress',
  },
  {
    title: 'Pharmacy App',
    description:
      'Mobile pharmacy experience focused on clear navigation and a simple user journey.',
    image: pharmacy,
    category: 'UI / UX',
    categoryStyle: 'purple',
    status: 'In Progress',
  },
  {
    title: 'Design System',
    description:
      'A visual foundation bringing consistency, hierarchy and reusable interface elements together.',
    image: designSystem,
    category: 'UI / UX',
    categoryStyle: 'purple',
    status: 'In Progress',
  },
  {
    title: 'Brand Identity & Logo Design',
    description:
      'Logo design and visual identity work focused on creating clear and consistent brand expressions.',
    image: graphic01,
    category: 'Graphic Design',
    categoryStyle: 'pink',
    href: '/projects/graphic-design',
  },
  {
    title: 'Business Card Design',
    description:
      'Professional business card designs combining brand identity, hierarchy and clear visual communication.',
    image: graphic02,
    category: 'Graphic Design',
    categoryStyle: 'pink',
    href: '/projects/graphic-design-02',
  },
  {
    title: 'Flyer & Print Design',
    description:
      'Flyer and print designs created with a focus on composition, readability and visual impact.',
    image: graphic03,
    category: 'Graphic Design',
    categoryStyle: 'pink',
    href: '/projects/graphic-design-03',
  },
  {
    title: 'Social Media Design',
    description:
      'Social media visuals designed to communicate brand messages clearly across digital platforms.',
    image: graphic04,
    category: 'Graphic Design',
    categoryStyle: 'pink',
    href: '/projects/graphic-design-04',
  },
  {
    title: 'Visual Communication Design',
    description:
      'A selection of graphic design work created for different communication and branding needs.',
    image: graphic05,
    category: 'Graphic Design',
    categoryStyle: 'pink',
    href: '/projects/graphic-design-05',
  },
  {
    title: 'EV Charging App',
    description:
      'Manual testing and UX validation across the mobile charging experience.',
    image: qovoltis01,
    category: 'QA',
    categoryStyle: 'blue',
    href: '/work/ev-charging-app-qa',
  },
  {
    title: 'EV Charging Web Platform',
    description:
      'Manual testing, API testing and front-end integration validation.',
    image: evChargingWeb01,
    category: 'QA',
    categoryStyle: 'blue',
    href: '/work/ev-charging-web-qa',
  },
]

function getCategoryStyle(style: string) {
  if (style === 'pink') {
    return 'border-pink-200/30 bg-[#120C16]/80 text-pink-100'
  }

  if (style === 'blue') {
    return 'border-blue-200/30 bg-[#0B1018]/80 text-blue-100'
  }

  return 'border-violet-200/30 bg-[#100D1C]/80 text-violet-100'
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = projects.filter((project) => {
    // Hide Graphic Design projects in the All filter
    if (activeFilter === 'All') {
      return project.category !== 'Graphic Design'
    }

    if (activeFilter === 'UI/UX Design') {
      return project.category === 'UI / UX'
    }

    return project.category === activeFilter
  })

  const filters = ['All', 'UI/UX Design', 'Graphic Design', 'QA']

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-transparent px-6 py-2 text-white sm:py-3 lg:py-4"
    >
      {/* ANIMATED BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-purple-600/[0.08] blur-[120px]"
          style={{
            animation: 'portfolioFloatOne 14s ease-in-out infinite',
          }}
        />

        <div
          className="absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.07] blur-[140px]"
          style={{
            animation: 'portfolioFloatTwo 18s ease-in-out infinite',
          }}
        />

        <div
          className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full bg-indigo-500/[0.06] blur-[130px]"
          style={{
            animation: 'portfolioFloatThree 20s ease-in-out infinite',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.035),transparent_60%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-purple-400">
            Selected work
          </p>

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-[4rem]">
            Design, testing
            <br />
            <span className="text-white/30">and visual craft.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            A selection of digital product, visual design and quality
            experience work.
          </p>
        </div>

        {/* FILTERS */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`group relative overflow-hidden rounded-full border px-5 py-2.5 text-[12px] font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'border-violet-400/30 bg-violet-500/[0.12] text-white shadow-[0_8px_30px_rgba(124,92,255,0.12)]'
                    : 'border-white/[0.08] bg-white/[0.025] text-white/45 hover:border-white/[0.16] hover:bg-white/[0.055] hover:text-white/80'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.18),transparent_65%)]" />
                )}

                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative z-10">{filter}</span>
              </button>
            )
          })}
        </div>

        {/* GRAPHIC DESIGN COMING SOON */}
        {activeFilter === 'Graphic Design' ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-purple-400">
              Graphic Design
            </p>

            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Coming Soon
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
              A collection of visual identities, branding and graphic design
              projects is on its way.
            </p>

            <div className="mt-7 h-px w-16 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />
          </div>
        ) : (
          /* PROJECT GRID */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const isInProgress =
                'status' in project && project.status === 'In Progress'

              const cardContent = (
                <>
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#17171F]">
                    <div
                      className="absolute inset-0 scale-110 bg-cover bg-center opacity-30 blur-2xl transition duration-700 group-hover:opacity-45"
                      style={{
                        backgroundImage: `url(${project.image})`,
                      }}
                    />

                    <div className="absolute inset-0 bg-[#17171F]/40" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 transition duration-500 group-hover:opacity-50" />

                    {/* CATEGORY BADGE */}
                    <div className="absolute bottom-5 left-5 z-20">
                      <span
                        className={`inline-flex items-center rounded-full border px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] shadow-[0_6px_20px_rgba(0,0,0,0.35)] backdrop-blur-xl ${getCategoryStyle(
                          project.categoryStyle,
                        )}`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* HOVER ARROW */}
                    {!isInProgress && (
                      <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/70 opacity-0 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white group-hover:opacity-100">
                        <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/40">
                      {project.description}
                    </p>

                    {/* CTA / PROJECT STATUS */}
                    <div className="mt-6">
                      {isInProgress ? (
                        <div className="flex w-full items-center justify-center gap-2.5 rounded-full border border-amber-300/25 bg-amber-300/[0.08] px-5 py-3.5 text-[12px] font-semibold tracking-wide text-amber-200">
                          <span className="h-2 w-2 rounded-full bg-amber-300" />
                          In Progress
                        </div>
                      ) : (
                        <span className="group/button relative flex w-full items-center justify-center overflow-hidden rounded-full p-[1.5px]">
                          {/* ANIMATED COLORFUL STROKE */}
                          <span className="absolute inset-[-120%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_30deg,#6D63FF_65deg,#A855F7_95deg,#EC4899_125deg,#38BDF8_155deg,transparent_190deg,transparent_360deg)] opacity-100 blur-[1px]" />

                          {/* OUTER GLASS GLOW */}
                          <span className="absolute inset-0 rounded-full bg-white/[0.02] shadow-[0_0_25px_rgba(109,99,255,0.12)]" />

                          {/* GLASS SURFACE */}
                          <span className="relative flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-5 py-3.5 text-[13px] font-medium tracking-wide text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.30),inset_0_-1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 group-hover/button:border-white/35 group-hover/button:bg-white/[0.17] group-hover/button:text-white group-hover/button:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_40px_rgba(109,99,255,0.20)]">
                            <span className="pointer-events-none absolute inset-x-0 top-0 h-[55%] rounded-full bg-gradient-to-b from-white/[0.05] via-white/[0.06] to-transparent" />

                            <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.20),transparent_40%)]" />

                            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-full bg-gradient-to-t from-purple-500/[0.06] to-transparent" />

                            <span className="relative z-10">View project</span>
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </>
              )

              return isInProgress ? (
                <div
                  key={`${project.title}-${index}`}
                  className="group relative block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
                >
                  {cardContent}
                </div>
              ) : (
                <a
                  key={`${project.title}-${index}`}
                  href={project.href}
                  className="group relative block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.2] hover:bg-white/[0.055]"
                >
                  {cardContent}
                </a>
              )
            })}
          </div>
        )}
      </div>

      {/* ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes portfolioFloatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(120px, 80px, 0) scale(1.15);
          }
        }

        @keyframes portfolioFloatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-100px, -80px, 0) scale(1.12);
          }
        }

        @keyframes portfolioFloatThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(80px, -100px, 0) scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-orb {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}