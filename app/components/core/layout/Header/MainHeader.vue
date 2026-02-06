<template>
  <div id="main-header">
    <div class="header-logo">
      <Applogo />
    </div>

    <div class="header-navbar">
      <MainHeaderNavBar />
    </div>
    <div class="language-selection">
      <LanguageSelection />
    </div>
    <div class="account">
      <MainHeaderNavBarItem v-if="links" :link="links" />
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const links = computed(() => ({
  name: t("navbar.account"),
  logo: "images/contact.png",
  url: "/register",
}));
</script>

<style lang="scss" scoped>
#main-header {
  @apply flex flex-row gap-5;
  background-color: #10264b;
  .header {
    &-logo {
      @apply flex flex-col;
    }
    &-navbar {
      @apply flex flex-1 flex-row;
    }
  }
}
.language-selection {
  @apply flex items-center justify-center;
}
.account {
  @apply flex items-center justify-center;
}
</style>
