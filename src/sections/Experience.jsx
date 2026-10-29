import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <h3 className="text-sm tracking-widest uppercase text-muted mb-12">Experience</h3>

      <div className="max-w-4xl border-l border-border ml-2 md:ml-4">
        {experience.map((job, index) => (
          <div
            key={job.id}
            className={`relative pl-8 md:pl-12 ${index < experience.length - 1 ? 'pb-12' : ''}`}
          >
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h4 className="text-xl font-display text-white">{job.role}</h4>
              <span className="text-sm text-muted mt-1 md:mt-0">
                {job.organization} &bull; {job.dates}
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-muted leading-relaxed list-disc list-inside marker:text-border">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience