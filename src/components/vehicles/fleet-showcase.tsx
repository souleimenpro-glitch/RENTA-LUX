"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Fuel, Settings2, Users, CalendarDays } from "lucide-react";
import { demoVehicles } from "@/lib/demo-data";

const categories = ["Tout", "Berline", "SUV", "Prestige", "Van"] as const;

export function FleetShowcase({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<(typeof categories)[number]>("Tout");
  const reduce = useReducedMotion();
  const filtered = useMemo(
    () => active === "Tout" ? demoVehicles : demoVehicles.filter((vehicle) => vehicle.category === active),
    [active]
  );

  return (
    <div className="fleet-showcase">
      <div className="fleet-toolbar">
        <div className="fleet-filters" role="tablist" aria-label="Filtrer les véhicules par catégorie">
          {categories.map((category) => (
            <button
              type="button"
              role="tab"
              aria-selected={active === category}
              className={active === category ? "fleet-filter is-active" : "fleet-filter"}
              key={category}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="fleet-count">{filtered.length.toString().padStart(2, "0")} VÉHICULES</span>
      </div>

      <motion.div layout className={`fleet-cards ${compact ? "is-compact" : ""}`}>
        <AnimatePresence mode="popLayout">
          {filtered.map((vehicle, index) => (
            <motion.article
              layout
              key={vehicle.id}
              className="lux-vehicle-card"
              id={vehicle.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              exit={reduce ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55, delay: reduce ? 0 : (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/vehicules#${vehicle.id}`} className="lux-vehicle-visual" aria-label={`Découvrir ${vehicle.name}`}>
                <Image src={vehicle.image} alt={vehicle.imageAlt} fill sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 31vw" />
                <span className="vehicle-status">SÉLECTION ÉDITORIALE</span>
                <span className="vehicle-visual-arrow"><ArrowUpRight size={19} /></span>
                <span className="vehicle-visual-index">0{index + 1} <i>/</i> 0{filtered.length}</span>
              </Link>
              <div className="lux-vehicle-body">
                <div className="lux-vehicle-overline"><span>{vehicle.brand}</span><span>{vehicle.category}</span></div>
                <h3>{vehicle.name}</h3>
                <div className="lux-vehicle-specs">
                  <span><Users size={14} /> {vehicle.seats} places</span>
                  <span><Settings2 size={14} /> {vehicle.transmission}</span>
                  <span><Fuel size={14} /> {vehicle.energy}</span>
                </div>
                <div className="lux-vehicle-bottom">
                  <div className="vehicle-price">
                    <small>TARIF INDICATIF</small>
                    {vehicle.pricePerDay ? <strong>{vehicle.pricePerDay} € <em>/ jour</em></strong> : <strong>Sur demande</strong>}
                  </div>
                  <div className="vehicle-actions">
                    <Link href={`/vehicules#${vehicle.id}`} className="vehicle-discover">Découvrir <ArrowUpRight size={15} /></Link>
                    <Link href={`/reservation/location?vehicule=${encodeURIComponent(vehicle.name)}`} className="vehicle-book" aria-label={`Faire une demande pour ${vehicle.name}`}><CalendarDays size={15} /> Réserver</Link>
                  </div>
                </div>
                <p className="vehicle-demo-footnote">Donnée de démonstration · flotte et tarif à confirmer</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
