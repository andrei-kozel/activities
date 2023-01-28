<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      class="w-full p-1 rounded-sm bg-neutral-300 text-neutral-800 my-2"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  placeholder: { type: String, required: true },
  modelValue: { type: String, required: false, default: "" },
});
</script>
