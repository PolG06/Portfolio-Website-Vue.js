<template>
  <div class="projets">
    <MainProjectPageItem
      v-for="(pair, index) in links"
      :key="`main-link-${index}`"
      :link_text="pair[0]"
      :link_link="pair[1]"
    />

    <!--button @click="add">+1</button>
    {{ count }}-->
  </div>
</template>

<script setup>
const links = [
  [
    { name: "Projet 1:", size: 16 },
    {
      name: "Jeu de gestion d'une guilde",
      url: "http://localhost:3000/articles/1",
    },
  ],
  [
    { name: "Projet 2:", size: 16 },
    {
      name: "Petit site Web front-end",
      url: "http://localhost:3000/articles/2",
    },
  ],
  [
    { name: "Projet 3:", size: 16 },
    {
      name: "Gestion d'une bibliothèque de livres",
      url: "http://localhost:3000/articles/3",
    },
  ],
];

/*
const count = ref(0);
const birthdate = ref("24-11-2006");

const add = () => {
  count.value++;
  console.log(count);
};

//const calculatedAge = computed(() => new Date(birthdate.value));
//Ne surtout pas faire: calculatedAge.value=12;
//On ne peut modifier le computed qu'en modifiant les éléments à l'intérieur
*/
</script>

<style lang="scss" scope>
div.projets {
  @apply flex flex-1 flex-col;
}
</style>
