function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-[#101827]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-500/40
      "
    >

      {/* Imagen del proyecto */}
      <div className="flex h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-950 to-[#080d19]">

        {project.image ? (
          <img
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-center">
            <div className="mb-3 text-5xl">💻</div>

            <p className="text-sm text-slate-500">
              Vista previa próximamente
            </p>
          </div>
        )}

      </div>

      {/* Información del proyecto */}
      <div className="p-7">

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          {project.category}
        </p>

        <h3 className="mb-4 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mb-6 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mb-8 flex flex-wrap gap-2">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-cyan-500/30 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
            >
              Ver código ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Ver proyecto ↗
            </a>
          )}

          {!project.github && !project.demo && (
            <span className="text-sm text-slate-500">
              Enlaces próximamente
            </span>
          )}

        </div>

      </div>

    </article>
  )
}

export default ProjectCard