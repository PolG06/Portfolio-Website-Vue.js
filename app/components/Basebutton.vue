<template>
  <div>
    <button @click="onCustomClick">
      {{ text }}
    </button>

    <button
      v-for="(article, index) in articles"
      :key="`article-${index}`"
      @click="onCustomClick"
    >
      {{ article.name }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true, default: "" },
});

const articles = [{ name: "test" }, { name: "test 2" }, { name: "test 3" }];

const emit = defineEmits(["customClick"]);

const onCustomClick = () => {
  //de la logique
  emit("customClick", true);
};
</script>

<style lang="scss" scoped>
button {
  display: block;
}

h1 {
  @apply text-7xl text-red-500 font-bold pt-4 py-20;
}
</style>
