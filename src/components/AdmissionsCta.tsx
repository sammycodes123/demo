import Reveal from "./Reveal"

function AdmissionsCta() {
  return (
    <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden px-6 py-20 text-center md:px-10">
      <img
        src="/kdqcmr9vp8hfuf.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/66" />

      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <p className="mb-3 text-base uppercase tracking-wide text-gold-light">
          Admissions open for the 2026/2027 academic year
        </p>
        <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
          Ready to begin your journey at Nile University?
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-200">
          Join a community of over 13,000 students across eight faculties, and take the next
          step toward a degree built for real-world readiness.
        </p>
        <a
          href="#"
          className="inline-block rounded bg-gold px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-gold-light"
        >
          Apply Now
        </a>
      </Reveal>
    </section>
  )
}

export default AdmissionsCta
