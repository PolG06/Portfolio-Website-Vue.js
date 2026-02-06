<template>
  <NuxtLink :to="localePath(link.url)" class="nav-link">
    <NuxtImg :src="link.logo" class="nav-img" />
    <h2 class="nav-title">{{ link.name }}</h2>
  </NuxtLink>
</template>

<script setup>
const localePath = useLocalePath();
const props = defineProps({
  link: { type: Object, required: true, default: null },
});
</script>

<style lang="scss" scoped>
a {
  @apply flex flex-col justify-center items-center;
  margin-right: 15px;
  margin-left: 15px;
  width: 170px;

  &:hover {
    background-color: #1c2e4c;
  }
}
img {
  width: 40px;
  height: 40px;
}

h2 {
  @apply text-xl text-white font-bold;
  margin-top: 10px;
}
</style>
