"use client"

import { motion } from "framer-motion"
import { ArrowDown, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* fondo neon con los efectos neon */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon-yellow/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-neon-blue/8 blur-[100px]" />
        <div className="absolute left-1/2 bottom-1/4 h-64 w-64 rounded-full bg-neon-red/5 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-neon-yellow/30 bg-neon-yellow/5 px-5 py-2"
        >
          <TrendingUp className="h-4 w-4 text-neon-yellow" />
          <span className="text-sm font-medium text-neon-yellow">Tipsters Profesionales</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 text-5xl leading-tight font-black uppercase tracking-tight md:text-7xl lg:text-8xl"
          style={{ fontFamily: "'Gobold Extra1', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-red bg-clip-text text-transparent">
            No Somos Azar
          </span>
          <br />
          <span className="text-foreground">
            Somos Estrategia
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Somos un equipo de tipsters profesionales que brindan analisis
          fundamentados con informacion de alto valor. No somos azar, somos
          estrategia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#telegram"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-neon-yellow px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_30px_#FFD70066]"
          >
            Unete al Canal
            <span className="inline-block transition-transform group-hover:translate-x-1">{">"}</span>
          </a>
          <a
            href="#analisis"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-medium uppercase tracking-wider text-foreground transition-all hover:border-muted-foreground hover:bg-secondary"
          >
            Ver Analisis
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-10"
        >
          {[
            { value: "94%", label: "Win Rate" },
            { value: "4,400+", label: "Miembros" },
            { value: "5K+", label: "Analisis" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-neon-yellow md:text-4xl" style={{ fontFamily: "'Gobold Extra1', sans-serif" }}>{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
