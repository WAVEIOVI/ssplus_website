"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WavePlusHero } from "@/components/wave-plus/wave-plus-hero"
import { PlatformFeatures } from "@/components/wave-plus/platform-features"
import { TechnicalSpecs } from "@/components/wave-plus/technical-specs"
import { DemoRequest } from "@/components/wave-plus/demo-request"
import { useLanguage } from "@/lib/language-context"

export default function WavePlusPage() {
  const { currentLang } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation />
      <WavePlusHero currentLang={currentLang} />
      <PlatformFeatures currentLang={currentLang} />
      <TechnicalSpecs currentLang={currentLang} />
      <DemoRequest currentLang={currentLang} />
      <Footer />
    </div>
  )
}
