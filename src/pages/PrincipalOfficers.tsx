import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"

const vc = {
  image: "/Principal%20Officers/vc.avif",
  name: "Prof. Dilli Dogo, FNAMed",
  title: "Vice-Chancellor",
}

const officers = [
  {
    image: "/Principal%20Officers/dvca.avif",
    name: "Prof. Saleh Abdullahi",
    title: "Deputy Vice-Chancellor (Academics)",
  },
  {
    image: "/Principal%20Officers/dvc.avif",
    name: "Prof. A. Prema Kirubakaran",
    title: "Deputy Vice-Chancellor (Central Admin)",
  },
  {
    image: "/Principal%20Officers/reg.jpg",
    name: "Dr. Modupe Fausat Aleshinloye",
    title: "Ag. Registrar",
  },
  {
    image: "/Principal%20Officers/lib.avif",
    name: "Prof. Christopher Nkiko",
    title: "University Librarian",
  },
]

function PrincipalOfficers() {
  return (
    <div>
      <div className="relative flex min-h-[420px] items-center overflow-hidden bg-navy py-14 md:min-h-[480px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="mb-3 text-sm text-gray-300">
              <Link to="/" className="hover:text-gold-light">
                Home
              </Link>{" "}
              <span className="mx-1">›</span> About Nile <span className="mx-1">›</span>{" "}
              Principal Officers
            </p>
            <h1 className="text-[55px] not-italic font-extrabold leading-[60px] text-white">
              Principal Officers
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal>
          <div className="mx-auto mb-16 flex max-w-sm flex-col items-center text-center">
            <img
              src={vc.image}
              alt={vc.name}
              className="mb-5 h-96 w-80 rounded-lg object-cover shadow-md"
            />
            <h2 className="text-2xl font-bold text-navy">{vc.name}</h2>
            <p className="text-base text-gray-500">{vc.title}</p>
          </div>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((officer, i) => (
            <Reveal key={officer.name} delay={i * 80}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="mb-4 h-72 w-56 rounded-lg object-cover shadow-md"
                />
                <h3 className="text-lg font-bold text-navy">{officer.name}</h3>
                <p className="text-sm text-gray-500">{officer.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PrincipalOfficers
