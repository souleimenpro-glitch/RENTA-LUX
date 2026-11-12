import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "RENTA LUX — The art of premium mobility", template: "%s | RENTA LUX" },
  description: "Découvrez l'univers RENTA LUX : location automobile sans chauffeur et demandes de mobilité avec chauffeur. Projet en préparation.",
  openGraph: { title: "RENTA LUX — The art of premium mobility", description: "Une autre idée du déplacement.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${manrope.variable} ${inter.variable}`}><Header/><main>{children}</main><Footer/></body></html>;
}