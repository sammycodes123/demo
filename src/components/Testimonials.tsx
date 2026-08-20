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
  // Placeholder — swap in a real quote/name before launch
  {
    name: "Chidi Umeh",
    quote:
      "Moot court and the legal clinic gave me real courtroom experience before graduation, something I didn't expect from an undergraduate programme.",
    meta: "Class of 2020 · Law",
  },
  // Placeholder — swap in a real quote/name before launch
  {
    name: "Grace Adeyemi",
    quote:
      "The campus studio and newsroom facilities meant I was producing real work from year one, not just studying theory from a textbook.",
    meta: "Class of 2024 · Mass Communication",
  },
]

const marqueeItems = [...testimonials, ...testimonials]

function Testimonials() {
  return (
    <section className="bg-sand px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-3 text-[48px] font-semibold not-italic leading-[48px] text-navy">
              Alumni testimonials
            </h2>
            <p className="text-[16px] font-normal not-italic leading-[28.8px] text-gray-500">
              Hear directly from graduates about their experience at Nile University.
            </p>
          </div>
        </Reveal>

        <div className="group overflow-hidden">
          <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
            {marqueeItems.map((t, i) => (
              <div
                key={`${t.meta}-${i}`}
                className="w-[320px] shrink-0 rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[360px]"
              >
                <div className="mb-2 text-4xl text-gold-light">"</div>
                <p className="mb-5 text-lg leading-relaxed text-gray-600">{t.quote}</p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
