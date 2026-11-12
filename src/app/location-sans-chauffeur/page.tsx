import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "Location sans chauffeur" };
export default function RentalPage() {
  return <div className="subpage"><div className="subpage-hero"><span className="eyebrow">RENTA LUX / SANS CHAUFFEUR</span><h1>La liberté<br/><em>de conduire.</em></h1><p>Choisissez une catégorie et transmettez vos dates. Les conditions, la flotte et les tarifs seront publiés après validation par l'entreprise.</p><Link className="button button-dark" href="/vehicules">Explorer les catégories <ArrowUpRight size={16}/></Link></div><div className="subpage-content"><div className="editorial-note"><span>AVANT VOTRE DEMANDE</span><p>Les critères d'âge, documents, dépôt de garantie, assurance, kilométrage et conditions d'annulation sont à fournir et à valider. Aucun engagement contractuel n'est proposé dans cette version.</p></div></div></div>;
}