
function About() {
  return (
    <section
      id="sobre-mi"
      className="relative border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Título de la sección */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Conoce mi perfil
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Sobre <span className="text-cyan-400">mí</span>
          </h2>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">

          {/* Presentación profesional */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Tecnología, aprendizaje y resolución de problemas.
            </h3>

            <p className="mb-5 leading-8 text-slate-400">
              Soy Luis Alejandro Quiroz Polanco, con formación
              universitaria en Ingeniería en Sistemas en la
              Universidad Internacional San Isidro Labrador (UISIL).
            </p>

            <p className="mb-5 leading-8 text-slate-400">
              Cuento con conocimientos en desarrollo de software,
              bases de datos, tecnologías web y herramientas
              informáticas. Durante mi formación he participado
              en proyectos académicos utilizando diferentes
              lenguajes y tecnologías.
            </p>

            <p className="leading-8 text-slate-400">
              Además, tengo experiencia laboral en operaciones,
              atención al cliente, coordinación de procesos y
              resolución de incidencias. Busco integrar estas
              habilidades con mis conocimientos tecnológicos
              para aportar soluciones prácticas y eficientes.
            </p>
          </div>

          {/* Tarjetas de información */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-6">
              <div className="mb-4 text-3xl">🎓</div>
              <h4 className="mb-2 font-semibold text-white">
                Formación
              </h4>
              <p className="text-sm leading-6 text-slate-400">
                Ingeniería en Sistemas
                <br />
                UISIL
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-6">
              <div className="mb-4 text-3xl">💻</div>
              <h4 className="mb-2 font-semibold text-white">
                Desarrollo
              </h4>
              <p className="text-sm leading-6 text-slate-400">
                Aplicaciones web, programación y bases de datos.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-6">
              <div className="mb-4 text-3xl">⚙️</div>
              <h4 className="mb-2 font-semibold text-white">
                Experiencia
              </h4>
              <p className="text-sm leading-6 text-slate-400">
                Operaciones, procesos y atención al cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101827] p-6">
              <div className="mb-4 text-3xl">🚀</div>
              <h4 className="mb-2 font-semibold text-white">
                Objetivo
              </h4>
              <p className="text-sm leading-6 text-slate-400">
                Crecimiento profesional e innovación tecnológica.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
