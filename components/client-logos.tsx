import Image from "next/image"

interface ClientLogosProps {
  currentLang: "fr" | "en"
}

const clientLogos = {
  fr: {
    title: "Ils Nous Font Confiance",
    subtitle: "Plus de 500 entreprises tunisiennes nous font confiance",
  },
  en: {
    title: "They Trust Us",
    subtitle: "Over 500 Tunisian companies trust us",
  },
}

export function ClientLogos({ currentLang }: ClientLogosProps) {
  const t = clientLogos[currentLang]

  // Actual client logos from the clients logos folder - all with consistent sizing
  const basePath = "/ssplus_website"
  const logos = [
    { name: "Weatherford International", src: `${basePath}/images/clients logos/weatherford_international_logo.jpg` },
    { name: "SAH Lilas", src: `${basePath}/images/clients logos/sah_lilas.webp` },
    { name: "Chahia", src: `${basePath}/images/clients logos/chahia.jpg` },
    { name: "Delice", src: `${basePath}/images/clients logos/delice.jpg` },
    { name: "OMV", src: `${basePath}/images/clients logos/omv.avif` },
    { name: "Logo", src: `${basePath}/images/clients logos/logo.png` },
    { name: "Perenco", src: `${basePath}/images/clients logos/perenco.png` },
    { name: "PSI", src: `${basePath}/images/clients logos/PSI.jpg` },
    { name: "Serinus Tunisie", src: `${basePath}/images/clients logos/serinus-tunisie.jpg` },
    { name: "CC Logo", src: `${basePath}/images/clients logos/LOGO-CC-410-277.jpg` },
    { name: "Client 1", src: `${basePath}/images/clients logos/1699729366162.jpg` },
    { name: "Client 2", src: `${basePath}/images/clients logos/images.jpg` },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center opacity-60">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-full px-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              {logo.src ? (
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={120} 
                  height={60} 
                  className="max-h-12 max-w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="text-sm font-semibold text-muted-foreground text-center">{logo.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
