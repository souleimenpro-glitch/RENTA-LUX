import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div><Link href="/" className="footer-brand">RENTA <span>LUX.</span></Link><p>The art of premium mobility.</p></div>
      <div className="footer-cta"><span>Votre prochain trajet commence ici.</span><Link href="/reservation/chauffeur">Parlons de votre trajet <ArrowUpRight size={16}/></Link></div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} RENTA LUX — Projet en préparation.</span>
      <div><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité</Link><Link href="/contact">Contact</Link></div>
      <span className="footer-note">Informations commerciales à confirmer</span>
    </div>
  </footer>;
}