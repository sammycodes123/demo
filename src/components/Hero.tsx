import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const slides = [
  {
    image: "/sfjigh8hgngjg.avif",
    eyebrow: "Admissions open for the 2026/2027 academic year",
    title: "Shape your future at Nile University",
    description:
      "A leading center of academic excellence, research and innovation, preparing graduates to lead in a changing world.",
    cta: { label: "Apply Now", href: "#" },
  },
  {
    image: "/NUN02329-scaled.avif",
    eyebrow: "Home to eight faculties and 80+ programs",
    title: "Find the right program for you",
    description:
      "Explore undergraduate and postgraduate degrees across engineering, business, sciences, and the humanities.",
    cta: { label: "Explore Programs", to: "/undergraduate" },
  },
  {
    image: "/DSC08719-1.avif",
    eyebrow: "See Nile before you apply",
    title: "Take a virtual tour of our campus",
    description:
      "Explore our facilities, faculties, and campus life from anywhere in the world, before you visit in person.",
    cta: { label: "Take the Virtual Tour", to: "/virtual-tour" },
  },
  {
    image: "/l3.jpeg",
    eyebrow: "Questions before you apply?",
    title: "Let's help you get started",
    description:
      "Our admissions team is ready to walk you through programs, requirements, and next steps.",
    cta: { label: "Contact Admissions", to: "/contact" },
  },
]

function Hero() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)
  const slide = slides[active]

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [active])

  return (
    <section className="relative flex h-[480px] items-center overflow-hidden bg-navy px-8 md:h-[560px] md:px-16">
      <img
        key={slide.image}
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-black/66" />

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy shadow transition-transform duration-200 hover:scale-110 hover:bg-white md:left-8 md:h-14 md:w-14"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 md:h-7 md:w-7">
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
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy shadow transition-transform duration-200 hover:scale-110 hover:bg-white md:right-8 md:h-14 md:w-14"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 md:h-7 md:w-7">
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        key={slide.title}
        className="relative z-10 max-w-xl pl-12 text-left text-white animate-fade-in-up md:pl-10"
      >
        <p className="mb-3 text-lg text-gold-light">{slide.eyebrow}</p>
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
          {slide.title}
        </h1>
        <p className="mb-6 text-base leading-relaxed text-gray-200 md:text-lg">
          {slide.description}
        </p>
        {slide.cta.to ? (
          <Link
            to={slide.cta.to}
            className="inline-block rounded bg-gold px-6 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-gold-light"
          >
            {slide.cta.label}
          </Link>
        ) : (
          <a
            href={slide.cta.href}
            className="inline-block rounded bg-gold px-6 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-gold-light"
          >
            {slide.cta.label}
          </a>
        )}
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.image}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === active ? "bg-gold-light" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
