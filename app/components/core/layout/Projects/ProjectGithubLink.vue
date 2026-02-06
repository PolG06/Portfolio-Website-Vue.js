<template>
  <div>
    <NuxtLink :to="link.lien_github" class="linkgithub" target="_blank">
      <h2>Voir sur Github: {{ link.lien_github }}</h2>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
.linkgithub {
  @apply text-white font-bold text-xl underline;
  &:hover {
    @apply text-gray-400 text-xl;
  }
}

div {
  padding: 20px;
  padding-bottom: 40px;
}
</style>
