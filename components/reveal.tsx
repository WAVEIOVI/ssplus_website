"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
  /**
   * Animation class to apply when element becomes visible
   * Defaults to fade-in-up defined in globals.css
   */
  animateClassName?: string
  /** Delay in ms for staggered effects */
  delayMs?: number
  /** Only animate once */
  once?: boolean
  /** IntersectionObserver options */
  rootMargin?: string
  threshold?: number
}

export function Reveal({
  as = "div",
  className,
  children,
  animateClassName = "animate-fade-in-up",
  delayMs = 0,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1,
}: RevealProps) {
  const Component = as as any
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If reduced motion is preferred, show immediately without animation
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return (
    <Component
      ref={ref as any}
      className={cn(
        "opacity-0 will-change-transform",
        visible && cn("opacity-100", animateClassName),
        delayMs ? undefined : undefined,
        className
      )}
      style={delayMs ? ({ animationDelay: `${delayMs}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Component>
  )
}


