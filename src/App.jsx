"use client"
import { useState, useEffect } from "react"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Services from "../src/pages/Services"
import Contact from "../src/pages/Contact"
import Blog from "../src/pages/Blog"
import Projects from "../src/pages/Projects"

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage")
    const hashPage = window.location.hash.replace("#", "")
    return hashPage || savedPage || "home"
  })

  const navigateToPage = (page) => {
    setCurrentPage(page)
    localStorage.setItem("currentPage", page)
    window.location.hash = page
  }

  useEffect(() => {
    const handleHashChange = () => {
      const page = window.location.hash.replace("#", "") || "home"
      setCurrentPage(page)
      localStorage.setItem("currentPage", page)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <div>
      {currentPage === "home" && <Home onNavigate={navigateToPage} />}
      {currentPage === "about" && <About onNavigate={navigateToPage} />}
      {currentPage === "services" && <Services onNavigate={navigateToPage} />}
      {currentPage === "contact" && <Contact onNavigate={navigateToPage} />}
      {currentPage === "blog" && <Blog onNavigate={navigateToPage} />}
      {currentPage === "projects" && <Projects onNavigate={navigateToPage} />}
    </div>
  )
}
