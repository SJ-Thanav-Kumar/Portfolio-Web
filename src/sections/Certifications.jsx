import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { certifications } from '../data/certifications'

const INITIAL_COUNT = 2

function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleCertifications = isExpanded ? certifications : certifications.slice(0, INITIAL_COUNT)

  return (
    <section id="certifications" className="section-padding">
      <SectionHeader
        title="Certifications"
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded((prev) => !prev)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCertifications.map((cert) => (
          <div
            key={cert.id}
            className="border border-border hover:border-border-hover transition-colors rounded-lg p-6 md:p-8 bg-white/[0.02] w-full"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 text-white text-2xl">
                <i className="fas fa-award" aria-hidden="true"></i>
              </div>
              <div>
                <h4 className="text-lg font-display text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-muted mb-4">{cert.issuer} &bull; {cert.date}</p>
                <a
                  href={cert.link}
                  className="inline-block px-4 py-2 border border-border text-sm text-light rounded-sm hover:border-white hover:text-white transition-all"
                >
                  View Certification
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications