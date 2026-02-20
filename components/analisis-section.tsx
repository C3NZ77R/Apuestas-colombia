"use client"

import { motion } from "framer-motion"
import { Target, Trophy, Zap, Shield, TrendingUp } from "lucide-react"

const analyses = [
  {
    icon: Target,
    title: "Futbol Internacional",
    description: "Analisis detallado de las principales ligas europeas con datos estadisticos avanzados y tendencias de mercado.",
    sport: "Futbol",
    borderColor: "border-neon-yellow/30",
    glowColor: "shadow-[0_0_15px_#FFD70022]",
    hoverGlow: "hover:shadow-[0_0_25px_#FFD70044]",
    iconColor: "text-neon-yellow",
  },
  {
    icon: Trophy,
    title: "NBA & Basquetbol",
    description: "Pronosticos diarios para la NBA con analisis de rendimiento, lesiones y matchups clave para cada partido.",
    sport: "Basquetbol",
    borderColor: "border-neon-red/30",
    glowColor: "shadow-[0_0_15px_#C8102E22]",
    hoverGlow: "hover:shadow-[0_0_25px_#C8102E44]",
    iconColor: "text-neon-red",
  },
  {
    icon: Zap,
    title: "Apuestas En Vivo",
    description: "Señales en tiempo real para apuestas en vivo con analisis de momentum y cambios de linea durante los partidos.",
    sport: "Multiples",
    borderColor: "border-neon-yellow/30",
    glowColor: "shadow-[0_0_15px_#FFD70022]",
    hoverGlow: "hover:shadow-[0_0_25px_#FFD70044]",
    iconColor: "text-neon-yellow",
  },
  {
    icon: Shield,
    title: "Tenis & MMA",
    description: "Analisis especializados de torneos ATP, WTA y eventos de MMA con datos de rendimiento y condiciones de juego.",
    sport: "Tenis / MMA",
    borderColor: "border-neon-blue/30",
    glowColor: "shadow-[0_0_15px_#0033A022]",
    hoverGlow: "hover:shadow-[0_0_25px_#0033A044]",
    iconColor: "text-neon-blue",
  },
  {
    icon: TrendingUp,
    title: "Estrategia Avanzada",
    description: "Gestion de bankroll, sistemas de apuestas y educacion financiera para maximizar tus ganancias a largo plazo.",
    sport: "Educacion",
    borderColor: "border-neon-red/30",
    glowColor: "shadow-[0_0_15px_#C8102E22]",
    hoverGlow: "hover:shadow-[0_0_25px_#C8102E44]",
    iconColor: "text-neon-red",
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function AnalisisSection() {
  return (
    <section id="analisis" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neon-yellow">
            Nuestros servicios
          </p>
          <h2
            className="mb-4 text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl"
            style={{ fontFamily: "'Gobold Extra1', sans-serif" }}
          >
            Analisis Deportivos
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Cada pronostico esta respaldado por datos, estadisticas y el
            conocimiento de nuestro equipo de tipsters profesionales.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {analyses.map((a) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.title}
                variants={item}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative rounded-xl border ${a.borderColor} bg-card/40 p-6 backdrop-blur-md transition-all duration-300 ${a.glowColor} ${a.hoverGlow}`}
              >
                {/* Glassmorphism inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/[0.02] to-transparent" />

                <div className="relative">
                  {/* Sport Tag */}
                  <span className="mb-4 inline-block rounded-md border border-border bg-secondary px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {a.sport}
                  </span>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className={`h-8 w-8 ${a.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2 text-xl font-black uppercase text-foreground"
                    style={{ fontFamily: "'Gobold Extra1', sans-serif" }}
                  >
                    {a.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
