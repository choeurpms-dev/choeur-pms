# Site du chœur PMS

## Contenu du dossier

- `index.html`, `style.css`, `app.js` : le site (à ne pas modifier)
- `morceaux.js` : **la liste des morceaux, seul fichier à modifier**
- `logo.png` : à ajouter plus tard (le site fonctionne sans)
- `morceaux/` : un sous-dossier par morceau, contenant les PDF et MP3

## Ajouter un morceau

1. Dans `morceaux/`, créez un dossier (ex. `ave-verum`, sans espaces ni accents).
2. Déposez-y les fichiers avec ces noms exacts :

   | Voix | Partition | Audio |
   |---|---|---|
   | Soprano | `soprano.pdf` | `soprano.mp3` |
   | Alto | `alto.pdf` | `alto.mp3` |
   | Ténor | `tenor.pdf` | `tenor.mp3` |
   | Basse | `basse.pdf` | `basse.mp3` |
   | Tous pupitres | `tous.pdf` | `tous.mp3` |

   Ce qui manque apparaît grisé sur le site. Vous pouvez donc ajouter les fichiers au fur et à mesure.
3. Ouvrez `morceaux.js`, copiez un bloc `{ ... }`, collez-le à la suite (virgule entre deux blocs) et remplissez titre, notes du chef et lien YouTube.

## Ajouter le logo

Déposez un fichier `logo.png` à côté de `index.html`.

## Tester sur son ordinateur

Ouvrez simplement `index.html` dans le navigateur.

## Mise en ligne

Voir les explications données dans la conversation (GitHub + Cloudflare Pages).
