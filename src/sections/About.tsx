const tools = [
  'Figma',
  'Photoshop',
  'Illustrator',
  'InDesign',
  'After Effects',
  'Canva',
  'Jira',
  'Postman',
  'Swagger',
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent px-6 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION LABEL */}
        <div className="mb-14 border-t border-white/10 pt-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            About me
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.35fr_0.85fr] lg:gap-14">

          {/* TITLE */}
          <div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              A designer who cares about
              <span className="text-white/40"> how things feel.</span>
            </h2>
          </div>

          {/* STORY */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-white/70">
              My background brings together business, design and quality
              assurance — three perspectives that shape the way I approach
              digital products.
            </p>

            <p className="mt-6 text-base leading-7 text-white/45">
              I started with International Business &amp; Logistics before
              moving into graphic design and video editing. I then developed
              my skills in UI/UX design, working on digital products from
              early ideas and user flows to polished interfaces and
              prototypes.
            </p>

            <p className="mt-6 text-base leading-7 text-white/45">
              More recently, I worked in QA, testing digital products across
              mobile, web and integration environments. This experience taught
              me to look beyond the interface and pay attention to the details
              that make a product feel reliable and complete.
            </p>
          </div>

          {/* FOCUS */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              Focus
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-white">
                  UI / UX Design
                </p>
                <p className="mt-1 text-sm leading-6 text-white/45">
                  Interfaces, flows &amp; prototypes
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Graphic Design
                </p>
                <p className="mt-1 text-sm leading-6 text-white/45">
                  Visual communication &amp; branding
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  QA &amp; UX Testing
                </p>
                <p className="mt-1 text-sm leading-6 text-white/45">
                  Quality, usability &amp; details
                </p>
              </div>
            </div>

            <div className="mt-10 h-px w-10 bg-purple-400/70" />
          </div>
        </div>

        {/* TOOLS */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
            Tools &amp; technologies
          </p>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/65 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-purple-400/10 hover:text-white"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}