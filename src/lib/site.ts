export const siteConfig = {
  name: "RENTA LUX",
  tagline: "The art of premium mobility",
  country: "France",
  // Coordonnées officielles à fournir avant publication.
  contactEmail: "",
  phone: "",
  address: "",
  demoMode: true,
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Nos véhicules", href: "/vehicules" },
  { label: "Avec chauffeur", href: "/location-avec-chauffeur" },
  { label: "Notre approche", href: "/a-propos" },
];