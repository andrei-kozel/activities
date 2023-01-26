<template>
  <div
    class="border border-indigo-400 px-3 py-2 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-indigo-400 transition duration-100 ease-in-out h-fit"
  >
    <span class="text-sm leading-3">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
