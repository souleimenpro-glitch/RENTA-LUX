import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "Location avec chauffeur" };
export default function ChauffeurPage() {
  return <div className="subpage"><div className="subpage-hero"><span className="eyebrow">RENTA LUX / AVEC CHAUFFEUR</span><h1>Votre temps<br/><em>autrement.</em></h1><p>Décrivez votre trajet et vos attentes. Les demandes sont étudiées individuellement ; aucune disponibilité de conducteur n'est annoncée en temps réel.</p><Link className="button button-dark" href="/reservation/chauffeur">Décrire mon trajet <ArrowUpRight size={16}/></Link></div><div className="subpage-content"><div className="editorial-note"><span>UNE DEMANDE PERSONNALISÉE</span><p>Transferts, déplacements professionnels et mise à disposition sont des pistes de prestations à valider par RENTA LUX avant toute commercialisation.</p></div></div></div>;
}