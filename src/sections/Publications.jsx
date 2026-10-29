import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { publications } from '../data/publications'

const INITIAL_COUNT = 3

function Publications() {
  const [isExpanded, setIsExpanded] = useState(false)
  const visiblePublications = isExpanded ? publications : publications.slice(0, INITIAL_COUNT)

  return (
    <section id="publications" className="section-padding">
      <SectionHeader
        title="Publications"
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded((prev) => !prev)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePublications.map((pub) => (
          <div
            key={pub.id}
            className="border border-border p-6 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] transition-colors h-full flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-display text-white mb-2 leading-snug">{pub.title}</h4>
              <p className="text-sm text-muted mb-6">{pub.details}</p>
            </div>
            <a href={pub.link} className="text-sm text-white hover:underline underline-offset-4">
              <i className="fas fa-external-link-alt mr-1" aria-hidden="true"></i> Read Publication
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publications