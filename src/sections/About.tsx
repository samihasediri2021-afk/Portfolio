export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B0B0F] px-6 py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.55fr_1.45fr] md:gap-16 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          {/* Left side */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-purple-400">
              About me
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              A creative path
              <br />
              <span className="text-white/30">
                across disciplines.
              </span>
            </h2>
          </div>

          {/* Right side */}
          <div>
            <p className="max-w-3xl text-xl leading-9 text-white/75 sm:text-2xl">
              My journey started outside the tech world, and gradually
              brought me from business and logistics into design, product
              quality and now web development.
            </p>

            <p className="mt-7 max-w-3xl leading-8 text-white/40">
              I studied International Business and Logistics before
              discovering the creative side of digital work through Graphic
              Design and Video Editing.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/40">
              I then moved into UI/UX Design, where I focused on creating
              clear, intuitive and thoughtful digital experiences. More
              recently, I entered the world of QA and UX Testing, learning
              to look beyond the interface and understand how a product
              actually works.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/40">
              Today, I am also exploring Web Development with the help of
              AI, learning how to turn ideas and designs into working
              digital products.
            </p>

            {/* Journey */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
                My journey
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-purple-400/20">
                  <span className="text-[10px] font-medium text-purple-400">
                    01
                  </span>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    Business & Logistics
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    International Business & Logistics
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-purple-400/20">
                  <span className="text-[10px] font-medium text-purple-400">
                    02
                  </span>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    Graphic Design
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Graphic Design & Video Editing
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-purple-400/20">
                  <span className="text-[10px] font-medium text-purple-400">
                    03
                  </span>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    UI / UX Design
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Digital interfaces & experiences
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-purple-400/20">
                  <span className="text-[10px] font-medium text-purple-400">
                    04
                  </span>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    QA & UX Testing
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Manual testing & product validation
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-400/20 bg-purple-400/[0.035] p-5 transition duration-300 hover:border-purple-400/30 sm:col-span-2">
                  <span className="text-[10px] font-medium text-purple-400">
                    05
                  </span>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    AI-Assisted Web Development
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Currently exploring how to build and bring digital
                    products to life with the help of AI.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-sm text-white/30">Focus</p>
                <p className="mt-2 font-medium">
                  UI / UX · Graphic Design
                </p>
              </div>

              <div>
                <p className="text-sm text-white/30">Quality</p>
                <p className="mt-2 font-medium">
                  QA · UX Testing
                </p>
              </div>

              <div>
                <p className="text-sm text-white/30">Tools</p>
                <p className="mt-2 font-medium">
  Photoshop · Illustrator · InDesign · After Effects · Figma · Canva · Jira · Swagger · Postman
</p>
              </div>

              <div>
                <p className="text-sm text-white/30">
                  Available for
                </p>
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