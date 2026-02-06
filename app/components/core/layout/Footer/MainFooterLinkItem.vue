<template>
  <NuxtLink :to="link.url" class="footer-link">
    {{ link.name }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
.footer-link {
  @apply text-white font-bold text-sm underline;
  &:hover {
    @apply text-gray-400 text-sm;
  }
}
</style>
