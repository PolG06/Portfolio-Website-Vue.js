<template>
  <div>
    <h2>{{ link.name }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
h2 {
  @apply text-4xl text-white font-bold;
}
div {
  margin-top: 40px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
</style>
