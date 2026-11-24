/*
  ====================================================================
  LISTE DES MORCEAUX – c'est le seul fichier à modifier
  ====================================================================

  Pour ajouter un morceau :
  1. Créez un dossier dans "morceaux/" (ex. : morceaux/ave-verum/)
     et déposez-y les fichiers avec EXACTEMENT ces noms :
        soprano.pdf   soprano.mp3
        alto.pdf      alto.mp3
        tenor.pdf     tenor.mp3
        basse.pdf     basse.mp3
        tous.pdf      tous.mp3      (partition et audio de toutes les voix)
     Il n'est pas obligatoire de tout mettre : ce qui manque apparaît
     grisé sur la page.
  2. Copiez un bloc { ... } ci-dessous, collez-le à la suite (sans oublier
     la virgule entre deux blocs) et complétez-le.

  Champs :
    dossier      : nom du dossier dans "morceaux/" (sans espaces ni accents)
    titre        : titre affiché
    compositeur  : facultatif (laisser "" si inutile)
    notes        : notes du chef (facultatif, les retours à la ligne sont conservés)
    youtube      : lien YouTube (facultatif, laisser "" si inutile)

  Les morceaux s'affichent dans l'ordre de cette liste.
*/

const MORCEAUX = [
  {
    dossier: "chant-des-partisans",
    titre: "Chant des partisans",
    compositeur: "Joseph Kessel, Maurice Druon",
    notes: ""/*To complete \nTo complete*/,
    youtube: "https://www.youtube.com/watch?v=xGZi9TX0Bnw"
  }
];


/*const MORCEAUX = [
  {
    dossier: "chant-des-partisans",
    titre: "Chant des partisans",
    compositeur: "Joseph Kessel, Maurice Druon",
    notes: "TO complete \nTo complete",
    youtube: "https://www.youtube.com/watch?v=xGZi9TX0Bnw"
  },
  {
    dossier: "exemple-2",
    titre: "Titre du deuxième morceau",
    compositeur: "",
    notes: "",
    youtube: ""
  }
];
*/
