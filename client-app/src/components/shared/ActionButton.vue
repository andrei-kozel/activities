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
      return ["primary", "secondary", "cancel"].includes(value);
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
  @apply px-5 py-2 font-medium transition-all duration-100 ease-in-out;
}
.primary {
  @apply bg-transparent border border-green-400 rounded-md text-white hover:bg-green-400 hover:text-neutral-800;
}
.secondary {
  @apply bg-transparent  border border-neutral-400 text-white hover:bg-neutral-400 hover:text-neutral-800;
}
.cancel {
  @apply bg-transparent  hover:text-white border border-neutral-400 text-white hover:bg-red-400 hover:border-red-400;
}
</style>
