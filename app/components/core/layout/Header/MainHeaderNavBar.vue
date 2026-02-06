<template>
  <ul>
    <MainHeaderNavBarItem
      v-for="(link, index) in links"
      :key="`main-link-${index}`"
      :link="link"
    />
  </ul>
</template>

<script setup>
import { computed } from "vue";
const { t } = useI18n();

const links = computed(() => [
  {
    name: t("navbar.home"),
    logo: "images/maison.png",
    url: "/",
  },
  {
    name: t("navbar.competences"),
    logo: "images/skills.png",
    url: "/competences",
  },
  {
    name: t("navbar.projets"),
    logo: "images/dev.png",
    url: "/articles",
  },
  {
    name: t("navbar.contact"),
    logo: "images/contact.png",
    url: "/contact",
  },
]);
</script>

<style lang="scss" scoped>
ul {
  @apply flex flex-1 flex-row;
}
</style>
