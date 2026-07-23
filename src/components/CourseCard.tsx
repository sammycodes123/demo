import { Link } from "react-router-dom"
import type { Course } from "../data/courses"

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="h-36 overflow-hidden">
        <img
          src={`https://picsum.photos/seed/nile-${course.slug}/500/350`}
          alt={course.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-900">{course.name}</h3>
        <p className="text-sm font-semibold text-navy">{course.duration} years</p>
      </div>
    </Link>
  )
}

export default CourseCard
