import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

const INITIAL_COUNT = 2

function Projects() {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleProjects = isExpanded ? projects : projects.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="section-padding">
      <SectionHeader
        title="Projects"
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded((prev) => !prev)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <div
            key={project.title}
            className="group border border-border p-6 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-border-hover flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-display text-white font-semibold">{project.title}</h4>
            </div>
            <p className="text-sm text-muted mb-6 grow leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 border border-border rounded-sm text-light bg-black/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-sm text-light hover:text-white inline-flex items-center transition-colors group-hover:underline underline-offset-4"
            >
              <i className="fab fa-github mr-2" aria-hidden="true"></i> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects