"use client";
import {useEffect, useState} from "react";
export default function ContactPage(){
  const [done,setDone]=useState(false);
  const [message,setMessage]=useState("");
  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    const service=params.get("service"), lieu=params.get("lieu"), depart=params.get("depart"), retour=params.get("retour"), vehicule=params.get("vehicule");
    const details=[service && `Service : ${service}`,vehicule && `Véhicule souhaité : ${vehicule}`,lieu && `Lieu : ${lieu}`,depart && `Départ : ${depart}`,retour && `Retour / fin : ${retour}`].filter(Boolean);
    if(details.length) setMessage(`${details.join("\n")}\n\nPrécisez votre demande ici.`);
  },[]);
  return <div className="subpage"><div className="subpage-hero"><span className="eyebrow">RENTA LUX / CONTACT</span><h1>Parlons de<br/><em>votre projet.</em></h1><p>Partagez votre demande. Les coordonnées officielles seront ajoutées dès qu'elles seront communiquées.</p></div><div className="request-panel"><div className="demo-notice"><span className="notice-dot"/> MODE DÉMONSTRATION — aucun message n'est transmis.</div>{done?<div className="form-success"><h2>Saisie vérifiée.</h2><p>Ce formulaire n'est pas encore relié à un service d'e-mail. Aucune demande n'a été envoyée.</p></div>:<form onSubmit={e=>{e.preventDefault();setDone(true)}}><label>Nom<input required placeholder="Votre nom"/></label><label>E-mail<input type="email" required placeholder="vous@exemple.fr"/></label><label className="full-field">Message<textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="Comment pouvons-nous vous aider ?"/></label><button className="button button-dark">Vérifier ma saisie</button></form>}</div></div>
}
