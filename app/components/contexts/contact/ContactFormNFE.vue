<template>
  <div class="haut-formulaire">
    <ContactFormElement v-for="link in links" :key="link.name" :link="link" />
  </div>
</template>

<script setup>
const links = [
  { label: "Nom", name: "lastname", type: "text", rules: "required" },
  { label: "Prénom", name: "firstname", type: "text", rules: "required" },
  { label: "Email", name: "email", type: "email", rules: "required|email" },
];
</script>

<style lang="scss" scoped>
div.haut-formulaire {
  margin-bottom: 12px;
  @apply flex justify-center;
}
</style>
