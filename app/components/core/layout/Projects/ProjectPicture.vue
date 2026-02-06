<template>
  <div class="projectpicturediv">
    <NuxtImg :src="link.image" class="projectpicture" />
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
.projectpicturediv {
  display: flex;
  justify-content: center;
}
.projectpicture {
  height: 500px;
  width: 1000px;
}
</style>
