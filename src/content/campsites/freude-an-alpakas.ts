import type { CampsiteConfig } from "../types";

const IMG = "/campsites/freude-an-alpakas";

const freudeAnAlpakas: CampsiteConfig = {
  name: "Freude an Alpakas",
  shortName: "Alpakahof",
  slug: "freude-an-alpakas",
  ort: "Glatzau",
  region: "Steiermark",
  brandKind: "Camping an der Alpakaweide",
  regionLong: "Südoststeiermark · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Wo dich morgens die Alpakas begrüßen",
  claimEmphasis: "die Alpakas",
  emailDetail: "euer geschotterter Stellplatz direkt an der Alpakaweide",
  intro:
    "Zwei geschotterte Stellplätze direkt an der Alpakaweide, mit Strom, Wasser und einer neuen Dusche — und morgens schauen dir Gerhards Alpakas und Lamas neugierig beim Frühstück zu.",

  logo: { src: `${IMG}/logo-b2dfc6da2a.png`, alt: "Freude an Alpakas Logo" },

  statement: {
    text: "Wer morgens in neugierige Alpaka-Augen blicken will, ist bei uns genau richtig.",
    emphasis: "neugierige Alpaka-Augen",
  },

  pillars: [
    {
      title: "Direkt an der Alpakaweide",
      text: "Deine beiden Stellplätze grenzen unmittelbar an die Weide — morgens schauen dir die Tiere neugierig über den Zaun zu.",
      image: { src: `${IMG}/gallery-492bc825f1.webp`, alt: "Alpakas und Lamas auf der Weide von Freude an Alpakas" },
    },
    {
      title: "Frei statt eng",
      text: "Für alle, die enge, volle Campingplätze nicht mögen: hier stellst du dich frei und ruhig in die Natur, gleich neben die Tiere.",
      image: { src: `${IMG}/accommodation-63fa539b91.webp`, alt: "Zelt auf dem Stellplatz neben der Alpakaweide" },
    },
    {
      title: "Gerhards Hof",
      text: "Gerhard Unger führt seinen Hof mit biologischer Landwirtschaft, bei der das Wohl der Alpakas und Lamas an erster Stelle steht.",
      image: { src: `${IMG}/gallery-ddd8094e37.webp`, alt: "Gerhard Unger auf einer Wanderung mit Alpakas" },
    },
  ],

  usps: [
    "Direkt an der Alpakaweide",
    "Strom- & Wasseranschluss",
    "Neue Dusche & eigenes WC",
    "Nur zwei ruhige Stellplätze",
    "Alpakawanderung dazubuchbar",
  ],

  trust: {
    heading: "Camping, das es so kaum gibt",
    headingEmphasis: "kaum gibt",
    intro:
      "Nur zwei Stellplätze, direkt an der Alpakaweide und fernab enger Reihen — dazu Ausflugsziele wie die Riegersburg, die Schokomanufaktur Zotter und Graz in Reichweite.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/activity-082ec1edff.webp`, alt: "Gerhard Unger mit einem Alpaka in der Blumenwiese" },
  },

  breather: {
    image: { src: `${IMG}/gallery-0af0401d7a.webp`, alt: "Nahaufnahme eines Alpakas bei Freude an Alpakas" },
    line: "Neugierige Alpakas? Hier garantiert.",
  },

  camping: {
    heading: "Campingidylle an der Alpakaweide",
    intro:
      "Alltagsstress ade: ein ruhiger, geschotterter Platz mitten in der Natur, direkt neben der Weide — mit allem, was eine entspannte Auszeit zu zweit braucht.",
    features: [
      {
        title: "Geschotterter Platz am Hof",
        text: "Ein ruhiger, geschotterter Stellplatz direkt am Hof — mit Wiese, Sitzplatz und viel Raum ringsum statt enger Nachbarn.",
        image: { src: `${IMG}/gallery-95da5b88e5.webp`, alt: "Stellplatz mit Sanitärhaus am Hof von Freude an Alpakas" },
      },
      {
        title: "Strom & Wasser",
        text: "Dein Stellplatz ist mit Strom- und Wasseranschluss ausgestattet — du bist autark versorgt, mitten in der Natur.",
        image: { src: `${IMG}/amenity-5100549734.webp`, alt: "Wohnmobil auf dem Stellplatz mit Stromanschluss" },
      },
      {
        title: "Neue Dusche & WC",
        text: "Eine neue Dusche und eine eigene Toilette stehen dir direkt am Platz zur Verfügung — kein Teilen mit vielen anderen.",
        image: { src: `${IMG}/gallery-f7fedb7842.webp`, alt: "Neue Dusche und WC am Stellplatz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Glatzau",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Südautobahn Richtung Graz und weiter in die Südoststeiermark — die letzten Kilometer nach Glatzau sind ländlich und ruhig; Graz liegt rund 30 Minuten entfernt.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster größerer Bahnhof ist Feldbach in der Südoststeiermark; die letzte Etappe nach Glatzau besprichst du am besten telefonisch mit Gerhard.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Hof",
    headingEmphasis: "Eindrücke",
    intro:
      "Tiere, Stellplatz und Wanderungen — ein paar Aufnahmen, die zeigen, wie ein Tag bei den Alpakas aussieht.",
    tag: "Alpakas & Camping",
    images: [
      { src: `${IMG}/gallery-2e794fdb67.webp`, alt: "Familie auf einer Erlebnistour mit Alpakas" },
      { src: `${IMG}/gallery-d3c4489d1a.webp`, alt: "Wohnwagen auf dem Stellplatz unter Bäumen" },
      { src: `${IMG}/gallery-bc842770fc.webp`, alt: "Waschgelegenheit am Stellplatz" },
      { src: `${IMG}/gallery-46face2f47.webp`, alt: "Blick über den geschotterten Stellplatz" },
    ],
  },

  booking: {
    heading: "Dein Stellplatz an der Alpakaweide",
    headingEmphasis: "an der Alpakaweide",
    intro:
      "Sag uns Zeitraum und Personenzahl — Gerhard meldet sich persönlich und bestätigt dir deinen Platz.",
    pricesArePlaceholder: false,
    priceNote:
      "ab € 34 pro Nacht für 2 Personen mit einem Fahrzeug, inkl. aller Nebenkosten · Stellplatz ca. 30 m²",
    highlight: {
      title: "Direkt an der Weide",
      text: "Vom Stellplatz sind es nur ein paar Schritte bis zu den Alpakas und Lamas.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34 },
    ],
  },

  kontakt: {
    coords: { lat: 46.92006, lng: 15.662456 },
    tel: "+43 664 88 46 27 46",
    telHref: "tel:+4366488462746",
    mail: "gerhard.unger@freude-an-alpakas.at",
    facebook: "https://www.facebook.com/profile.php?id=100063458956406",
    adresse: "Glatzau 42 · 8082 Kirchbach-Zerlach · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default freudeAnAlpakas;
