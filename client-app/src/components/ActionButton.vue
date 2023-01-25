<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
const props = defineProps({
  text: { type: String, required: true },
  type: {
    type: String,
    required: true,
    default: "primary",
    validator(value: string) {
      return ["primary", "secondary"].includes(value);
    },
  },
});
const { type } = toRefs(props);
const buttonClass = computed(() => {
  return {
    [type.value]: true,
  };
});
</script>

<style scoped>
button {
  @apply px-5 py-2 font-medium;
}
.primary {
  @apply rounded-md bg-blue-600 text-white hover:shadow-md hover:bg-blue-700;
}
.secondary {
  @apply bg-transparent bg-blue-600 hover:bg-blue-700 hover:text-white;
}
</style>
