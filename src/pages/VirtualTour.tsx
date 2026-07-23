import PageHero from "../components/PageHero"
import Reveal from "../components/Reveal"

const highlights = [
  { icon: "📚", name: "Library" },
  { icon: "🏫", name: "Lecture halls" },
  { icon: "🏢", name: "Student centre" },
  { icon: "🏀", name: "Sports facilities" },
]

function VirtualTour() {
  return (
    <div>
      <PageHero
        crumb="Virtual Tour"
        title="Virtual Tour"
        description="Explore the Nile University campus from anywhere in the world. Take a 360° tour of our facilities, faculties, and campus life."
      />

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <Reveal>
          <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-gray-600">
            Our 113-hectare campus sits at Plot 681, Cadastral Zone C-OO, Jabi Airport Bypass,
            Abuja, and is home to eight faculties and a School of Postgraduate Studies. Use the
            interactive tour below to explore key locations across campus before you visit in
            person.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex h-[420px] flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 text-gray-400 md:h-[520px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-3xl">
              🌐
            </div>
            <p className="text-lg font-semibold text-gray-500">[ Virtual Tour Embed ]</p>
            <p className="text-base">360° interactive campus tour goes here</p>
          </div>
        </Reveal>
      </div>

      <div className="bg-gray-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-6 text-xl font-bold text-navy">Explore campus highlights</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <button className="group flex w-full flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-2xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-400">Click to explore</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <section className="flex flex-col items-start gap-6 bg-navy px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
        <Reveal>
          <div>
            <h2 className="mb-2 text-3xl font-bold text-white">Ready to join us?</h2>
            <p className="text-base text-gray-300">
              Applications for the 2026/2027 academic year are open now.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <a
            href="#"
            className="inline-block rounded bg-white px-6 py-3 text-base font-medium text-navy transition-all hover:scale-105"
          >
            Apply now
          </a>
        </Reveal>
      </section>
    </div>
  )
}

export default VirtualTour
