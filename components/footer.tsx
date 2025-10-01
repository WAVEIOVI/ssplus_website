"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Footer() {
  const { currentLang } = useLanguage()
  const t = getTranslation("footer", currentLang)

  const basePath = "/ssplus_website"
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src={`${basePath}/images/ss plus logo footer.png`}
              alt="SS PLUS"
              width={220}
              height={60}
              className="h-16 md:h-18 w-auto max-w-[240px]"
              loading="lazy"
            />
            <p className="text-sm text-neutral-400">{t.tagline}</p>
            <p className="text-xs text-neutral-500">ISO 9001 Certified Since 2010</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/about#history" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.history}
                </Link>
              </li>
              <li>
                <Link href="/about#certifications" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.certifications}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-semibold mb-4">
              {t.products} & {t.services}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/firefighting" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.firefighting}
                </Link>
              </li>
              <li>
                <Link href="/products/ppe" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.ppe}
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.maintenance}
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.training}
                </Link>
              </li>
              <li>
                <a href="http://137.74.46.234" className="text-neutral-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  {t.waveplus}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-neutral-400">{t.sfax}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-neutral-400">{t.tunis}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+21671123456" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@ssplus.tn" className="text-neutral-400 hover:text-primary transition-colors">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} SS PLUS. {t.rights}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-primary transition-colors">
              {t.privacy}
            </Link>
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-primary transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
