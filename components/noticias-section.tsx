"use client"

import { motion } from "framer-motion"
import { Clock, ChevronRight } from "lucide-react"

const newsItems = [
  {
    date: "15 Feb 2026",
    category: "Liga BetPlay",
    title: "Millonarios lidera la tabla: analisis tactica de su racha invicta",
    excerpt:
      "El equipo bogotano suma 8 partidos sin perder. Analizamos las claves tacticas detras de su excelente rendimiento en la liga.",
  },
  {
    date: "14 Feb 2026",
    category: "Champions League",
    title: "Champions League: los equipos favoritos en octavos de final",
    excerpt:
      "Repasamos las cuotas y las estadisticas clave para los cruces de octavos de final de la competicion mas importante de Europa.",
  },
  {
    date: "13 Feb 2026",
    category: "NBA",
    title: "Temporada NBA: tendencias de apuestas para la segunda mitad",
    excerpt:
      "Con el All-Star detras, analizamos que equipos estan rindiendo mejor de lo esperado y donde estan las oportunidades de valor.",
  },
  {
    date: "12 Feb 2026",
    category: "Tenis",
    title: "Previo al torneo de Dubai: superficies rapidas y favoritos",
    excerpt:
      "El circuito ATP llega a Dubai con una superficie que favorece a los grandes sacadores. Analizamos los jugadores con mayor valor.",
  },
  {
    date: "11 Feb 2026",
    category: "Estrategia",
    title: "Gestion de bankroll: los errores mas comunes de los apostadores",
    excerpt:
      "Aprende a gestionar tu capital como un profesional. Te explicamos los 5 errores que debes evitar para ser rentable a largo plazo.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function NoticiasSection() {
  return (
    <section id="noticias" className="relative px-6 py-24 md:py-32">
      {/* Subtle red glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-neon-red/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neon-red">
            Ultima hora
          </p>
          <h2
            className="text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl"
            style={{ fontFamily: "'Gobold Extra1', sans-serif" }}
          >
            Noticias Deportivas
          </h2>
        </motion.div>

        {/* News List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {newsItems.map((news, index) => (
            <motion.article
              key={news.title}
              variants={item}
              whileHover={{ x: 6 }}
              className={`group flex cursor-pointer flex-col gap-3 py-6 transition-colors sm:flex-row sm:items-start sm:gap-6 ${
                index !== newsItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Date & Category */}
              <div className="flex shrink-0 items-center gap-3 sm:w-40 sm:flex-col sm:items-start sm:gap-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <time>{news.date}</time>
                </div>
                <span className="rounded border border-border bg-secondary px-2 py-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                  {news.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-foreground transition-colors group-hover:text-neon-yellow">
                  {news.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {news.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight className="hidden h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-neon-yellow sm:mt-1 sm:block" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
