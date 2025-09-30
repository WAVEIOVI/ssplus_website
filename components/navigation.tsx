"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getNavigation } from "@/lib/translations"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLang, setLanguage } = useLanguage()
  const t = getNavigation(currentLang)

  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    });
  }

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 overflow-hidden ${
      scrolled ? "bg-background/95 shadow-md" : "bg-background/80"
    } supports-[backdrop-filter]:bg-background/60`}>
      {/* Emergency Contact Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">{t.emergency}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium">ISO 9001 Certified Since 2010</span>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <button
                  onClick={() => setLanguage("fr")}
                  className={`px-2 py-1 text-xs rounded transition-colors ${currentLang === "fr" ? "bg-white/20" : "hover:bg-white/10"}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 text-xs rounded transition-colors ${currentLang === "en" ? "bg-white/20" : "hover:bg-white/10"}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-12" : "h-14"}`}>
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 md:h-9 lg:h-10 w-auto flex items-center">
              <Image 
                src="/images/logo-ss-plus-hor.png" 
                alt="SS PLUS" 
                width={200} 
                height={48} 
                className="object-contain" 
                style={{ maxHeight: '100%', width: 'auto' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t.about}
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              {t.products}
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              {t.services}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t.contact}
            </Link>
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <Link href="/wave-plus">{t.waveplus}</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-4 border-t animate-fade-in">
              <Link href="/" className="block px-3 py-2 text-base font-medium hover:text-primary">
                {t.home}
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium hover:text-primary">
                {t.about}
              </Link>
              <Link href="/products" className="block px-3 py-2 text-base font-medium hover:text-primary">
                {t.products}
              </Link>
              <Link href="/services" className="block px-3 py-2 text-base font-medium hover:text-primary">
                {t.services}
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:text-primary">
                {t.contact}
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary-dark">
                  <Link href="/wave-plus">{t.waveplus}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
