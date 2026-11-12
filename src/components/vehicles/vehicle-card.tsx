import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users, Settings2 } from "lucide-react";
import type { demoVehicles } from "@/lib/demo-data";

type Vehicle = (typeof demoVehicles)[number];
export function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return <article className={`vehicle-card vehicle-card-${index + 1}`}>
    <Link href="/vehicules" className="vehicle-image">
      <Image src={vehicle.image} alt={vehicle.imageAlt} fill sizes="(max-width: 760px) 90vw, 33vw" />
      <span className="vehicle-index">0{index + 1} / 03</span><span className="vehicle-arrow"><ArrowUpRight size={18}/></span>
    </Link>
    <div className="vehicle-meta"><span>{vehicle.label}</span><span>{vehicle.category}</span></div>
    <h3>{vehicle.name}</h3>
    <div className="vehicle-specs"><span><Users size={15}/>{vehicle.seats} places</span><span><Settings2 size={15}/>{vehicle.transmission}</span></div>
    <div className="vehicle-card-bottom"><span>Tarif communiqué sur demande</span><Link href="/vehicules">Découvrir <ArrowUpRight size={15}/></Link></div>
  </article>;
}