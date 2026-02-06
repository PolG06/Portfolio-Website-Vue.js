<template>
  <div class="projet-introuvable">
    <h2>Erreur: Projet introuvable</h2>
    <NuxtLink to="http://localhost:3000/articles/" class="retour">Retour</NuxtLink>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.projet-introuvable {
  padding-top: 100px;
  @apply flex flex-1 flex-col justify-center items-center;
}
h2 {
  @apply text-white text-xl;
}
.retour {
  padding-top: 30px;
  @apply text-white text-xl underline;
  &:hover {
    @apply text-gray-400 font-bold text-xl;
  }
}
</style>
