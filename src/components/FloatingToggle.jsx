function FloatingToggle({ isHidden, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 px-5 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-gray-200 transition-colors z-50 flex items-center gap-2"
    >
      <i className={isHidden ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
      <span>{isHidden ? 'Show Publications' : 'Hide Publications'}</span>
    </button>
  )
}

export default FloatingToggle