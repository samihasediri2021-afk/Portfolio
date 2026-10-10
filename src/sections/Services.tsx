const services = [
  {
    number: '01',
    title: 'UI / UX Design',
    description:
      'Designing clear and intuitive digital experiences, from user flows and wireframes to polished interfaces and prototypes.',
  },
  {
    number: '02',
    title: 'Graphic Design',
    description:
      'Creating visual assets, layouts and brand materials with a strong focus on composition, consistency and visual communication.',
  },
  {
    number: '03',
    title: 'QA & UX Testing',
    description:
      'Testing digital products to identify functional, visual and usability issues, while helping teams deliver a more polished experience.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-transparent px-3 py-8 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            What I do
          </p>

          <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Design with intention.
            <br />
            <span className="text-white/100">
              Quality with precision.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05]"
            >
              <span className="text-sm text-white/30">
                {service.number}
              </span>

              <h3 className="mt-9 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                {service.description}
              </p>

              <div className="mt-7 h-px w-10 bg-purple-400 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}