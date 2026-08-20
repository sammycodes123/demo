import { Library, Presentation, Building2, Dumbbell } from "lucide-react"
import Reveal from "../components/Reveal"

const highlights = [
  { icon: Library, name: "Library" },
  { icon: Presentation, name: "Lecture halls" },
  { icon: Building2, name: "Student centre" },
  { icon: Dumbbell, name: "Sports facilities" },
]

function VirtualTour() {
  return (
    <div>
      <Reveal>
        <div className="h-[85vh] w-full">
          <iframe
            title="Nile University virtual campus tour"
            src="https://tours.dobiison.com/CampusVisit/NileUniversity/index.html"
            className="h-full w-full border-0"
            allow="accelerometer; gyroscope; xr-spatial-tracking"
            allowFullScreen
          />
        </div>
      </Reveal>

      <div className="bg-gray-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-6 text-xl font-bold text-navy">Explore campus highlights</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <button className="group flex w-full flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-navy transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" strokeWidth={2} />
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
