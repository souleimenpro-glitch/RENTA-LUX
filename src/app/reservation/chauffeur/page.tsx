"use client";
import { useEffect, useState } from "react";
export default function DriverRequestPage() {
 const [done,setDone] = useState(false);
 const [date,setDate] = useState("");
 const [pickup,setPickup] = useState("");
 useEffect(() => {
   const params = new URLSearchParams(window.location.search);
   setDate(params.get("date") ?? "");
   setPickup(params.get("lieu") ?? "");
 }, []);
 return <div className="subpage"><div className="subpage-hero"><span className="eyebrow">RENTA LUX / DEMANDE AVEC CHAUFFEUR</span><h1>Votre trajet,<br/><em>vos exigences.</em></h1><p>Décrivez votre besoin. La disponibilité et le tarif devront être confirmés par l'équipe RENTA LUX.</p></div><div className="request-panel"><div className="demo-notice"><span className="notice-dot"/> MODE DÉMONSTRATION — formulaire non connecté à un serveur.</div>{done?<div className="form-success"><h2>Saisie terminée.</h2><p>Aucune demande n'a été envoyée. La connexion backend sera ajoutée après configuration.</p></div>:<form onSubmit={e=>{e.preventDefault();setDone(true)}}><label>Type de prestation<select><option>À définir</option><option>Transfert</option><option>Déplacement professionnel</option><option>Mise à disposition</option></select></label><label>Date souhaitée<input type="date" required value={date} onChange={e=>setDate(e.target.value)}/></label><label>Adresse de départ<input required value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Adresse de départ"/></label><label>Adresse d'arrivée<input placeholder="Adresse d'arrivée"/></label><label>Nombre de passagers<input type="number" min="1" max="50" defaultValue="1"/></label><label>Nombre de bagages<input type="number" min="0" max="30" defaultValue="0"/></label><label>Nom<input required placeholder="Votre nom"/></label><label>E-mail<input type="email" required placeholder="vous@exemple.fr"/></label><label className="full-field">Informations complémentaires<textarea placeholder="Horaires, durée, besoins particuliers…"/></label><button className="button button-dark" type="submit">Vérifier ma saisie</button></form>}</div></div>;
}
