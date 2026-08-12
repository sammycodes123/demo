import { useRef } from "react"
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
  {
    image: "/campus-audience.jpg",
    title: "Nile Business School",
    description:
      "Executive and specialized business education for professionals and entrepreneurs, blending industry practice with academic rigor.",
    to: null,
  },
]

function Programs() {
  const trackRef = useRef<HTMLDivElement>(null)

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    const gap = 32
    const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth
    track.scrollBy({ left: direction * step, behavior: "smooth" })
  }

  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-[48px] font-semibold not-italic leading-[48px] text-navy">
              Degree programs
            </h2>
            <div className="hidden shrink-0 gap-3 sm:flex">
              <button
                onClick={() => slide(-1)}
                aria-label="Previous programs"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M15 5l-7 7 7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => slide(1)}
                aria-label="Next programs"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {programs.map((program, i) => (
            <Reveal
              key={program.title}
              delay={i * 100}
              className="w-full shrink-0 snap-start sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
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
