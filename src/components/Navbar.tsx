import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import logo from "../assets/nile-logo.svg"

type DropdownLink = { label: string; to: string | null }
type DropdownColumn = { heading: string; links: DropdownLink[] }
type Dropdown = { columns: DropdownColumn[] }
type NavLink = { label: string; to: string | null; dropdown?: Dropdown }

const aboutDropdown: Dropdown = {
  columns: [
    {
      heading: "Leadership & reports",
      links: [
        { label: "Vice Chancellor's Welcome Message", to: null },
        { label: "Organization Chart", to: null },
        { label: "Principal Officers", to: "/principal-officers" },
        { label: "Latest News & Events", to: null },
        { label: "Employability Report", to: null },
        { label: "Honoris Impact Report 2025", to: null },
      ],
    },
    {
      heading: "Community",
      links: [
        { label: "Honoris United Universities", to: null },
        { label: "Alumni", to: null },
        { label: "Nile Community", to: null },
        { label: "TEDx Nile University", to: null },
        { label: "Our Partners", to: null },
        { label: "Virtual Tour", to: "/virtual-tour" },
      ],
    },
  ],
}

const studyDropdown: Dropdown = {
  columns: [
    {
      heading: "Admissions & programs",
      links: [
        { label: "Screen Now (Undergraduate Screening Portal)", to: null },
        { label: "Apply Now (Postgraduate)", to: null },
        { label: "Undergraduate Courses", to: "/undergraduate" },
        { label: "Postgraduate Courses", to: "/postgraduate" },
        { label: "School of Preliminary Studies", to: null },
        { label: "Executive Master of Business Administration (EMBA)", to: null },
        { label: "Nile Consult & Services Ltd.", to: null },
        { label: "Nile Online", to: null },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Tuition Fees", to: null },
        { label: "Download Prospectus", to: null },
        { label: "Nile Welcome Booklet", to: null },
        { label: "Scholarships & Discounts", to: null },
        { label: "Academic Calendar", to: null },
        { label: "SIWES", to: null },
        { label: "Student Information System", to: null },
      ],
    },
  ],
}

const links: NavLink[] = [
  { label: "About Nile", to: null, dropdown: aboutDropdown },
  { label: "Study & admissions", to: null, dropdown: studyDropdown },
  { label: "Student life", to: null },
  { label: "Research", to: null },
  { label: "News & media", to: null },
  { label: "Contact us", to: "/contact" },
  { label: "Blog", to: "/blog" },
]

function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <header className="border-b border-gray-200" onMouseLeave={() => setOpenMenu(null)}>
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Link to="/">
          <img src={logo} alt="Nile University of Nigeria" className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-6 text-[20px] font-medium not-italic leading-[30px] text-gray-600 lg:flex">
          {links.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.dropdown ? link.label : null)}
            >
              {link.to ? (
                <Link
                  to={link.to}
                  className="relative flex items-center gap-1 py-1 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href="#"
                  className="relative flex items-center gap-1 py-1 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
              )}

              {link.dropdown && openMenu === link.label && (
                <div className="animate-fade-in-up absolute left-0 top-full z-50 pt-4">
                  <div className="flex divide-x divide-gray-200 whitespace-nowrap border border-gray-100 bg-white shadow-xl">
                    {link.dropdown.columns.map((col) => (
                      <div key={col.heading} className="px-8 py-8">
                        <h3 className="mb-4 text-base font-bold text-navy">{col.heading}</h3>
                        <ul className="space-y-5">
                          {col.links.map((item) => (
                            <li key={item.label}>
                              {item.to ? (
                                <Link
                                  to={item.to}
                                  className="not-italic font-normal text-[16px] leading-[28px] text-[#333435] hover:text-navy"
                                >
                                  {item.label}
                                </Link>
                              ) : (
                                <a
                                  href="#"
                                  className="not-italic font-normal text-[16px] leading-[28px] text-[#333435] hover:text-navy"
                                >
                                  {item.label}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#"
          className="rounded bg-navy px-5 py-2.5 text-base font-medium text-white transition-all hover:scale-105 hover:bg-navy-light"
        >
          Apply now
        </a>
      </div>
    </header>
  )
}

export default Navbar
