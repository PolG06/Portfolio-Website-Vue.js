<template>
  <h2 :style="{ fontSize: link.size + 'px' }">{{ link.name }}</h2>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
h2 {
  padding: 25px;
  @apply text-white font-bold text-7xl;
}
</style>
