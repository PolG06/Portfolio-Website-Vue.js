<template>
  <h3>-{{ link }}</h3>
</template>

<script setup>
const props = defineProps({
  link: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
h3 {
  @apply text-white text-xl;
}
</style>
