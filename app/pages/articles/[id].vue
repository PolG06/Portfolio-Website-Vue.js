<template>
  <div v-if="project">
    <ProjectName :link="project" />
    <ProjectPicture :link="project" />
    <ProjectContent :link="project" />
    <ProjectGithubLink :link="project" />
  </div>

  <div v-else class="introuvable">
    <ProjetIntrouvable />
  </div>
</template>

<script setup>
const route = useRoute();
/* const router = useRouter()
const query = route.query;
*/
const datas = [
  {
    name: "Jeu de Gestion d'une Guilde",
    image: "images/jeuAvalonia.png",
    content:
      "Il s'agit de mon projet de la fin de mon module C# de ma 2ème année de Bachelor en Informatique, ce projet est l'aboutissement d'une semaine d'apprentissage et est axé autour du Template Avalonia. Le but de ce projet est de gérer une guilde de soldats, d’effectuer des missions et de gérer les ressources de la guilde. Les fonctionnalités principales sont: l'utilisation d’interfaces C# et de bibliothèques standards .NET, l'utilisation de POO et du principe d'héritage, la mise en place d'une interface graphique interactive avec un menu et plusieurs fenêtres. Il présente aussi l'utilisation du pattern Singleton, de constructeurs privés et de l’encapsulation des variables.",
    lien_github: "https://github.com/PolG06/Jeu-de-gestion-guilde",
  },

  {
    name: "Site Web de Voyage",
    image: "images/siteweb.png",
    content:
      "Voici le travail que j'ai rendu à la fin de mon module HTML/CSS/JS de 1ère année de Bachelor. L'objectif était de faire un site web sur le thème du voyage avec uniquement la partie front-end. Nous avions eu une semaine pour l'effectuer. Ce site est multi-plateforme puisqu'il embarque la fonctionnalité du responsive.",
    lien_github: "https://github.com/PolG06/SupDeVoyage_version_finale",
  },

  {
    name: "Gestion d'une bibliothèque de livres",
    image: "images/jeuPython.png",
    content:
      "Il s'agit de mon projet de la fin de mon module python de ma 2ème année de Bachelor en Informatique, ce projet est l'aboutissement d'une semaine d'apprentissage. Le but de ce fichier est de gérer une bibliothèque de livres. Les Fonctionnalités principales sont: l'ajout, la suppression et la recherche de livres. Il Utilise la POO et le principe d'héritage. Il implémente également la sauvegarde automatique dans un fichier JSON ainsi que l'export des données en CSV. Vous pouvez tester le code grâce Tests unitaires complets avec pytest. Ce projet n'est pas abouti mais il implémente quand même une petite interface graphique interactive.",
    lien_github: "https://github.com/PolG06/Python_B2",
  },
];

const project = computed(() => {
  const idArticle = parseInt(route.params.id);
  if (idArticle <= 3) {
    return datas[idArticle - 1];
  } else {
    return null;
  }
});
</script>

<style></style>
