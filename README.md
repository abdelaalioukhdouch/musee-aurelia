# Borj Belkari – site vitrine

React + Vite + Tailwind CSS v4 + lucide-react.

## Lancer en local
    npm install
    npm run dev        # http://localhost:5173

## Images
Déposez-les dans `src/images/` (.jpg, .jpeg, .jpe, .png). Leurs noms doivent correspondre à ceux de
`src/data/museumData.js` (ex. hero.jpg, jarre.jpg). Remplacer une photo = même nom de fichier.
Conseil : compresser à moins de 500 Ko (squoosh.app).

## Contenu
Tout le texte (expositions, collection, horaires, tarifs) est dans `src/data/museumData.js`.

## Mise en ligne (GitHub + Netlify)
1. Créer un dépôt GitHub et y envoyer le projet.
2. Sur netlify.com : Add new site > Import from Git > choisir le dépôt (build: `npm run build`, publish: `dist`).
3. Ensuite, chaque commit sur GitHub (y compris l'ajout d'images via Add file > Upload files) redéploie le site.
