# Billiet Menuiserie — Site vitrine

Site vitrine statique (HTML / CSS / JavaScript pur, sans build) pour **Billiet
Menuiserie**. Voir [`CLAUDE.md`](CLAUDE.md) pour la spécification complète
(contexte, direction artistique, contenu officiel).

## Aperçu local

Aucune installation requise. Deux options :

```bash
# 1. Ouvrir directement le fichier
#    -> double-cliquer sur index.html

# 2. Ou servir le dossier (recommandé, pour des chemins propres)
python3 -m http.server 8000
#    -> http://localhost:8000
```

## Structure des fichiers

```
index.html          # La Menuiserie (accueil : hero + texte officiel)
realisations.html   # Nos Réalisations (galerie)
produits.html       # Nos Produits (cartes de gammes)
metiers.html        # Nos Métiers (savoir-faire + équipes)
contact.html        # Nous Contacter (formulaire + coordonnées + carte)
css/style.css       # Charte graphique complète (variables, composants, responsive)
js/main.js          # Menu mobile, lien actif, formulaire de contact
assets/logo.svg     # Logo PLACEHOLDER (à remplacer par le logo officiel)
assets/images/      # Photos du client (réalisations, personnel, produits)
```

## Comment remplacer les images

Les emplacements sont des blocs `.img-placeholder` précédés d'un commentaire
HTML explicite. Pour mettre une vraie photo, remplacez le bloc par une balise
`<img>` :

```html
<!-- avant -->
<div class="img-placeholder">Réalisation 01</div>

<!-- après -->
<img src="assets/images/realisation-01.jpg" alt="Fenêtres bois-alu, rénovation">
```

Renseignez toujours l'attribut `alt` (accessibilité + référencement).

## À faire évoluer

- Remplacer le logo (`assets/logo.svg`) et les photos placeholder.
- Intégrer une vraie carte sur `contact.html` (iframe Google Maps — exemple en
  commentaire dans le fichier).
- Connecter le formulaire de contact à un service d'email / backend
  (actuellement, l'envoi est une démonstration côté navigateur).
- Renseigner les coordonnées réelles (adresse, téléphone, email) dans le footer
  et sur la page contact.
