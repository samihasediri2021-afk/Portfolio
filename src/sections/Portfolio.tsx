import { useEffect, useRef, useState } from 'react'
import qovoltis01 from '../assets/qovoltis-01.png'
import realEstate01 from '../assets/real-estate-01.png'
import erp01 from '../assets/erp-01.png'
import personalServices01 from '../assets/personal-services-01.png'
import evChargingWeb01 from '../assets/evChargingWeb01.png'
import designSystem from '../assets/design-system.png'
import graphic01 from '../assets/graphic-01.png'
import graphic02 from '../assets/graphic-02.png'
import graphic03 from '../assets/graphic-03.png'
import graphic04 from '../assets/graphic-04.png'
import graphic05 from '../assets/graphic-05.png'

const categories = [
  {
    number: '01',
    label: 'UI / UX DESIGN',
    title: 'Digital products,\nthoughtfully designed.',
    description:
      'Interfaces and digital experiences designed with a focus on clarity, structure, usability and visual detail.',
    projects: [
      { title: 'EV Charging App', image: qovoltis01 },
      { title: 'Real Estate Platform', image: realEstate01 },
      { title: 'ERP Platform', image: erp01 },
      { title: 'Personal Services Platform', image: personalServices01 },
      { title: 'EV Charging Web Platform', image: evChargingWeb01 },
      { title: 'Design System', image: designSystem },
    ],
  },
  {
    number: '02',
    label: 'GRAPHIC DESIGN',
    title: 'Visuals with\npurpose.',
    description:
      'Visual design work covering brand identity, visual guidelines, logo design, social media content, video editing, labels, flyers and other marketing materials.',
    projects: [
      { title: 'Graphic Design', image: graphic01 },
      { title: 'Graphic Design', image: graphic02 },
      { title: 'Graphic Design', image: graphic03 },
      { title: 'Graphic Design', image: graphic04 },
      { title: 'Graphic Design', image: graphic05 },
    ],
  },
  {
    number: '03',
    label: 'QA & UX TESTING',
    title: 'From interface\nto integration.',
    description:
      'Manual testing across mobile and web environments, including API testing with Swagger, front-end integration validation and UX testing.',
    projects: [
      { title: 'EV Charging App', image: qovoltis01 },
      { title: 'EV Charging Web Platform', image: evChargingWeb01 },
    ],
  },
]

function ProjectGallery({
  projects,
}: {
  projects: { title: string; image: string }[]
}) {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    if (!galleryRef.current || projects.length === 0) return

    const safeIndex = (index + projects.length) % projects.length

    galleryRef.current.scrollTo({
      left: galleryRef.current.clientWidth * safeIndex,
      behavior: 'smooth',
    })

    setActiveIndex(safeIndex)
  }

  const scrollGallery = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      scrollToIndex(activeIndex + 1)
    } else {
      scrollToIndex(activeIndex - 1)
    }
  }

  useEffect(() => {
    if (projects.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % projects.length

        if (galleryRef.current) {
          galleryRef.current.scrollTo({
            left: galleryRef.current.clientWidth * nextIndex,
            behavior: 'smooth',
          })
        }

        return nextIndex
      })
    }, 3500)

    return () => clearInterval(interval)
  }, [projects.length])

  const handleScroll = () => {
    if (!galleryRef.current) return

    const width = galleryRef.current.clientWidth

    if (width === 0) return

    const index = Math.round(
      galleryRef.current.scrollLeft / width,
    )

    setActiveIndex(
      Math.max(0, Math.min(index, projects.length - 1)),
    )
  }

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-[#101014] lg:min-h-[460px]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

      <div
        ref={galleryRef}
        onScroll={handleScroll}
        className="scrollbar-none flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
        style={{
          scrollbarWidth: 'none',
          scrollBehavior: 'smooth',
        }}
      >
        {projects.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="group/project relative h-full min-h-[360px] w-full flex-none snap-center overflow-hidden lg:min-h-[460px]"
          >
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover object-center transition duration-1000 ease-out group-hover/project:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-[10px] font-medium text-white/70 backdrop-blur-xl">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-purple-300">
                Selected work
              </p>

              <h4 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                {project.title}
              </h4>
            </div>
          </article>
        ))}
      </div>

      {projects.length > 1 && (
        <div className="absolute right-6 top-6 flex gap-2">
          <button
            type="button"
            onClick={() => scrollGallery('left')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label="Previous project"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollGallery('right')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      )}

      {projects.length > 1 && (
        <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-2.5 backdrop-blur-xl">
          <div className="flex gap-1.5">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? 'w-6 bg-purple-400'
                    : 'w-1.5 bg-white/25'
                }`}
              />
            ))}
          </div>

          <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">
            {activeIndex + 1} / {projects.length}
          </span>
        </div>
      )}
    </div>
  )
}

export default function Portfolio() {
  return (
    <section
      id="work"
      className="bg-[#0B0B0F] px-6 py-12 text-white sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-purple-400">
            Selected work
          </p>

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-[4rem]">
            Design, testing
            <br />
            <span className="text-white/30">
              and visual craft.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            A selection of digital product, visual design and quality
            experience work.
          </p>
        </div>

        <div className="space-y-7">
          {categories.map((category) => (
            <article
              key={category.number}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:border-white/[0.18]"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium tracking-[0.2em] text-white/30">
                        {category.number}
                      </span>

                      <span className="rounded-full border border-purple-400/20 bg-purple-400/[0.06] px-3 py-1.5 text-[10px] font-medium tracking-[0.16em] text-purple-300">
                        {category.label}
                      </span>
                    </div>

                    <h3 className="mt-12 whitespace-pre-line text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl">
                      {category.title}
                    </h3>

                    <p className="mt-6 max-w-md text-sm leading-7 text-white/40 sm:text-base">
                      {category.description}
                    </p>
                  </div>

                  {category.projects.length > 0 && (
                    <div className="mt-10">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-purple-400/60" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                          {category.projects.length} projects
                        </span>
                      </div>

                      {category.number === '03' && (
                        <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/20">
                          Mobile · Web · API · Integration
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <ProjectGallery projects={category.projects} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}