<template>
  <div>
    <h2>{{ link.content }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
h2 {
  @apply text-xl text-white;
}
div {
  padding: 20px;
}
</style>
