// src/data/museumData.js
// Les images sont désignées par leur NOM DE FICHIER dans src/images (jpg, jpeg, jpe, png).
// Données du Borj Belkari (Meknès). Les infos marquées "À CONFIRMER" sont des valeurs provisoires :
// remplacez-les par les données officielles. 

export const MUSEUM = { name: "Borj Belkari", tagline: "Musée de la poterie du Rif et du Pré-Rif",
  heroImage: "hero.jpg",
  heroTitle: "Borj Belkari,\nla terre cuite du Rif au cœur de Meknès",
  heroSubtitle: "Une tour de guet du XVIIᵉ siècle, devenue musée de la poterie du Rif et du Pré-Rif.",
};

export const NAV_LINKS = [
  { label: "Expositions", href: "#expositions" },
  { label: "Collections", href: "#collections" },
  { label: "Infos Pratiques", href: "#infos" },
  { label: "Billetterie", href: "#billetterie" },
];

// À CONFIRMER : horaires non fournis
export const QUICK_HOURS = [
  { days: "Mercredi – Lundi", hours: "9h – 18h" },
  { days: "Mardi", hours: "Fermé" },
  { days: "Entrée", hours: "10 DH" },
];

// Expositions fictives : status = "current" | "upcoming"
export const EXHIBITIONS = [
  { id: 1, title: "Le feu et la terre", dates: "Exposition permanente", status: "current",
    image: "feu-et-terre.jpg", description: "Du modelage au four, les gestes des potières du Rif et du Pré-Rif expliqués pièce après pièce." },
  { id: 2, title: "Motifs berbères", dates: "Octobre 2026 – mars 2027", status: "current",
    image: "motifs-berberes.jpg", description: "Losanges, triangles et lignes : le langage décoratif des poteries, et ce qu'il raconte." },
  { id: 3, title: "Une tour de guet devenue musée", dates: "Printemps 2027", status: "upcoming",
    image: "tour.jpg", description: "L'histoire du bastion construit à la fin du XVIIᵉ siècle sous Moulay Ismaïl, de la défense au musée." },
  { id: 4, title: "Potiers d'aujourd'hui", dates: "Automne 2027", status: "upcoming",
    image: "potiers.jpg", description: "Rencontre avec les artisans qui font vivre la tradition, démonstrations de tournage à l'appui." },
];

export const EXHIBITION_FILTERS = [
  { id: "all", label: "Toutes" },
  { id: "current", label: "En cours" },
  { id: "upcoming", label: "À venir" },
];

export const STATUS_LABELS = { current: "En cours", upcoming: "À venir" };

// Pièces fictives de la collection (champ "artist" = origine, "year" = époque)
export const MASTERPIECES = [
  { id: 1, title: "Grande jarre à provisions", artist: "Atelier du Rif", year: "XIXᵉ siècle", technique: "Terre cuite, décor peint", image: "jarre.jpg", span: "row-span-2" },
  { id: 2, title: "Plat à décor géométrique", artist: "Pré-Rif", year: "XXᵉ siècle", technique: "Terre cuite engobée", image: "plat.jpg", span: "" },
  { id: 3, title: "Cruche à eau", artist: "Atelier du Rif", year: "XXᵉ siècle", technique: "Terre cuite", image: "cruche.jpg", span: "" },
  { id: 4, title: "Tajine de cérémonie", artist: "Pré-Rif", year: "XIXᵉ siècle", technique: "Terre cuite, décor noir", image: "tajine.jpg", span: "" },
  { id: 5, title: "Vase à anses", artist: "Atelier du Rif", year: "XIXᵉ siècle", technique: "Terre cuite modelée", image: "vase.jpg", span: "row-span-2" },
  { id: 6, title: "Brûle-parfum", artist: "Pré-Rif", year: "XXᵉ siècle", technique: "Terre cuite", image: "parfum.jpg", span: "" },
];

export const PRACTICAL_INFO = {
  access: {
    address: "Borj Belkari, au nord-ouest de la Kasbah, près de Bab Mansour Laalej et de la place Lalla Ouda, Meknès",
    lines: ["Mercredi – Lundi : 9h – 18h", "Fermé le mardi"], // À CONFIRMER
    transport: "GPS : 33°53'33.6\"N 5°33'50.7\"W",
  },
  prices: [
    { label: "Entrée", price: "10 DH" }, // ≈ 1 €
    { label: "Groupes et scolaires", price: "Sur demande" },
  ],
  // À CONFIRMER : services proposés sur place
  services: [
    { icon: "shop", label: "Boutique", text: "Poteries et créations d'artisans de la région." },
    { icon: "guide", label: "Visites guidées", text: "Sur réservation, en français, arabe et anglais." },
    { icon: "access", label: "Accessibilité PMR", text: "À confirmer avec l'accueil avant votre visite." },
  ],
};

export const FOOTER_LINKS = ["Programmation", "Visites guidées", "Groupes & scolaires", "Mécénat", "Presse", "Contact"];
export const LEGAL_LINKS = ["Mentions légales", "Politique de confidentialité", "Cookies", "Plan du site"];
