"use client"

import { motion } from "framer-motion"
import { Send, CheckCircle, Users, Clock } from "lucide-react"

const benefits = [
  { icon: CheckCircle, text: "Pronosticos diarios con analisis estructurado" },
  { icon: Users, text: "Comunidad activa de +4,400 miembros" },
  { icon: Clock, text: "Alertas en tiempo real para apuestas en vivo" },
]

export function TelegramCta() {
  return (
    <section id="telegram" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Blue neon background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/10 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl"
      >
        {/* Outer card with neon blue border */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px #0033A033, 0 0 20px #0033A022, 0 0 40px #0033A011",
              "0 0 15px #0033A055, 0 0 30px #0033A033, 0 0 60px #0033A022",
              "0 0 10px #0033A033, 0 0 20px #0033A022, 0 0 40px #0033A011",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl border border-neon-blue/40 bg-card/60 p-8 backdrop-blur-xl md:p-14"
        >
          <div className="text-center">
            {/* Icon */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-neon-blue/10 text-neon-blue"
            >
              <Send className="h-7 w-7" />
            </motion.div>

            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neon-blue">
              Canal exclusivo
            </p>

            <h2
              className="mb-4 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl"
              style={{ fontFamily: "'Gobold Extra1', sans-serif" }}
            >
              Unete a Nuestro{" "}
              <span className="text-neon-blue">Telegram</span>
            </h2>

            <p className="mx-auto mb-10 max-w-lg text-muted-foreground">
              Accede a pronosticos exclusivos, analisis en tiempo real y una
              comunidad de tipsters estrategicos.
            </p>

            {/* Benefits */}
            <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 shrink-0 text-neon-blue" />
                    <span>{b.text}</span>
                  </div>
                )
              })}
            </div>

            {/* boton de enlace a telegram */}
            <motion.a
              href="https://t.me/apuestascolombiax"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-xl bg-neon-blue px-10 py-5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-shadow hover:shadow-[0_0_40px_#0033A066]"
            >
              <Send className="h-5 w-5" />
              Unirse al Canal de Telegram
            </motion.a>

            <p className="mt-6 text-xs text-muted-foreground">
              Acceso gratuito - Mas de 4,400 miembros activos
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
