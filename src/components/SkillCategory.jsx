function SkillCategory({ title, skills }) {
  return (
    <div>
      <h5 className="text-xs uppercase tracking-wider text-muted mb-3 border-b border-border pb-1 inline-block">
        {title}
      </h5>
      <div className="flex flex-wrap gap-2 text-sm text-light">
        {skills.length === 0 ? (
          <span className="pill px-3 py-1 border border-border rounded-full flex items-center gap-1.5">
            [Add skills here]
          </span>
        ) : (
          skills.map((skill) => (
            <span
              key={skill.name}
              className="pill px-3 py-1 border border-border rounded-full flex items-center gap-1.5"
            >
              {skill.icon && <i className={skill.icon}></i>} {skill.name}
            </span>
          ))
        )}
      </div>
    </div>
  )
}

export default SkillCategory
