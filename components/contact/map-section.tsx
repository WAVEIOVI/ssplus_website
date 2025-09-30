interface MapSectionProps {
  currentLang: "fr" | "en"
}

const mapContent = {
  fr: {
    title: "Nos Localisations",
    subtitle: "Retrouvez-nous dans nos bureaux de Sfax et Tunis",
  },
  en: {
    title: "Our Locations",
    subtitle: "Find us in our Sfax and Tunis offices",
  },
}

export function MapSection({ currentLang }: MapSectionProps) {
  const t = mapContent[currentLang]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sfax Map */}
          <div className="bg-card rounded-lg border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <h3 className="font-semibold mb-1">
                  {currentLang === "fr" ? "Siège Social - Sfax" : "Headquarters - Sfax"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === "fr" ? "Route de Gabes 3.5 Km, 3000 Sfax " : "Gabes Road Km 3.5, Sfax 3000"}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {currentLang === "fr" ? "Carte interactive disponible" : "Interactive map available"}
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{currentLang === "fr" ? "Siège Social" : "Headquarters"}</h4>
                  <p className="text-sm text-muted-foreground">+216 74 453 027</p>
                </div>
                <button className="text-primary hover:underline text-sm">
                  {currentLang === "fr" ? "Itinéraire" : "Directions"}
                </button>
              </div>
            </div>
          </div>

          {/* Tunis Map */}
          <div className="bg-card rounded-lg border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <h3 className="font-semibold mb-1">{currentLang === "fr" ? "Bureau de Tunis" : "Tunis Office"}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentLang === "fr" ? "Raoued Ariana 2088, Tunisie" : "Raoued Ariana 2088, Tunisia"}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {currentLang === "fr" ? "Carte interactive disponible" : "Interactive map available"}
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{currentLang === "fr" ? "Bureau Tunis" : "Tunis Office"}</h4>
                  <p className="text-sm text-muted-foreground">+216 74 453 027</p>
                </div>
                <button className="text-primary hover:underline text-sm">
                  {currentLang === "fr" ? "Itinéraire" : "Directions"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
