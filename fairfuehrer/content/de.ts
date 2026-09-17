/**
 * Every visible string on the site.
 *
 * Nothing here is invented: each value traces back to docs/company.md, which in
 * turn marks whether it came from the live site or was derived from it. Numbers,
 * prices and claims must not be edited without a source.
 *
 * Keeping copy out of the components is what makes an English version a matter
 * of adding content/en.ts rather than reopening every file.
 */

export const de = {
  meta: {
    title: "FAIRFÜHRER, der Audioguide für nachhaltiges Leben und Reisen",
    description:
      "Über 600 nachhaltige Orte am Bodensee und im Allgäu, je eine Geschichte von rund 100 Sekunden. Kostenlos, werbefrei, gemeinwohlorientiert.",
    locale: "de_DE",
  },

  nav: {
    brand: "FAIRFÜHRER",
    links: [
      { label: "Karte", href: "/karte" },
      { label: "Mitmachen", href: "/mitmachen" },
      { label: "Partner*in werden", href: "/partner-werden/voraussetzungen" },
      { label: "Über uns", href: "/ueber-uns" },
    ],
    cta: { label: "App laden", href: "#app" },
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
  },

  hero: {
    headline: "Der Audioguide für nachhaltiges Leben und Reisen",
    subline:
      "Tippe auf einen PIN und hör in 100 Sekunden die Geschichte dahinter. Über 600 Orte am Bodensee und im Allgäu.",
    primary: { label: "Zur Karte", href: "/karte" },
    secondary: { label: "App laden", href: "#app" },
    imageAlt:
      "Abstrakte Grafik aus weichen Formen in Sand, Salbeigrün und Orange, als Platzhalter für Fotografie aus der Region",
  },

  stats: [
    { value: "600+", label: "Stationen" },
    { value: "100", label: "Sekunden pro Geschichte" },
    { value: "0 €", label: "zum Starten" },
  ],

  problem: {
    headline: "Gute Geschichten verdienen Gehör.",
    body: "Menschen und Projekte, die ihre Region besser machen, gehen neben großen Schlagzeilen oft unter. Der Fairführer macht sie sichtbar und hörbar.",
  },

  how: {
    eyebrow: "So funktioniert es",
    headline: "Drei Schritte, hundert Sekunden.",
    steps: [
      {
        title: "Karte öffnen",
        body: "In der App oder im Browser. Die PINs um dich herum erscheinen sofort.",
      },
      {
        title: "PIN antippen",
        body: "Jeder PIN steht für einen Ort, einen Betrieb oder ein Projekt in der Nähe.",
      },
      {
        title: "Zuhören",
        body: "Rund 100 Sekunden, oft erzählt von den Menschen, die dahinterstehen.",
      },
    ],
    example: {
      title: "Lindauer Hafen",
      caption: "Zwischen Löwe und Leuchtturm",
      duration: "1:40",
      note: "Beispiel-Audio folgt",
      play: "Beispiel anhören",
    },
  },

  categories: {
    headline: "Fünf Arten, die Region zu entdecken.",
    items: [
      {
        name: "Sehenswertes",
        body: "Orte mit Geschichte, erzählt von den Menschen, die sie heute prägen.",
      },
      {
        name: "Einkaufen",
        body: "Kleine Läden mit Haltung, die du sonst nie gefunden hättest.",
      },
      {
        name: "Engagement",
        body: "Vereine, Projekte und Initiativen, die ihre Region bewegen.",
      },
      {
        name: "Unternehmen & Handwerk",
        body: "Betriebe, die wirtschaftlichen Erfolg mit Verantwortung verbinden.",
      },
      {
        name: "Essen & Übernachten",
        body: "Regional essen und nachhaltig schlafen, direkt am Weg.",
      },
    ],
    cta: { label: "Zur Karte", href: "/karte" },
  },

  plus: {
    headline: "Kostenlos starten, freiwillig mehr geben.",
    body: "Der Fairführer ist kostenlos nutzbar. Nur die Kategorie Sehenswertes ist zur Hälfte eingeschränkt. Wer Fairführer+ freischaltet, hört ein Jahr lang alles und bekommt die Karte offline dazu.",
    free: {
      name: "Kostenlos",
      price: "0 €",
      features: [
        "Alle PINs auf der Karte",
        "Vier Kategorien vollständig",
        "Sehenswertes zur Hälfte",
      ],
    },
    paid: {
      name: "Fairführer+",
      price: "Preis frei wählbar",
      features: [
        "Ein Jahr voller Zugriff",
        "Offline-Karte",
        "Hält den Fairführer werbefrei",
      ],
      cta: { label: "Fairführer+ freischalten", href: "/register/consumer" },
    },
  },

  partners: {
    eyebrow: "Für Partner*innen",
    headline: "Mach deine Geschichte hörbar.",
    body: "Zwei Wege, auf die Karte zu kommen. Beide beginnen mit demselben Anspruch: erkennbares Engagement für die Region.",
    free: {
      name: "Kostenloser PIN",
      price: "Kostenlos",
      note: "Einmalig erstellt, später nicht mehr änderbar.",
      features: [
        "Ein Titelbild",
        "Beschreibung und Audiobeitrag",
        "Ein Label oder Zertifikat",
        "Eine Kategorie",
      ],
    },
    paid: {
      name: "Partner-PIN",
      price: "Preis nach Vertrauen",
      note: "Jederzeit selbst bearbeitbar.",
      features: [
        "Bis zu sechs Bilder",
        "Website-Link und Telefonnummer mit Anruf-Funktion",
        "Austauschbares Audio",
        "Mehrere Labels",
        "Unterstützt die Weiterentwicklung",
      ],
    },
    prices: {
      title: "Empfehlungen",
      rows: [
        { who: "Gemeinnützig", amount: "freiwillig" },
        { who: "Bis 5 Mitarbeitende", amount: "50 €" },
        { who: "Bis 50 Mitarbeitende", amount: "100 €" },
        { who: "Bis 500 Mitarbeitende", amount: "200 €" },
      ],
      footnote: "Laufzeit wird noch ergänzt.",
    },
    requirements: {
      title: "Voraussetzungen",
      body: "Gemeinwohlorientierte Organisationen brauchen erkennbares Engagement für eines der 17 UN-Nachhaltigkeitsziele. Kommerzielle Betriebe ein Nachhaltigkeits-, Regional- oder Sozialzertifikat, oder als Kleinbetrieb auf dem Weg dorthin eine Empfehlung unseres Teams.",
      link: { label: "Voraussetzungen ansehen", href: "/partner-werden/voraussetzungen" },
    },
    cta: { label: "Partner*in werden", href: "/register/partner" },
  },

  contribute: {
    headline: "Du kennst einen Ort, der fehlt?",
    body: "Schlag ihn vor. Die Redaktion prüft jeden Vorschlag, bevor er auf die Karte kommt.",
    steps: [
      { title: "Entdecken", body: "Ein Ort, ein Betrieb, ein Projekt, das Gehör verdient." },
      { title: "Einreichen", body: "Kurz beschreiben, worum es geht und warum es zählt." },
      { title: "Prüfen", body: "Die Redaktion gleicht den Vorschlag mit den Aufnahmekriterien ab." },
      { title: "Teilen", body: "Der PIN geht live und die Geschichte ist hörbar." },
    ],
    cta: { label: "PIN vorschlagen", href: "/register/consumer" },
  },

  trust: {
    headline: "Unsere Spielregeln",
    items: [
      {
        title: "17 Ziele als Maßstab",
        body: "Die Aufnahmekriterien orientieren sich an den Nachhaltigkeitszielen der Vereinten Nationen.",
      },
      {
        title: "Zehn Prozent weiter",
        body: "Zehn Prozent der Überschüsse gehen an nachhaltige Projekte.",
      },
      {
        title: "Werbefrei und unabhängig",
        body: "Kein Ranking gegen Bezahlung, keine Anzeigen. Betrieben von der Seenergien GmbH.",
      },
    ],
    link: { label: "Aufnahmekriterien", href: "/partner-werden/voraussetzungen" },
  },

  app: {
    headline: "Nimm die Geschichten mit.",
    body: "Die App kennt deinen Standort und zeigt dir, was in Hörweite liegt.",
    appStore: {
      label: "Im App Store laden",
      href: "https://apps.apple.com/de/app/fairf%C3%BChrer/id6778095803",
    },
    playStore: {
      label: "Bei Google Play laden",
      href: "https://play.google.com/store/apps/details?id=com.fairfuehrer.app",
    },
  },

  footer: {
    operator: "Seenergien GmbH",
    address: ["Hintere Insel 1", "88131 Lindau"],
    management: "Geschäftsführung: Frank Gebhard",
    email: "info@fairfuehrer.guide",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/fairfuehrer/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61561084330676" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Cookie-Einstellungen", href: "/cookies" },
    ],
    copyright: "© 2026 FAIRFÜHRER",
    since: "Seit April 2021 unterwegs am Bodensee, im Allgäu und darüber hinaus.",
  },
} as const;

export type Content = typeof de;
