import { Briefcase, GraduationCap, Landmark, Globe2 } from "lucide-react"
import Reveal from "./Reveal"

const points = [
  {
    icon: GraduationCap,
    title: "World-class faculty",
    description:
      "Learn from experienced academics and industry practitioners who invest in your growth.",
  },
  {
    icon: Landmark,
    title: "Modern campus facilities",
    description:
      "State-of-the-art labs, libraries, and residence halls built for modern student life.",
  },
  {
    icon: Globe2,
    title: "Global partnerships",
    description:
      "Exchange programs and collaborations with universities worldwide broaden your perspective.",
  },
  {
    icon: Briefcase,
    title: "Career-focused curriculum",
    description:
      "Internships and industry projects built into every program to launch your career.",
  },
]

function Usp() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-8 text-[40px] font-bold leading-tight text-navy">
            Why choose Nile University?
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <div className="group rounded-lg border border-gray-100 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sand text-navy transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <point.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h4 className="mb-3 text-2xl font-bold text-navy">
                  {point.title}
                </h4>
                <p className="text-base leading-relaxed text-gray-500">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Usp
