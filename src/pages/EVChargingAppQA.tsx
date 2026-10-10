
import { Link } from 'react-router-dom'

export default function EVChargingAppQA() {
  const testingAreas = [
    {
      number: '01',
      title: 'Mobile App Testing',
      description:
        'Performed manual functional testing of the EV charging mobile application, verifying core features, user flows, and expected behavior.',
    },
    {
      number: '02',
      title: 'Functional Testing',
      description:
        'Checked key user journeys and application responses to identify unexpected behavior and inconsistencies.',
    },
    {
      number: '03',
      title: 'UI & UX Validation',
      description:
        'Validated interface consistency, screen layouts, navigation, and user interactions across the application.',
    },
    {
      number: '04',
      title: 'Bug Reporting',
      description:
        'Documented identified issues with clear reproduction steps and expected versus actual results to support the development team.',
    },
    {
      number: '05',
      title: 'Regression Testing',
      description:
        'Re-tested relevant features after fixes to verify corrections and check for potential regressions.',
    },
    {
      number: '06',
      title: 'Quality Assurance Workflow',
      description:
        'Followed a structured testing approach covering test execution, issue tracking, verification, and quality validation.',
    },
  ]

  const workflow = [
    {
      number: '01',
      title: 'Understand',
      description:
        'Review requirements and expected application behavior.',
    },
    {
      number: '02',
      title: 'Test',
      description:
        'Execute test scenarios across relevant mobile user flows.',
    },
    {
      number: '03',
      title: 'Report',
      description:
        'Document defects and provide clear reproduction steps.',
    },
    {
      number: '04',
      title: 'Verify',
      description:
        'Re-test fixes and validate the expected behavior.',
    },
  ]

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
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-10">

        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
            Quality Assurance · Mobile Testing
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            EV Charging App
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Quality assurance and functional testing for a mobile application
            designed to support electric vehicle charging journeys.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
              Mobile QA
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
              Functional Testing
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
              UI/UX Validation
            </span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ensuring a reliable charging experience
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              The project involved quality assurance activities for an
              electric vehicle charging mobile application. The objective was
              to verify that key features worked as expected and that users
              could navigate the application consistently.
            </p>

            <p>
              Testing focused on functional behavior, user interactions,
              interface consistency, and the verification of reported issues.
              The work supported the identification of defects and helped
              improve the overall reliability of the application.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Areas */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Testing Scope
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Areas of testing
          </h2>

          <p className="mt-4 leading-7 text-white/60">
            A structured approach to validating mobile application behavior,
            usability, and quality.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testingAreas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]"
            >
              <span className="text-sm font-medium text-violet-300">
                {area.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Testing Workflow */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10 lg:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Methodology
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            From test execution to verification
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <div key={step.number}>
                <span className="text-sm text-violet-300">
                  {step.number}
                </span>

                <h3 className="mt-3 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="max-w-3xl border-l-2 border-violet-400/50 pl-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Confidentiality
          </p>

          <h2 className="mt-4 text-2xl font-semibold">
            Respecting project confidentiality
          </h2>

          <p className="mt-4 leading-8 text-white/60">
            Certain project details and internal materials remain confidential.
            This case study therefore focuses on the testing approach and
            responsibilities without disclosing sensitive information.
          </p>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-medium text-white/70 transition hover:text-violet-300"
          >
            <span aria-hidden="true">←</span>
            Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}
