<template>
  <div class="checkbox">
    <VeeField
      :name="link.name"
      type="checkbox"
      :rules="link.rules"
      :value="true"
      :unchecked-value="false"
      class="checkbox-input"
    />
    <label :for="link.name" class="checkbox-label">
      {{ link.label }}
    </label>
    <VeeErrorMessage :name="link.name" class="error-message" />
  </div>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.checkbox {
  @apply flex items-center gap-3 mb-4 cursor-pointer;

  .checkbox-input {
    @apply w-5 h-5 cursor-pointer;
  }

  .checkbox-label {
    @apply text-white text-sm cursor-pointer;
  }

  .error-message {
    @apply text-red-500 text-xs block;
  }
}
</style>
