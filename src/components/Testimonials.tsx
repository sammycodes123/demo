import Reveal from "./Reveal"

const testimonials = [
  {
    name: "Amara Chukwu",
    quote:
      "Nile University gave me the confidence and network to launch my career straight out of school, with faculty who genuinely invest in your growth.",
    meta: "Class of 2022 · Computer Engineering",
  },
  {
    name: "David Okafor",
    quote:
      "The postgraduate research support at Nile University is unmatched, and the mentorship pushed me to publish two papers before I even graduated.",
    meta: "Class of 2021 · M.Sc. Public Health",
  },
  {
    name: "Zainab Bello",
    quote:
      "From student clubs to internships, Nile pushed me out of my comfort zone in the best way, and I made lifelong friends along the journey.",
    meta: "Class of 2023 · Business Administration",
  },
]

function Testimonials() {
  return (
    <section className="bg-sand px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-4 text-[40px] font-bold leading-tight text-navy">
            Alumni testimonials
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.meta} delay={i * 100} className="h-full">
              <div className="h-full rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-2 text-4xl text-gold-light">"</div>
                <p className="mb-5 text-lg leading-relaxed text-gray-600">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <img
                    src="/UTME-Screening-is-now-open-scaled.avif"
                    alt=""
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-base font-semibold text-navy">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.meta}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
