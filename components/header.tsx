"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Analisis Deportivos", href: "#analisis" },
  { label: "Canal de Telegram", href: "#telegram", highlighted: true },
  { label: "Noticias", href: "#noticias" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Navigation - left side */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.highlighted
                  ? "rounded-full border border-neon-blue bg-neon-blue/10 px-5 py-2 text-sm font-medium text-neon-blue transition-all hover:bg-neon-blue/20 hover:shadow-[0_0_15px_#0033A066]"
                  : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo - right side */}
        <a href="#" className="flex items-center gap-3" aria-label="Apuestas Colombia inicio">
          <span className="text-lg font-black italic uppercase tracking-wider text-foreground" style={{ fontFamily: "'Gobold High Italic', sans-serif", fontStyle: "italic" }}>
            Apuestas Colombia
          </span>
          <Image
            src="/images/beaver-logo.jpg"
            alt="Apuestas Colombia beaver mascot logo"
            width={44}
            height={44}
            className="rounded-full border-2 border-neon-yellow shadow-[0_0_12px_#FFD70066]"
          />
        </a>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
            aria-label="Navegacion movil"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    link.highlighted
                      ? "rounded-lg border border-neon-blue bg-neon-blue/10 px-4 py-3 text-center text-sm font-medium text-neon-blue"
                      : "px-4 py-3 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
