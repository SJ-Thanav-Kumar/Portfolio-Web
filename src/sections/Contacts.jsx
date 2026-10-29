function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">Get In Touch</h2>
          <p className="text-muted max-w-sm text-lg leading-relaxed">
            Let's connect! Whether you have a project idea, a question, or just want to chat, feel free to reach out.
          </p>
        </div>

        {/* Right Staggered Social Links */}
        <div className="md:w-1/2 flex flex-col gap-6 w-full items-start">
          {/* GitHub (top) */}
          <a
            href="https://github.com/SJ-Thanav-Kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-muted hover:text-white transition-colors duration-300 ml-0"
          >
            <span className="text-lg font-medium group-hover:underline underline-offset-4">GitHub</span>
            <div className="w-14 h-14 rounded-full border border-border group-hover:border-white flex items-center justify-center transition-colors duration-300 text-xl">
              <i className="fab fa-github" aria-hidden="true"></i>
            </div>
          </a>

          {/* LinkedIn (middle) */}
          <a
            href="https://www.linkedin.com/in/thanav-kumar-s-j-6025692b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-muted hover:text-white transition-colors duration-300 ml-8 md:ml-16"
          >
            <span className="text-lg font-medium group-hover:underline underline-offset-4">LinkedIn</span>
            <div className="w-14 h-14 rounded-full border border-border group-hover:border-white flex items-center justify-center transition-colors duration-300 text-xl">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </div>
          </a>

          {/* Email (bottom) */}
          <a
            href="mailto:sjthanavkumar@gmail.com"
            className="group flex items-center gap-4 text-muted hover:text-white transition-colors duration-300 ml-16 md:ml-32"
          >
            <span className="text-lg font-medium group-hover:underline underline-offset-4">sjthanavkumar@gmail.com</span>
            <div className="w-14 h-14 rounded-full border border-border group-hover:border-white flex items-center justify-center transition-colors duration-300 text-xl">
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact