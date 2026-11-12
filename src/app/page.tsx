import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck, Clock3, Gem } from "lucide-react";
import { QuickBooking } from "@/components/booking/quick-booking";
import { FleetShowcase } from "@/components/vehicles/fleet-showcase";
import { Reveal } from "@/components/motion/reveal";

export default function HomePage() {
  return <>
    <section className="cinema-hero">
      <Image className="cinema-hero-image" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2600&q=90" alt="Coupé sportif dans un décor architectural au crépuscule" fill priority sizes="100vw"/>
      <div className="cinema-hero-shade"/>
      <div className="hero-topline"><span>RENTA LUX / MOBILITÉ D'EXCEPTION</span><span>FRANCE · SUR DEMANDE</span></div>
      <div className="cinema-hero-content">
        <span className="eyebrow"><i/> THE ART OF PREMIUM MOBILITY</span>
        <h1>Le luxe<br/>de <em>prendre</em><br/>la route.</h1>
        <p>Une autre façon de voyager. Une sélection automobile pensée pour celles et ceux qui accordent de l'importance à chaque détail.</p>
        <div className="hero-actions">
          <Link href="/vehicules" className="button button-champagne">Explorer la flotte <ArrowUpRight size={17}/></Link>
          <Link href="/location-avec-chauffeur" className="hero-secondary-link">Découvrir avec chauffeur <ArrowRight size={16}/></Link>
        </div>
      </div>
      <div className="hero-vertical">L'EXPÉRIENCE COMMENCE AVANT LE DÉPART</div>
      <div className="hero-bottomline"><span>01 <i>/</i> 04</span><span>UNE MOBILITÉ À VOTRE MESURE</span><a href="#reservation" aria-label="Défiler vers la réservation"><ArrowDown size={17}/></a></div>
      <div className="hero-grain"/>
    </section>

    <section className="booking-stage" id="reservation">
      <div className="booking-stage-heading"><span className="eyebrow dark-eyebrow">VOTRE PROCHAINE DESTINATION</span><h2>Tout commence<br/>par <em>une intention.</em></h2></div>
      <QuickBooking/>
      <span className="booking-stage-index">RL / 01</span>
    </section>

    <section className="editorial-section experience-section" id="experience">
      <div className="section-heading-row"><span className="section-number">01 — L'EXPÉRIENCE</span><span className="section-aside">DEUX FAÇONS DE VOYAGER, UNE MÊME EXIGENCE</span></div>
      <div className="editorial-split">
        <Reveal className="editorial-copy">
          <span className="eyebrow dark-eyebrow">01 / LIBERTÉ DE CONDUIRE</span>
          <h2>Votre route.<br/><em>Vos règles.</em></h2>
          <p>Choisissez votre univers automobile, partagez vos dates et votre lieu de prise en charge. Chaque demande est étudiée selon les disponibilités et les conditions qui seront confirmées par RENTA LUX.</p>
          <Link className="under-link" href="/location-sans-chauffeur">Location sans chauffeur <ArrowUpRight size={16}/></Link>
          <span className="editorial-ghost-number">01</span>
        </Reveal>
        <Reveal delay={0.12} className="editorial-image editorial-image-tall">
          <Image src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1700&q=88" alt="Automobile premium dans un environnement urbain" fill sizes="(max-width: 760px) 92vw, 58vw"/>
          <span className="image-caption">SANS CHAUFFEUR <i>—</i> LA LIBERTÉ DU CHOIX</span>
        </Reveal>
      </div>
      <div className="chauffeur-editorial">
        <div className="chauffeur-editorial-image"><Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1700&q=88" alt="Véhicule élégant prêt pour un trajet avec chauffeur" fill sizes="(max-width: 760px) 100vw, 50vw"/></div>
        <div className="chauffeur-editorial-copy">
          <span className="eyebrow">02 / LE CONFORT DU TEMPS RETROUVÉ</span>
          <h2>Arrivez.<br/><em>Le reste suit.</em></h2>
          <p>Un transfert, un rendez-vous professionnel ou une mise à disposition : décrivez votre trajet et vos attentes pour une étude personnalisée.</p>
          <Link className="under-link light-under-link" href="/location-avec-chauffeur">Location avec chauffeur <ArrowUpRight size={16}/></Link>
          <span className="chauffeur-index">02</span>
        </div>
      </div>
    </section>

    <section className="fleet-editorial" id="flotte">
      <div className="fleet-section-inner">
        <div className="section-heading-row section-heading-light"><span className="section-number">02 — NOTRE FLOTTE</span><span className="section-aside">L'EXIGENCE DANS CHAQUE LIGNE</span></div>
        <div className="fleet-title-row">
          <Reveal><span className="eyebrow">UNE SÉLECTION À DÉCOUVRIR</span><h2>La beauté<br/>du <em>choix.</em></h2></Reveal>
          <Reveal delay={0.1} className="fleet-title-aside"><p>Des silhouettes, des caractères et des usages différents. Explorez notre sélection éditoriale et trouvez l'univers qui vous correspond.</p><Link href="/vehicules" className="under-link light-under-link">Voir tous les véhicules <ArrowUpRight size={16}/></Link></Reveal>
        </div>
        <FleetShowcase compact/>
        <div className="fleet-disclaimer"><span/> PRÉSENTATION DE DÉMONSTRATION — véhicules, images et informations non contractuels. La flotte réelle et les tarifs restent à confirmer.</div>
      </div>
    </section>

    <section className="service-editorial">
      <div className="service-editorial-head"><span className="section-number">03 — NOS SERVICES</span><h2>Le déplacement<br/><em>autrement.</em></h2></div>
      <div className="service-editorial-grid">
        <Reveal className="service-visual-card">
          <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=88" alt="Voiture de caractère pour une location sans chauffeur" fill sizes="(max-width: 760px) 100vw, 50vw"/>
          <div className="service-visual-overlay"><span>01 / AUTONOMIE</span><h3>Sans<br/><em>chauffeur.</em></h3><Link href="/location-sans-chauffeur" aria-label="Découvrir la location sans chauffeur"><ArrowUpRight/></Link></div>
        </Reveal>
        <Reveal delay={0.12} className="service-visual-card">
          <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=88" alt="Véhicule pour service de transport avec chauffeur" fill sizes="(max-width: 760px) 100vw, 50vw"/>
          <div className="service-visual-overlay"><span>02 / SÉRÉNITÉ</span><h3>Avec<br/><em>chauffeur.</em></h3><Link href="/location-avec-chauffeur" aria-label="Découvrir le service avec chauffeur"><ArrowUpRight/></Link></div>
        </Reveal>
      </div>
    </section>

    <section className="promise-editorial">
      <div className="section-heading-row"><span className="section-number">04 — NOS ENGAGEMENTS</span><span className="section-aside">LE SENS DU DÉTAIL</span></div>
      <div className="promise-editorial-grid">
        <Reveal><span className="eyebrow dark-eyebrow">L'EXIGENCE RENTA LUX</span><h2>Le premium<br/>n'est pas un mot.<br/><em>C'est une attention.</em></h2></Reveal>
        <div className="promise-editorial-list">
          <Reveal><div className="promise-line"><span>01</span><div><h3>Une demande claire</h3><p>Des informations lisibles et des conditions communiquées avant toute confirmation.</p></div><ShieldCheck/></div></Reveal>
          <Reveal delay={0.08}><div className="promise-line"><span>02</span><div><h3>Le temps respecté</h3><p>Un parcours conçu pour vous permettre de décrire votre besoin sans détour.</p></div><Clock3/></div></Reveal>
          <Reveal delay={0.16}><div className="promise-line"><span>03</span><div><h3>Une approche personnelle</h3><p>Chaque demande mérite une réponse adaptée à votre trajet et à vos attentes.</p></div><Gem/></div></Reveal>
        </div>
      </div>
    </section>

    <section className="closing-cinema">
      <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=88" alt="Automobile élégante dans une lumière de fin de journée" fill sizes="100vw"/>
      <div className="closing-cinema-shade"/>
      <Reveal className="closing-cinema-content"><span className="eyebrow">RENTA LUX — THE ART OF PREMIUM MOBILITY</span><h2>Le prochain départ<br/><em>vous appartient.</em></h2><p>Parlons de votre prochaine expérience.</p><div><Link href="/contact" className="button button-champagne">Faire une demande <ArrowUpRight size={17}/></Link><Link href="/contact" className="hero-secondary-link">Nous contacter <ArrowRight size={16}/></Link></div></Reveal>
      <span className="closing-cinema-mark">RENTA LUX / 2027</span>
    </section>
  </>;
}
