import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Fuel, Settings2, Users } from "lucide-react";
import { demoVehicles } from "@/lib/demo-data";
import { FleetShowcase } from "@/components/vehicles/fleet-showcase";

export const metadata: Metadata = {
  title: "Notre flotte",
  description: "Explorez la sélection automobile éditoriale RENTA LUX. Véhicules et tarifs de démonstration à confirmer.",
};

export default function VehiclesPage() {
  return <div className="catalog-page">
    <section className="catalog-masthead">
      <div className="catalog-masthead-image"><Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=88" alt="Coupé sportif photographié dans une lumière cinématique" fill priority sizes="100vw"/></div>
      <div className="catalog-masthead-shade"/>
      <div className="catalog-masthead-content"><span className="eyebrow"><i/> RENTA LUX / COLLECTION</span><h1>La flotte<br/><em>en mouvement.</em></h1><p>Une sélection de silhouettes et de catégories pour imaginer votre prochaine expérience automobile.</p><span className="catalog-masthead-index">01 — {demoVehicles.length.toString().padStart(2, "0")}</span></div>
    </section>
    <section className="catalog-content">
      <div className="catalog-intro-row"><div><span className="eyebrow dark-eyebrow">SÉLECTION ÉDITORIALE</span><h2>Choisissez votre<br/><em>caractère.</em></h2></div><p>Filtrez par catégorie et découvrez les caractéristiques de chaque véhicule présenté. Les marques, modèles, équipements, disponibilités et tarifs commerciaux seront renseignés après validation de la flotte officielle.</p></div>
      <div className="catalog-demo-alert"><span/> MODE DÉMONSTRATION — véhicules et visuels illustratifs. Aucun véhicule n'est actuellement confirmé comme disponible à la location.</div>
      <FleetShowcase/>
      <div className="catalog-contact"><div><span className="eyebrow dark-eyebrow">UN BESOIN PARTICULIER ?</span><h2>Votre demande<br/><em>commence ici.</em></h2></div><Link href="/contact" className="button button-dark">Parler à l'équipe <ArrowUpRight size={17}/></Link></div>
    </section>
  </div>;
}
