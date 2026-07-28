# CLAUDE.md — Site vitrine Billiet Menuiserie

## Contexte du projet
Site vitrine professionnel pour **Billiet Menuiserie**, entreprise de menuiserie française (30 ans d'expérience).
Objectif : présenter l'entreprise, ses réalisations, ses produits et ses métiers, et permettre la prise de contact.
Site en **français**, **responsive** (mobile + desktop).

## Direction artistique (À RESPECTER STRICTEMENT)
Basée sur le logo (grain de bois / cernes d'arbre, lettre B).

- **Palette :**
  - Vert forêt profond : `#3D5A3D` / `#4A6B4A`
  - Verts sauge (secondaire) : tons plus clairs
  - Fond : blanc cassé / crème
  - Texte : gris anthracite
- **Ambiance :** naturelle, artisanale mais moderne. Références au bois (grain, cernes).
- **Typographie :** titres en CAPITALES, sans-serif élégant et espacé (letter-spacing). Corps de texte lisible et aéré.
- **Baseline officielle :** « L'innovation au service de la tradition »
- **Principe clé :** design épuré, beaucoup d'espace blanc. **TOUT doit être immédiatement visible et lisible** (contrastes forts, jamais de texte sur image sans overlay).

## Structure — 5 pages
Menu de navigation en haut, **sticky/fixe**.

1. **La Menuiserie** (accueil) — hero avec logo + baseline, puis le texte officiel (voir ci-dessous).
2. **Nos Réalisations** — galerie photos en grille, avec légendes.
3. **Nos Produits** — gammes en cartes (fenêtres, portes, volets, vérandas, etc.).
4. **Nos Métiers** — savoir-faire et équipes.
5. **Nous Contacter** — formulaire (nom, email, téléphone, message) + coordonnées + emplacement carte.

## Texte officiel — page « La Menuiserie » (NE PAS MODIFIER)
> **BILLIET MENUISERIE.**
> **DEPUIS TOUJOURS... ET POUR LONGTEMPS**
>
> Depuis 30 ans, Billiet Menuiserie associe les technologies les plus récentes et l'engagement humain de toutes ses équipes. Partenaire de ceux qui construisent l'avenir, Billiet Menuiserie développe des produits de pointe et mène une démarche globale qui associe la haute performance énergétique et la préservation de l'environnement.

## Contraintes techniques
- **Emplacements images** clairement identifiés et **faciles à remplacer** (le client ajoutera ses photos de réalisations et de personnel au fur et à mesure). Utiliser des placeholders propres et commentés.
- **Header** : logo + navigation.
- **Footer** : coordonnées + baseline.
- Navigation fluide entre les 5 pages.

## Règles de développement
- Code propre, commenté aux endroits clés (notamment les zones image à remplacer).
- Composants réutilisables (header, footer, cartes, galerie).
- Accessibilité : contrastes suffisants, textes alternatifs sur les images.
- Ne jamais dégrader la lisibilité au profit de l'esthétique.

## À faire évoluer
- Ajout progressif de photos réelles (réalisations, personnel).
- Intégration d'une vraie carte sur la page contact.
- Connexion du formulaire de contact (email / backend) à définir.
