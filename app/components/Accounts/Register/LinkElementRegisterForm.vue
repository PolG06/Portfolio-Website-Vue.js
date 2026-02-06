<template>
  <NuxtLink :to="link.url" class="register-link">
    {{ link.name }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
a.register-link {
  @apply text-white font-weight-600 text-lm underline;
  &:hover {
    @apply text-gray-300 text-lg;
  }
}
</style>
