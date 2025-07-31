"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils" // Importando a função cn para classes condicionais

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação só acontece uma vez
    threshold: 0.1, // 10% do elemento visível para disparar
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-1000 ease-out",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
