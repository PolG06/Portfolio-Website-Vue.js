<template>
  <div>
    <MainFooterLinkItem
      v-for="(link, index) in links"
      :key="`main-link-${index}`"
      :link="link"
      class="register-link"
    />
  </div>
</template>

<script setup>
const links = [
  {
    name: "Retour vers le menu principal",
    url: "http://localhost:3000/",
  },
  {
    name: "Connexion à un compte existant",
    url: "http://localhost:3000/login/",
  },
];
</script>

<style lang="scss" scoped>
div {
  @apply flex flex-row justify-center items-center gap-16 py-8;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.register-link {
  @apply text-lg;
}
</style>
