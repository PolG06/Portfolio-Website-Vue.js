<template>
  <div class="competences-main-container">
    <MainCompetencesContentDomain
      v-for="(item, index) in userStore.competences"
      :key="index"
      :link="item"
    />
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.competences-main-container {
  @apply flex flex-col gap-6;
  padding: 20px;
}

.domain-block {
  @apply flex flex-row;
}

.domain-title {
  @apply text-white font-bold text-xl;
}

.sous-domains-list {
  @apply flex;
  color: white;
}

:deep(h3) {
  @apply text-lg;
  font-weight: 400;
}
</style>
