export default function About() {
  return (
    <section id="about" className="bg-[#0B0B0F] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              About me
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              I design with
              <br />
              <span className="text-white/40">
                the whole product in mind.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-white/70">
              I'm a UI/UX and graphic designer with a strong eye for detail
              and a background in quality assurance.
            </p>

            <p className="mt-6 leading-8 text-white/40">
              I enjoy turning complex ideas into clear and intuitive
              experiences. My QA background also helps me look beyond the
              visuals — checking usability, consistency and the details that
              make a product feel polished.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-sm text-white/30">Focus</p>
                <p className="mt-2 font-medium">
                  UI / UX · Graphic Design
                </p>
              </div>

              <div>
                <p className="text-sm text-white/30">Tools</p>
                <p className="mt-2 font-medium">
                  Figma · Adobe CC
                </p>
              </div>

              <div>
                <p className="text-sm text-white/30">Mindset</p>
                <p className="mt-2 font-medium">
                  Creative · Detail-oriented
                </p>
              </div>

              <div>
                <p className="text-sm text-white/30">Available for</p>
                <p className="mt-2 font-medium">
                  Freelance · Remote
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}