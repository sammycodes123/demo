import { Link } from "react-router-dom"
import Reveal from "./Reveal"

const programs = [
  {
    image: "/DSC00304-scaled.avif",
    title: "Undergraduate",
    description:
      "Full-time bachelor's degrees across engineering, business, sciences, and the humanities, built for real-world readiness.",
    to: "/undergraduate",
  },
  {
    image: "/kdqcmr9vp8hfuf.jpg",
    title: "Postgraduate",
    description:
      "Master's and doctoral programs for professionals and researchers looking to deepen their expertise and impact.",
    to: "/postgraduate",
  },
  {
    image: "/UTME-Screening-is-now-open-scaled.avif",
    title: "School of Preliminary Studies",
    description:
      "A foundation year bridging secondary school and university, preparing students academically and personally.",
    to: null,
  },
]

function Programs() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-4 text-[40px] font-bold leading-tight text-navy">
            Degree programs
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="mb-3 text-2xl font-bold text-navy">
                    {program.title}
                  </h3>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-gray-500">
                    {program.description}
                  </p>
                  {program.to ? (
                    <Link
                      to={program.to}
                      className="inline-block self-start rounded border border-navy px-5 py-3 text-base font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                    >
                      Learn more
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="inline-block self-start rounded border border-navy px-5 py-3 text-base font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
