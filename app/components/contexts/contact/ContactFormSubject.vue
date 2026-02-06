<template>
  <div class="formulaire">
    <div class="nameandinputonly">
      <label class="label-class">Objet</label>

      <VeeField name="subject" as="select" rules="required" class="input-select">
        <option value="" disabled selected>Sélectionnez un motif</option>

        <option
          v-for="reason in userStore.contactReasons"
          :key="reason.id"
          :value="reason.value"
        >
          {{ reason.label }}
        </option>
      </VeeField>
    </div>
    <VeeErrorMessage name="subject" class="error-message" />
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user.store";

const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.formulaire {
  @apply flex flex-1 flex-col;
  min-width: 250px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 12px;

  .nameandinputonly {
    @apply flex flex-col;
  }

  .label-class {
    @apply text-white font-bold text-sm;
    padding-left: 2px;
  }
}
.error-message {
  color: red;
}
</style>
