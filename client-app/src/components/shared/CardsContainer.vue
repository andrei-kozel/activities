<template>
  <div :class="computedStyles">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  styles: {
    type: String,
    required: false,
    default: "",
  },
});

const computedStyles = computed(() => {
  return props.styles + " bg-background-300 my-5 p-4 rounded-md w-full";
});
</script>
