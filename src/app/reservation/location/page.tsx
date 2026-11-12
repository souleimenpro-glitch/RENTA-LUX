"use client";
import { useEffect, useState } from "react";
export default function RentalRequestPage() {
  const [vehicle,setVehicle] = useState("");
  const [pickup,setPickup] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  const [sent,setSent] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setVehicle(params.get("vehicule") ?? "");
    setPickup(params.get("lieu") ?? "");
    setStartDate(params.get("date") ?? "");
    setEndDate(params.get("retour") ?? "");
  }, []);
  return <div className="subpage"><div className="subpage-hero"><span className="eyebrow">RENTA LUX / DEMANDE DE LOCATION</span><h1>Commençons<br/><em>par vos dates.</em></h1><p>Décrivez votre projet. Cette version prépare une demande de démonstration et ne crée pas encore de réservation réelle.</p></div><div className="request-panel"><div className="demo-notice"><span className="notice-dot"/> MODE DÉMONSTRATION — aucune demande n'est envoyée.</div>{sent?<div className="form-success"><h2>Votre saisie est prête.</h2><p>Ce retour est local au navigateur : aucune réservation ni demande n'a été transmise.</p><button className="button button-dark" onClick={()=>setSent(false)}>Modifier mes informations</button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Véhicule souhaité<input value={vehicle} onChange={e=>setVehicle(e.target.value)} placeholder="Modèle ou catégorie souhaitée"/></label><label>Lieu de prise en charge<input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Ville ou adresse"/></label><label>Date de départ<input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)}/></label><label>Date de retour<input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)}/></label><label>Nom et prénom<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Votre nom"/></label><label>Adresse e-mail<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="vous@exemple.fr"/></label><label className="full-field">Votre besoin<textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Précisez votre demande…"/></label><button className="button button-dark" type="submit">Vérifier ma saisie</button></form>}</div></div>;
}
