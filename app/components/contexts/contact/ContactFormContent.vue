<template>
  <div class="formulaire">
    <div class="nameandinputonly">
      <label class="label-class">Message</label>
      <VeeField
        name="content"
        as="textarea"
        type="text"
        rules="required"
        class="subject-field"
      />
    </div>
    <VeeErrorMessage name="subject" class="error-message" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.formulaire {
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
.subject-field {
  height: 400px;
}
.error-message {
  color: red;
}
</style>
