<template>
  <div class="footer">
    <div class="footer-freetowork">
      <MainFooterTextItem v-if="link_ftw" :link="link_ftw" />
    </div>

    <div class="footer-freetowork">
      <MainFooterContact />
    </div>

    <div class="footer-copyright">
      <MainFooterTextItem v-if="link_cpr" :link="link_cpr" />
    </div>
  </div>
</template>

<script setup>
const link_ftw = { name: "#FreeToWork", size: 40 };
const link_cpr = {
  name: "© Portfolio de Pol Guymarc 2026 | Tous droits réservés",
  size: 16,
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #10264b;
}
.footer-freetowork {
  margin-bottom: 20px;
}
</style>
