(function () {
  "use strict";

  var VOIX = [
    { id: "soprano", nom: "Soprano" },
    { id: "alto",    nom: "Alto" },
    { id: "tenor",   nom: "Ténor" },
    { id: "basse",   nom: "Basse" },
    { id: "tous",    nom: "Tous pupitres", special: true }
  ];

  var enLigne = /^https?:$/.test(location.protocol);

  function el(tag, classe, texte) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texte) e.textContent = texte;
    return e;
  }

  // Vérifie qu'un fichier existe (uniquement une fois le site en ligne)
  function existe(url) {
    if (!enLigne) return Promise.resolve(true);
    return fetch(url, { method: "HEAD" })
      .then(function (r) {
        var type = r.headers.get("content-type") || "";
        return r.ok && type.indexOf("text/html") === -1;
      })
      .catch(function () { return false; });
  }

  // Une seule piste audio à la fois
  function arreterLesAutres(courant) {
    document.querySelectorAll("audio").forEach(function (a) {
      if (a !== courant) a.pause();
    });
  }

  function ligneVoix(m, voix) {
    var base = "morceaux/" + m.dossier + "/" + voix.id;
    var ligne = el("div", "voix" + (voix.special ? " voix-tous" : ""));
    ligne.appendChild(el("span", "voix-nom", voix.nom));

    var audio = el("audio");
    audio.controls = true;
    // "metadata" : la durée est connue dès l'affichage, ce qui permet de
    // cliquer sur la barre de progression avant même de lancer la lecture
    audio.preload = "metadata";
    audio.addEventListener("play", function () { arreterLesAutres(audio); });
    var zoneAudio = el("div", "voix-audio");
    zoneAudio.appendChild(audio);

    var pdf = el("a", "bouton", "Partition PDF");
    pdf.href = base + ".pdf";
    pdf.target = "_blank";
    pdf.rel = "noopener";

    ligne.appendChild(zoneAudio);
    ligne.appendChild(pdf);

    existe(base + ".mp3").then(function (ok) {
      if (ok) {
        audio.src = base + ".mp3";
      } else {
        zoneAudio.innerHTML = "";
        zoneAudio.appendChild(el("span", "absent", "Audio non disponible"));
      }
    });
    existe(base + ".pdf").then(function (ok) {
      if (!ok) {
        pdf.removeAttribute("href");
        pdf.removeAttribute("target");
        pdf.classList.add("desactive");
        pdf.textContent = "PDF non disponible";
        pdf.setAttribute("aria-disabled", "true");
      }
    });

    return ligne;
  }

  function carte(m, index) {
    var id = "morceau-" + (index + 1);
    var c = el("article", "carte");
    c.id = id;

    var tete = el("div", "carte-tete");
    tete.appendChild(el("h2", null, m.titre));
    if (m.compositeur) tete.appendChild(el("p", "compositeur", m.compositeur));
    c.appendChild(tete);

    if (m.notes) {
      var notes = el("div", "notes");
      notes.appendChild(el("h3", null, "Notes du chef"));
      notes.appendChild(el("p", null, m.notes));
      c.appendChild(notes);
    }

    var liste = el("div", "voix-liste");
    VOIX.forEach(function (v) { liste.appendChild(ligneVoix(m, v)); });
    c.appendChild(liste);

    if (m.youtube) {
      var yt = el("a", "bouton bouton-youtube", "Voir sur YouTube");
      yt.href = m.youtube;
      yt.target = "_blank";
      yt.rel = "noopener";
      c.appendChild(yt);
    }
    return c;
  }

  var conteneur = document.getElementById("morceaux");
  var sommaire = document.getElementById("sommaire");
  var sommaireListe = document.getElementById("sommaire-liste");

  if (typeof MORCEAUX === "undefined" || !MORCEAUX.length) {
    conteneur.appendChild(el("p", "vide", "Aucun morceau pour le moment."));
    return;
  }

  MORCEAUX.forEach(function (m, i) {
    conteneur.appendChild(carte(m, i));
    var li = el("li");
    var a = el("a", null, m.titre);
    a.href = "#morceau-" + (i + 1);
    li.appendChild(a);
    sommaireListe.appendChild(li);
  });
  if (MORCEAUX.length > 1) sommaire.hidden = false;
})();
