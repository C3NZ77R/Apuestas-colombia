"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/beaver-logo.jpg"
            alt="Apuestas Colombia beaver mascot logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span
            className="text-sm font-black italic uppercase tracking-wider text-foreground"
            style={{ fontFamily: "'Gobold High Italic', sans-serif", fontStyle: "italic" }}
          >
            Apuestas Colombia
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6" aria-label="Navegacion pie de pagina">
          <a href="#analisis" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
            Analisis
          </a>
          <a href="#telegram" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
            Telegram
          </a>
          <a href="#noticias" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
            Noticias
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          {"2026 Apuestas Colombia. Todos los derechos reservados."}
        </p>
      </div>

      {/* Neon flag bar */}
      <div className="mx-auto mt-8 flex max-w-7xl overflow-hidden rounded-full">
        <div className="h-1 flex-1 bg-neon-yellow" />
        <div className="h-1 flex-1 bg-neon-blue" />
        <div className="h-1 flex-1 bg-neon-red" />
      </div>
    </footer>
  )
}
