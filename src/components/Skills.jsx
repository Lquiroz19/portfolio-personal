
import { skills } from '../data/portafolio'

function Skills() {
  return (
    <section id="habilidades" className="border-t border-white/10 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Mis conocimientos
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Áreas de especialización
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-white/10 bg-[#101827] p-7 transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="mb-5 text-3xl">{skill.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
              <p className="text-slate-400">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
