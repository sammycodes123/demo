import Reveal from "./Reveal"

const items = [
  {
    tag: "News",
    image: "/l1.jpeg",
    date: "2025",
    headline: "Nile University places 3rd at the JAMB National Tertiary Admissions Performance Merit Awards",
  },
  {
    tag: "News",
    image: "/l2.jpeg",
    date: "2020",
    headline: "Nile University joins Honoris United Universities, Africa's largest private higher education network",
  },
  {
    tag: "News",
    image: "/l3.jpeg",
    date: "Ongoing",
    headline: "Nile University medical graduates recognised by the UK General Medical Council",
  },
]

function News() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-10">
      <Reveal>
        <div className="mx-auto flex max-w-7xl items-baseline justify-between">
          <h2 className="text-[40px] font-bold leading-tight text-navy">Latest news and events</h2>
          <a href="#" className="text-lg text-gray-500 hover:text-navy">
            View all ›
          </a>
        </div>
      </Reveal>
      <div className="mx-auto mt-6 grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.headline} delay={i * 100}>
            <div className="group">
              <div className="relative mb-3 h-40 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-2 top-2 rounded bg-navy px-2 py-0.5 text-xs font-medium text-white">
                  {item.tag}
                </span>
              </div>
              <p className="mb-1 text-base text-gray-400">{item.date}</p>
              <p className="mb-2 text-lg font-medium leading-snug text-navy">
                {item.headline}
              </p>
              <a href="#" className="text-base text-gray-400 hover:text-navy">
                Read more
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default News
