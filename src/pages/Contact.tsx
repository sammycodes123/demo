import PageHero from "../components/PageHero"
import Reveal from "../components/Reveal"

const channels = [
  { icon: "📞", label: "Call us", value: "+234 209 623 2187" },
  { icon: "✉️", label: "Email us", value: "info@nileuniversity.edu.ng" },
  { icon: "📍", label: "Visit us", value: "Plot 681, Cadastral Zone C-OO, Abuja" },
]

const departments = [
  { name: "Admissions office", email: "admissions@nileuniversity.edu.ng" },
  { name: "Registry", email: "registry@nileuniversity.edu.ng" },
  { name: "Finance office", email: "finance@nileuniversity.edu.ng" },
  { name: "Student affairs", email: "studentaffairs@nileuniversity.edu.ng" },
  { name: "ICT support", email: "ict@nileuniversity.edu.ng" },
  { name: "Library", email: "library@nileuniversity.edu.ng" },
]

const socials = ["Facebook", "Instagram", "X", "LinkedIn"]

function Contact() {
  return (
    <div>
      <PageHero
        crumb="Contact us"
        title="Contact Us"
        description="We'd love to hear from you. Reach out to us through any of the channels below."
      />

      <div className="grid divide-y divide-navy-light/30 bg-navy text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {channels.map((channel) => (
          <div key={channel.label} className="flex items-center gap-4 px-6 py-6 md:px-10">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xl">
              {channel.icon}
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-300">{channel.label}</p>
              <p className="text-base font-semibold">{channel.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <h2 className="mb-2 text-xl font-bold text-navy">Send us a message</h2>
            <p className="mb-6 text-base text-gray-500">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm text-gray-600">First name</span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-base text-gray-700 outline-none focus:border-navy"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-gray-600">Last name</span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-base text-gray-700 outline-none focus:border-navy"
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm text-gray-600">Email address</span>
                  <input
                    type="email"
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-base text-gray-700 outline-none focus:border-navy"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-gray-600">Phone number</span>
                  <input
                    type="tel"
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-base text-gray-700 outline-none focus:border-navy"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm text-gray-600">Subject</span>
                <input
                  type="text"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-base text-gray-700 outline-none focus:border-navy"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-gray-600">Message</span>
                <textarea
                  rows={5}
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-base text-gray-700 outline-none focus:border-navy"
                />
              </label>
              <button
                type="submit"
                className="rounded bg-navy px-6 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-navy-light"
              >
                Send message
              </button>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-navy">Contact information</h2>
              <dl className="mb-6 space-y-4 text-base">
                <div>
                  <dt className="text-sm text-gray-500">Address</dt>
                  <dd className="text-gray-700">
                    Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport
                    Bypass, Abuja FCT
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Phone</dt>
                  <dd className="text-gray-700">+234 209 623 2187</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Email</dt>
                  <dd className="text-gray-700">info@nileuniversity.edu.ng</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Office hours</dt>
                  <dd className="text-gray-700">Mon – Fri: 8:00am – 5:00pm</dd>
                </div>
              </dl>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-600 transition-all hover:scale-110 hover:bg-navy hover:text-white"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14">
            <h2 className="mb-4 text-xl font-bold text-navy">Find us on the map</h2>
            <div className="flex h-72 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-100 text-base text-gray-400">
              [ Map placeholder ]
            </div>
          </div>
        </Reveal>
      </div>

      <div className="bg-gray-50 px-6 py-14 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-6 text-xl font-bold text-navy">Department contacts</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, i) => (
              <Reveal key={dept.name} delay={i * 60}>
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">{dept.name}</h3>
                  <p className="text-base text-gray-500">{dept.email}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
