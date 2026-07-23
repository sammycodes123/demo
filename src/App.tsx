import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import CoursesList from "./pages/CoursesList"
import CourseDetail from "./pages/CourseDetail"
import Contact from "./pages/Contact"
import VirtualTour from "./pages/VirtualTour"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="undergraduate" element={<CoursesList level="undergraduate" />} />
        <Route path="postgraduate" element={<CoursesList level="postgraduate" />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="single-course" element={<Navigate to="/courses/b-sc-biology" replace />} />
        <Route path="contact" element={<Contact />} />
        <Route path="virtual-tour" element={<VirtualTour />} />
      </Route>
    </Routes>
  )
}

export default App
