import { Link } from "react-router-dom"
import logo from "../assets/nile-logo.svg"

const links = [
  { label: "About Nile", to: null },
  { label: "Study & admissions", to: null },
  { label: "Student life", to: null },
  { label: "Research", to: null },
  { label: "News & media", to: null },
  { label: "Contact us", to: "/contact" },
]

function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 md:px-10">
      <Link to="/">
        <img src={logo} alt="Nile University of Nigeria" className="h-10 w-auto md:h-11" />
      </Link>

      <nav className="hidden items-center gap-6 text-[20px] font-medium not-italic leading-[30px] text-gray-600 lg:flex">
        {links.map((link) =>
          link.to ? (
            <Link
              key={link.label}
              to={link.to}
              className="relative py-1 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href="#"
              className="relative py-1 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          )
        )}
      </nav>

      <a
        href="#"
        className="rounded bg-navy px-5 py-2.5 text-base font-medium text-white transition-all hover:scale-105 hover:bg-navy-light"
      >
        Apply now
      </a>
    </header>
  )
}

export default Navbar
