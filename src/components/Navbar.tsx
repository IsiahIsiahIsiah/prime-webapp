export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center gap-8 px-8 py-5">
      <span
        className="text-white tracking-widest text-sm uppercase"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Isiah
      </span>
      <div className="flex items-center gap-6">
        <a
          href="#projects"
          className="text-white/60 hover:text-white text-sm transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-white/60 hover:text-white text-sm transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
