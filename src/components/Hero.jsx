
function Hero() {
  return (
    <main id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-36">
        <div className="mb-7 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Portafolio profesional
        </div>

        <p className="mb-3 text-lg text-slate-400">Hola, soy</p>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
          Luis Alejandro
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Quiroz Polanco
          </span>
        </h1>

        <h2 className="mt-7 text-xl font-medium text-slate-300 md:text-2xl">
          Ingeniería en Sistemas | Tecnología y Desarrollo
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Apasionado por la tecnología, el desarrollo de software
          y la resolución de problemas. Me interesa crear
          soluciones funcionales, aprender nuevas tecnologías
          y continuar creciendo profesionalmente.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#habilidades"
            className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Explorar mi perfil →
          </a>

          <a
            href="#contacto"
            className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Contactarme
          </a>
        </div>
      </section>
    </main>
  )
}

export default Hero
