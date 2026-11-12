# RENTA LUX — site vitrine Next.js

Projet de démonstration construit avec Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion et Lucide.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir ensuite http://localhost:3000.

## Vérification et compilation

```bash
npm run typecheck
npm run build
```

## Contenu de démonstration

- Les véhicules, catégories, visuels, marques et modèles du catalogue sont illustratifs et ne constituent pas une flotte commerciale confirmée.
- Aucun tarif journalier officiel n'a été communiqué. Les fiches affichent donc « Sur demande ». Le champ `pricePerDay` dans `src/lib/demo-data.ts` est volontairement `null` et peut être renseigné lorsque les tarifs réels seront validés.
- Les formulaires permettent de préparer une demande et de vérifier la saisie dans l'interface, mais ne transmettent aucun message : aucun backend, service e-mail, paiement, compte client ou système de disponibilité n'est connecté.
- Les coordonnées, mentions commerciales et conditions de location doivent être validées avant publication.

## Structure utile

- `src/app/page.tsx` : accueil éditorial et sections de services.
- `src/app/vehicules/page.tsx` : catalogue complet.
- `src/components/vehicles/fleet-showcase.tsx` : filtres, cartes et animations du catalogue.
- `src/lib/demo-data.ts` : données de démonstration et configuration tarifaire à renseigner.
- `src/app/globals.css` : direction artistique et responsive.
