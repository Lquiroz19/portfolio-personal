

function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">

        <a href="#inicio" className="shrink-0 text-xl font-bold tracking-tight">
          LQ<span className="text-cyan-400">.</span>
        </a>

        <div className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm text-slate-400">
          <a href="#inicio" className="hover:text-cyan-400">
            Inicio
          </a>

          <a href="#sobre-mi" className="hover:text-cyan-400">
            Sobre mí
          </a>

          <a href="#habilidades" className="hover:text-cyan-400">
            Habilidades
          </a>
          <a href="#proyectos" className="hover:text-cyan-400">
            Proyectos
          </a>

          <a href="#contacto" className="hover:text-cyan-400">
            Contacto
          </a>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
