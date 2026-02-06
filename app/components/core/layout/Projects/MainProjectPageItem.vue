<template>
  <div class="pageitem">
    <MainFooterTextItem v-if="link_text" :link="link_text" />
    <MainFooterLinkItem class="red" v-if="link_link" :link="link_link" />
  </div>
</template>

<script setup>
const props = defineProps({
  link_text: { type: Object, required: true },
  link_link: { type: Object, required: true },
});
</script>
<style lang="scss" scope>
div.pageitem {
  @apply flex flex-1 flex-row;
  text-align: center;
  border-radius: 50px;
}
.red {
  padding-top: 25px;
}
</style>
