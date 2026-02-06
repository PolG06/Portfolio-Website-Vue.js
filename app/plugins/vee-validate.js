import {Form, Field, FieldArray, ErrorMessage, defineRule} from 'vee-validate'
import {required, email, digits} from '@vee-validate/rules'

defineRule('required',required)
defineRule('email',email)
//possibilité de créer nos propres Rules
defineRule('postalCode', (value) => {
  return digits(value, { length: 5 });
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VeeForm', Form)
  nuxtApp.vueApp.component('VeeField', Field)
  nuxtApp.vueApp.component('VeeFieldArray', FieldArray)
  nuxtApp.vueApp.component('VeeErrorMessage', ErrorMessage)
})