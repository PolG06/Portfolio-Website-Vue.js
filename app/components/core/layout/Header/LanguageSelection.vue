<template>
  <div class="form-group">
    <label class="label-style">Langue :</label>

    <select v-model="currentLocale" class="select-style">
      <option v-for="lang in userStore.languages" :key="lang.value" :value="lang.value">
        {{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const userStore = useUserStore();
const { locale, setLocale } = useI18n();

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style lang="scss" scoped>
.label-style {
  @apply text-white text-xl;
  margin-right: 10px;
}
</style>
