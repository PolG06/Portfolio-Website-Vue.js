<template>
  <div class="register-form-element">
    <div class="nameandinputonly">
      <label class="label-class">{{ link.label }}</label>
      <VeeField :name="link.name" :type="link.type" :rules="link.rules" />
    </div>

    <VeeErrorMessage :name="link.name" style="color: red" />
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
.register-form-element {
  @apply flex flex-1 flex-col;
  min-width: 250px;
  margin-right: 40px;
  margin-left: 40px;

  .nameandinputonly {
    @apply flex flex-col;
  }

  .label-class {
    @apply text-white font-bold text-sm;
    padding-left: 2px;
  }
}
</style>
