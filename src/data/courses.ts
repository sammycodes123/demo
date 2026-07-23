export type Level = "undergraduate" | "postgraduate"

export type Category =
  | "engineering"
  | "computing"
  | "business"
  | "science"
  | "built-environment"
  | "media"
  | "law-security"
  | "health"

export type Course = {
  slug: string
  name: string
  duration: number
  category: Category
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[.&]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function makeCourses(entries: [string, number, Category][]): Course[] {
  return entries.map(([name, duration, category]) => ({
    slug: slugify(name),
    name,
    duration,
    category,
  }))
}

export const undergraduatePrograms: Course[] = makeCourses([
  ["B.Eng. Chemical Engineering", 5, "engineering"],
  ["B.Eng. Civil Engineering", 5, "engineering"],
  ["B.Eng. Computer Engineering", 5, "engineering"],
  ["B.Eng. Electrical & Electronics Engineering", 5, "engineering"],
  ["B.Eng. Information and Communication Engineering", 5, "engineering"],
  ["B.Eng. Mechanical Engineering", 5, "engineering"],
  ["B.Eng. Mechatronics Engineering", 5, "engineering"],
  ["B.Eng. Petroleum & Gas Engineering", 5, "engineering"],
  ["B.Sc. Accounting", 4, "business"],
  ["B.Sc. Architecture", 4, "built-environment"],
  ["B.Sc. Banking and Finance", 4, "business"],
  ["B.Sc. Biochemistry", 4, "science"],
  ["B.Sc. Biology", 4, "science"],
  ["B.Sc. Biotechnology", 4, "science"],
  ["B.Sc. Broadcasting", 4, "media"],
  ["B.Sc. Building", 5, "built-environment"],
  ["B.Sc. Business Administration", 4, "business"],
  ["B.Sc. Computer Science", 4, "computing"],
  ["B.Sc. Criminology & Security Studies", 4, "law-security"],
  ["B.Sc. Cyber Security", 4, "computing"],
])

export const postgraduatePrograms: Course[] = makeCourses([
  ["M.Sc. Chemical Engineering", 2, "engineering"],
  ["M.Sc. Civil Engineering", 2, "engineering"],
  ["M.Sc. Computer Engineering", 2, "engineering"],
  ["M.Sc. Electrical & Electronics Engineering", 2, "engineering"],
  ["M.Sc. Information and Communication Engineering", 2, "engineering"],
  ["M.Sc. Mechanical Engineering", 2, "engineering"],
  ["M.Sc. Mechatronics Engineering", 2, "engineering"],
  ["M.Sc. Petroleum & Gas Engineering", 2, "engineering"],
  ["M.Sc. Accounting", 2, "business"],
  ["M.Sc. Architecture", 2, "built-environment"],
  ["M.Sc. Banking and Finance", 2, "business"],
  ["M.Sc. Biochemistry", 2, "science"],
  ["M.Sc. Biology", 2, "science"],
  ["M.Sc. Biotechnology", 2, "science"],
  ["M.Sc. Broadcasting", 2, "media"],
  ["M.Sc. Business Administration", 2, "business"],
  ["M.Sc. Computer Science", 2, "computing"],
  ["M.Sc. Criminology & Security Studies", 2, "law-security"],
  ["M.Sc. Cyber Security", 2, "computing"],
  ["M.Sc. Public Health", 2, "health"],
])

export function findCourse(slug: string): { course: Course; level: Level } | undefined {
  const undergrad = undergraduatePrograms.find((c) => c.slug === slug)
  if (undergrad) return { course: undergrad, level: "undergraduate" }

  const postgrad = postgraduatePrograms.find((c) => c.slug === slug)
  if (postgrad) return { course: postgrad, level: "postgraduate" }

  return undefined
}
