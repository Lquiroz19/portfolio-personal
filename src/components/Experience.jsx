import { experiences } from '../data/portafolio.js'

function Experience() {
  return (
    <section
      id="experiencia"
      className="border-t border-white/10 bg-white/[0.02] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Mi trayectoria
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Experiencia <span className="text-cyan-400">profesional</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Experiencia desarrollada en entornos laborales
            que requieren organización, comunicación,
            resolución de problemas y mejora continua.
          </p>
        </div>

        {/* Línea de tiempo */}
        <div className="relative border-l-2 border-cyan-500/30 pl-8 md:pl-12">

          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="relative mb-10 last:mb-0"
            >

              {/* Punto de la línea de tiempo */}
              <div className="absolute -left-[42px] top-7 h-4 w-4 rounded-full border-4 border-[#080d19] bg-cyan-400 md:-left-[58px]" />

              <div className="rounded-2xl border border-white/10 bg-[#101827] p-7 transition-all duration-300 hover:border-cyan-500/40 md:p-9">

                {/* Fecha */}
                <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
                  {experience.period}
                </span>

                {/* Puesto */}
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {experience.position}
                </h3>

                {/* Empresa */}
                <p className="mb-5 font-semibold text-cyan-400">
                  {experience.company}
                </p>

                {/* Descripción */}
                <p className="mb-6 leading-7 text-slate-400">
                  {experience.description}
                </p>

                {/* Responsabilidades */}
                <ul className="mb-7 space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-1 text-cyan-400">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Competencias */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience