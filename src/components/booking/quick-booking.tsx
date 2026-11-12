"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CalendarDays, MapPin, CarFront, UserRound } from "lucide-react";

export function QuickBooking() {
  const [service, setService] = useState<"rental" | "chauffeur">("rental");
  const [pickup, setPickup] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();
  const today = new Date().toLocaleDateString("en-CA");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams({ service: service === "rental" ? "Location sans chauffeur" : "Location avec chauffeur" });
    if (pickup.trim()) params.set("lieu", pickup.trim());
    if (startDate) params.set("date", startDate);
    if (endDate) params.set("retour", endDate);
    router.push(`/reservation/${service === "rental" ? "location" : "chauffeur"}?${params.toString()}`);
  }

  return <section className="booking-wrap" aria-label="Démarrer une demande">
    <div className="booking-tabs" role="tablist" aria-label="Type de service">
      <button className={service === "rental" ? "active" : ""} aria-selected={service === "rental"} onClick={() => setService("rental")} type="button"><CarFront size={16}/> Sans chauffeur</button>
      <button className={service === "chauffeur" ? "active" : ""} aria-selected={service === "chauffeur"} onClick={() => setService("chauffeur")} type="button"><UserRound size={16}/> Avec chauffeur</button>
    </div>
    <form className="booking-form" onSubmit={submit}>
      <label className="booking-field"><span>{service === "rental" ? "Lieu de prise en charge" : "Adresse de départ"}</span><div><MapPin size={17}/><input value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Ville ou adresse" /></div></label>
      <label className="booking-field"><span>Date de départ</span><div><CalendarDays size={17}/><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} min={today} /></div></label>
      <label className="booking-field"><span>{service === "rental" ? "Date de retour" : "Date de fin (facultatif)"}</span><div><CalendarDays size={17}/><input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} min={startDate || today} /></div></label>
      <button className="booking-submit" type="submit">Continuer <ArrowRight size={17}/></button>
    </form>
    <p className="booking-disclaimer">Demande indicative — disponibilité, conditions et tarif à confirmer par RENTA LUX.</p>
  </section>;
}
