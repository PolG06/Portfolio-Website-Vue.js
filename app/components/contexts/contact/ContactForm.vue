<template>
  <div class="register-form">
    <VeeForm v-slot="{ meta }" @submit="onSubmit">
      <ContactFormTitle />
      <ContactFormNFE />
      <ContactFormSubject />
      <ContactFormContent />
      <div class="button_submit">
        <button type="submit" :disabled="!meta.valid" class="btn-submit">Envoyer</button>
      </div>
    </VeeForm>
  </div>
</template>

<script setup>
const router = useRouter();
import ContactFormTitle from "./ContactFormTitle.vue";
import ContactFormNFE from "./ContactFormNFE.vue";
import ContactFormSubject from "./ContactFormSubject.vue";
import ContactFormContent from "./ContactFormContent.vue";

const onSubmit = (values) => {
  console.log("Données envoyées :", values);
  alert("Votre message a bien été envoyé");
  router.push("/");
};
</script>

<style lang="scss" scoped>
div.register-form {
  @apply flex justify-center flex;
  margin: 30px;
}
div.button_submit {
  margin-top: 15px;
  @apply flex justify-center;
}
button.btn-submit {
  background-color: rgb(184, 181, 181);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
}
</style>
