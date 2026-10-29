import profilePhoto from '../assets/pfp.JPG'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-1">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Text Content */}
        <div className="flex-1 mt-10 md:mt-0">
          <p className="text-muted tracking-widest text-sm uppercase mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-2 tracking-tight">SJ Thanav Kumar</h1>
          <h2 className="text-2xl md:text-4xl font-medium font-display text-muted mb-6">Student at SNUC, 3rd Year</h2>
          <p className="text-muted max-w-xl mb-10 leading-relaxed">
            Hey my name is SJ Thanav Kumar! 3rd Year undergrad comp sci student.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-dark font-medium text-sm rounded-sm hover:bg-gray-200 transition-colors"
            >
              GET IN TOUCH
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium text-sm rounded-sm hover:bg-white hover:text-dark transition-colors"
            >
              <i className="fas fa-file-pdf mr-2" aria-hidden="true"></i> RESUME
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-border p-2">
            <div className="w-full h-full rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden">
              <img
                src={profilePhoto}
                alt="Portrait of SJ Thanav Kumar"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero