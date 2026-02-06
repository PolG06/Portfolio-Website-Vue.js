<template>
  <MainFooterLinkItem
    v-for="(link, index) in links"
    :key="`main-link-${index}`"
    :link="link"
  />
</template>

<script setup>
const links = [
  {
    name: " Découvrez tous mes projets sur mon Github",
    url: "https://github.com/PolG06",
  },
  {
    name: "Suivez-moi sur Linked In",
    url: "https://www.linkedin.com/in/pol-guymarc-98641a390/",
  },
  {
    name: "Consultez mon CV",
    url:
      "https://drive.google.com/file/d/1D7CiVYYh-CGcbH1WArgb45CRx3FIv1m9/view?usp=sharing",
  },
];
</script>

<style lang="scss" scoped>
a {
  margin-top: 10px;
  text-align: center;
  @apply flex flex-1 flex-col;
}
</style>
