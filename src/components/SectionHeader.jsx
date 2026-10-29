function SectionHeader({ title, isExpanded, onToggle }) {
  return (
    <div className="flex justify-between items-center mb-10">
      <h3 className="text-sm tracking-widest uppercase text-muted m-0">{title}</h3>
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="text-xs font-semibold uppercase tracking-wider text-light hover:text-white transition-colors flex items-center gap-2"
      >
        <span>{isExpanded ? 'View Less' : 'View More'}</span>{' '}
        <i className={isExpanded ? 'fas fa-chevron-up text-[10px]' : 'fas fa-chevron-down text-[10px]'}></i>
      </button>
    </div>
  )
}

export default SectionHeader