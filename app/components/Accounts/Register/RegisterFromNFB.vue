<template>
  <form @submit.prevent="onSubmit" class="register-form-container">
    <div class="haut-formulaire">
      <RegisterFromElement
        v-for="link in links.slice(0, 3)"
        :key="link.name"
        :link="link"
      />
    </div>

    <div class="mid-formulaire">
      <RegisterFromElement v-for="link in links.slice(3)" :key="link.name" :link="link" />
    </div>

    <div class="bas-formulaire">
      <RegisterFromCheckbox v-for="link in checkboxes" :key="link.name" :link="link" />
    </div>

    <div class="button-submit">
      <button type="submit" :disabled="!meta.valid" class="btn-submit">
        Créer un compte
      </button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";
const router = useRouter();
import RegisterFromCheckbox from "./RegisterFromCheckbox.vue";
const { meta, handleSubmit } = useForm();

const links = [
  { label: "Nom", name: "lastname", type: "text", rules: "required" },
  { label: "Prénom", name: "firstname", type: "text", rules: "required" },
  {
    label: "Ville",
    name: "city",
    type: "text",
    rules: "required",
  },
  {
    label: "Code Postal",
    name: "postalCode",
    type: "number",
    rules: "required|postalCode",
  },
  {
    label: "Adresse mail",
    name: "email",
    type: "email",
    rules: "required|email",
  },
  {
    label: "Mot de passe",
    name: "password",
    type: "password",
    rules: "required",
  },
];

const checkboxes = [
  {
    label: "J'accepte les conditions générales d'utilisation",
    name: "acceptTerms",
    rules: "required",
  },
  {
    label: "S'inscrire à la newsletter",
    name: "newsletter",
    rules: "",
  },
];

const onSubmit = handleSubmit((values) => {
  console.log("Données reçues:", values);
  alert("Votre compte a bien été créé");
  router.push("/");
});
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 12px;
  @apply flex;
}
.bas-formulaire {
  @apply flex flex-1 flex-col;
  padding-left: 50px;
}
button.btn-submit {
  background-color: rgb(184, 181, 181);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
}
.button-submit {
  @apply flex flex-1 justify-center;
}
</style>
