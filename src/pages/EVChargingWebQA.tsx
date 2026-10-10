import { Link } from 'react-router-dom'

export default function EVChargingWebQA() {
  const testingAreas = [
    {
      number: '01',
      title: 'Web Platform Testing',
      description:
        'Performed manual functional testing of web features and user workflows, checking expected behavior, interface consistency, and displayed information.',
    },
    {
      number: '02',
      title: 'Back-Office Testing',
      description:
        'Tested administrative functionalities and workflows, verifying business rules, data accuracy, and expected system behavior.',
    },
    {
      number: '03',
      title: 'API Testing with Swagger',
      description:
        'Tested API endpoints by verifying requests, parameters, HTTP status codes, JSON responses, and returned data against expected results.',
    },
    {
      number: '04',
      title: 'Front-End Integration',
      description:
        'Verified how API responses were handled and displayed by the front end, investigated inconsistencies, and checked integrated features.',
    },
  ]

  const workflow = [
    {
      number: '1',
      title: 'Understand expected behavior',
      description:
        'Reviewed requirements and expected results before executing relevant test scenarios.',
    },
    {
      number: '2',
      title: 'Execute and validate tests',
      description:
        'Tested web workflows, back-office features, API requests, responses, and front-end integration.',
    },
    {
      number: '3',
      title: 'Report and verify defects',
      description:
        'Documented unexpected behavior, tracked issues, and re-tested fixes when available.',
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
            Quality Assurance · API Testing
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            EV Charging Web Platform
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Quality assurance for an electric vehicle charging platform,
            covering web interfaces, back-office functionalities, API
            behavior, and front-end integration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'Manual QA',
              'Back-Office Testing',
              'API Testing',
              'Integration Testing',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Project information */}
        <div className="mt-16 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-3">
          <div>
            <p className="text-sm text-white/45">Role</p>
            <p className="mt-2 font-medium text-white/90">QA Engineer</p>
          </div>

          <div>
            <p className="text-sm text-white/45">Testing Scope</p>
            <p className="mt-2 font-medium text-white/90">
              Web · Back-Office · APIs
            </p>
          </div>

          <div>
            <p className="text-sm text-white/45">Tools</p>
            <p className="mt-2 font-medium text-white/90">
              Swagger · Jira · Postman · Browser DevTools
            </p>
          </div>
        </div>

        {/* Overview */}
        <section className="mt-16 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            01 — Overview
          </p>

          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Quality beyond the interface
          </h2>

          <p className="mt-5 leading-8 text-white/65">
            My QA work covered several layers of the platform, from
            user-facing web features to back-office workflows and API
            behavior. The goal was to verify expected functionality,
            identify inconsistencies, and help ensure reliable communication
            between the interface and the back end.
          </p>
        </section>

        {/* Testing scope */}
        <section className="mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            02 — Testing Scope
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {testingAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-violet-400/30 sm:p-8"
              >
                <span className="text-sm text-violet-300">
                  {area.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mt-16 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            03 — Approach
          </p>

          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            A structured testing workflow
          </h2>

          <div className="mt-8 space-y-6">
            {workflow.map((step) => (
              <div key={step.number} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/30 text-sm text-violet-300">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-medium">{step.title}</h3>

                  <p className="mt-2 leading-7 text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contribution */}
        <section className="mt-16 rounded-3xl border border-violet-300/15 bg-violet-400/[0.06] p-7 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            04 — Contribution
          </p>

          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Improving platform reliability
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/65">
            Through functional, back-office, API, and integration testing,
            I contributed to identifying defects, investigating unexpected
            behavior, and validating consistency across the platform's
            different layers.
          </p>
        </section>

        {/* Confidentiality */}
        <p className="mt-10 text-sm leading-6 text-white/40">
          Due to confidentiality requirements, internal back-office screens,
          API endpoints, and sensitive project data are not displayed.
        </p>

        {/* Back to portfolio */}
        <div className="mt-12">
          <Link
            to="/#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition hover:border-violet-400/40 hover:bg-white/[0.08] hover:text-white"
          >
            Back to portfolio
          </Link>
        </div>
      </section>
    </main>
  )
}