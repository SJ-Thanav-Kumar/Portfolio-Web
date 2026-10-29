function Navbar({ showPublications }) {
  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-border z-40 py-5">
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:space-x-8 text-xs md:text-sm font-medium text-muted">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          {/* <li><a href="#certifications" className="nav-link">Certifications</a></li> */}
          <li><a href="#projects" className="nav-link">Projects</a></li>
          {/* {showPublications && (
            <li><a href="#publications" className="nav-link">Publications</a></li>
          )} */}
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar