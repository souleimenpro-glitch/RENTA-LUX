"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="RENTA LUX, accueil">
          <span className="brand-mark">R<span>.</span></span>
          <span className="brand-word">RENTA <b>LUX</b><small>PREMIUM MOBILITY</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/reservation/location">Réserver <ArrowUpRight size={15}/></Link>
        <button className="mobile-menu-button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Navigation mobile">
        {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/reservation/location" className="mobile-nav-cta" onClick={() => setOpen(false)}>Demander une réservation <ArrowUpRight size={16}/></Link>
      </nav>}
    </header>
  );
}