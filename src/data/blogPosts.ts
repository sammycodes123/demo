export type BlogCategory =
  | "Education"
  | "Campus life"
  | "Finance"
  | "Careers"
  | "Wellbeing"

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  author: string
  date: string
  image: string
  featured?: boolean
}

export const categories: BlogCategory[] = [
  "Education",
  "Campus life",
  "Finance",
  "Careers",
  "Wellbeing",
]

export const blogPosts: BlogPost[] = [
  {
    slug: "5-things-to-know-before-your-first-semester",
    title: "5 things to know before your first semester at Nile",
    excerpt:
      "Starting university can feel overwhelming. From registration to finding your first study group, here's what every new student should know before orientation week even begins.",
    category: "Education",
    author: "Nike Adebayo",
    date: "Aug 10, 2026",
    image: "/UTME-Screening-is-now-open-scaled.avif",
    featured: true,
  },
  {
    slug: "inside-niles-engineering-innovation-labs",
    title: "Inside Nile's engineering and innovation labs",
    excerpt:
      "A look at the hands-on labs where engineering students turn coursework into working prototypes, long before graduation.",
    category: "Education",
    author: "Tunde Bakare",
    date: "Aug 3, 2026",
    image: "/fdlkbaner8gy3hgnkre.avif",
  },
  {
    slug: "why-mentorship-matters-at-nile",
    title: "Why mentorship matters at Nile University",
    excerpt:
      "Faculty mentorship shapes more than grades. Here's how staff and students build relationships that last well beyond the classroom.",
    category: "Education",
    author: "Halima Yusuf",
    date: "Jul 21, 2026",
    image: "/l2.jpeg",
  },
  {
    slug: "a-day-in-the-life-of-a-nile-student",
    title: "A day in the life of a Nile University student",
    excerpt:
      "From early lectures to late study sessions, we followed a student through a typical weekday on campus.",
    category: "Campus life",
    author: "Fatima Sani",
    date: "Jul 15, 2026",
    image: "/B.Sc_.-Peace-Studies-and-Conflict-Resolution.avif",
  },
  {
    slug: "getting-to-know-niles-campus",
    title: "Getting to know Nile's campus",
    excerpt:
      "A quick tour of the buildings, spaces, and shortcuts every new student ends up learning by heart in their first month.",
    category: "Campus life",
    author: "Emeka Nwosu",
    date: "Jul 6, 2026",
    image: "/DSC08719-1.avif",
  },
  {
    slug: "clubs-and-societies-getting-involved",
    title: "Clubs and societies: getting involved on campus",
    excerpt:
      "Joining a club is one of the fastest ways to make friends and build a life outside lectures. Here's how to find the right one.",
    category: "Campus life",
    author: "Nike Adebayo",
    date: "Jun 28, 2026",
    image: "/DSC00304-scaled.avif",
  },
  {
    slug: "inside-the-nile-afea-annual-conference",
    title: "Inside the Nile-AFEA annual conference",
    excerpt:
      "Economists and finance professionals from across the continent gathered on campus this year. Here's what students took away from it.",
    category: "Finance",
    author: "Tunde Bakare",
    date: "Jun 19, 2026",
    image: "/l1.jpeg",
  },
  {
    slug: "sports-fitness-and-student-wellbeing",
    title: "Sports, fitness, and student wellbeing at Nile",
    excerpt:
      "Staying active is part of student life at Nile. A look at the teams, tournaments, and everyday habits that keep students balanced.",
    category: "Wellbeing",
    author: "Halima Yusuf",
    date: "Jun 10, 2026",
    image: "/NUN02329-scaled.avif",
  },
  {
    slug: "preparing-for-your-first-career-fair",
    title: "Preparing for your first career fair",
    excerpt:
      "Career fairs can be intimidating. Here's how to prepare your pitch, your questions, and your expectations before you walk in.",
    category: "Careers",
    author: "Fatima Sani",
    date: "Jun 2, 2026",
    image: "/campus-audience.jpg",
  },
  {
    slug: "from-graduation-to-your-first-job",
    title: "From graduation to your first job",
    excerpt:
      "Three recent graduates share what actually helped them land their first role, and what they wish they'd started sooner.",
    category: "Careers",
    author: "Emeka Nwosu",
    date: "May 24, 2026",
    image: "/kdqcmr9vp8hfuf.jpg",
  },
  {
    slug: "life-after-nile-where-our-graduates-go",
    title: "Life after Nile: where our graduates go",
    excerpt:
      "From postgraduate study to careers across industries, a look at the paths Nile graduates have taken after commencement.",
    category: "Careers",
    author: "Nike Adebayo",
    date: "May 15, 2026",
    image: "/sfjigh8hgngjg.avif",
  },
]
