<template>
  <NuxtLayout>
    <!--main class="content-view">
      <slot />
    </main-->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const textBoutton = "clique ici";

const onCustomClick = (value) => {
  console.log(value);
};
</script>
