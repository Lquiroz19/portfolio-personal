import { projects } from '../data/portafolio.js'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section
      id="proyectos"
      className="border-t border-white/10 py-24"
    >

      <div className="mx-auto max-w-6xl px-6">

        {/* Encabezado */}
        <div className="mb-12">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Mi trabajo
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Proyectos <span className="text-cyan-400">destacados</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Una selección de proyectos académicos y personales
            en los que he aplicado conocimientos de programación,
            desarrollo de software y tecnologías informáticas.
          </p>

        </div>

        {/* Cuadrícula de proyectos */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects