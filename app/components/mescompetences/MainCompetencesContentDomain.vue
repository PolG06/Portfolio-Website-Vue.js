<template>
  <div class="competence-section">
    <h2>-{{ links.domain }}:</h2>
    <div class="sous-domains-list">
      <MainCompetencesContentSousDomain
        v-for="(link, index) in links.sous_domains"
        :key="`main-link-${index}`"
        :link="link"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  links: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
h2 {
  @apply text-white text-3xl font-bold;
}
div.sous-domains-list {
  margin: 10px;
}
</style>
