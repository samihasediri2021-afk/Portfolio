import qovoltis01 from '../assets/qovoltis-01.png'

const projects = [
  {
    number: '01',
    category: 'APP REDESIGN · UI/UX · QA',
    title: 'EV Charging App',
    description:
      'Redesign of an existing electric vehicle charging application, combining interface design, user experience and manual QA.',
    image: qovoltis01,
    href: '/work/ev-charging-app',
  },
  {
    number: '02',
    category: 'PLATFORM · UI/UX',
    title: 'Real Estate Platform',
    description:
      'UI/UX design for a digital platform created to present and promote real estate properties.',
    image: null,
    href: '/work/real-estate-platform',
  },
  {
    number: '03',
    category: 'ERP · UI/UX',
    title: 'ERP Platform',
    description:
      'UI/UX design for a business platform focused on structured workflows, information and professional activities.',
    image: null,
    href: '/work/erp-platform',
  },
  {
    number: '04',
    category: 'SERVICES · UI/UX',
    title: 'Personal Services Platform',
    description:
      'UI/UX design for a digital platform dedicated to discovering and presenting personal services.',
    image: null,
    href: '/work/personal-services-platform',
  },
]

export default function Portfolio() {
  return (
    <section
      id="work"
      className="bg-[#0B0B0F] px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-purple-400">
            Selected work
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl md:text-[3.5rem]">
            Digital products,
            <br />
            <span className="text-white/35">
              thoughtfully designed.
            </span>
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* PROJECT VISUAL */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111116]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <span className="text-7xl font-semibold tracking-tight text-white/[0.06]">
                        {project.number}
                      </span>

                      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/20">
                        Case study
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/50 backdrop-blur-md">
                  {project.number}
                </span>

                <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-lg text-white backdrop-blur-md transition duration-500 group-hover:translate-x-1 group-hover:bg-purple-500">
                  ↗
                </span>
              </div>

              {/* PROJECT INFO */}
              <div className="p-7 sm:p-8">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-purple-300">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-white/60 transition group-hover:text-white">
                  View case study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-white/30">
            More work can be shared on request.
          </p>
        </div>
      </div>
    </section>
  )
}