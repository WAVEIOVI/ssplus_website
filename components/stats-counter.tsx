"use client"

import { useEffect, useState } from "react"

interface StatsCounterProps {
  currentLang: "fr" | "en"
}

const stats = {
  fr: {
    title: "SS PLUS en Chiffres",
    items: [
      { number: 23, label: "Années d'Expérience", suffix: "+" },
      { number: 500, label: "Clients Satisfaits", suffix: "+" },
      { number: 1000, label: "Projets Réalisés", suffix: "+" },
      { number: 15, label: "Années ISO 9001", suffix: "" },
    ],
  },
  en: {
    title: "SS PLUS in Numbers",
    items: [
      { number: 23, label: "Years of Experience", suffix: "+" },
      { number: 500, label: "Satisfied Clients", suffix: "+" },
      { number: 1000, label: "Completed Projects", suffix: "+" },
      { number: 15, label: "Years ISO 9001", suffix: "" },
    ],
  },
}

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export function StatsCounter({ currentLang }: StatsCounterProps) {
  const t = stats[currentLang]
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run the animation if the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="stats-section" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform transition-all duration-500 hover:scale-105"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${index * 0.1}s`
              }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isVisible ? <CountUp end={stat.number} /> : 0}
                {stat.suffix}
              </div>
              <p className="text-primary-foreground/80 text-pretty">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
