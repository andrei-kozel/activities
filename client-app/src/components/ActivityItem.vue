<template>
  <div class="bg-neutral-600 my-2 p-4 rounded-md max-w-[700px]">
    <p class="text-2xl bold">{{ activity?.title }}</p>
    <p class="text-sm text-neutral-400 mb-2">{{ activity?.date }}</p>
    <p>{{ activity?.description }}</p>
    <p>{{ activity?.city }}, {{ activity?.venue }}</p>
    <div class="flex mt-2">
      <div class="bg-indigo-600 py-1 px-2 rounded-md">
        {{ activity?.category }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { IActivity } from "@/types/Activity.interface";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    activity: Object as PropType<IActivity>,
  },
});
</script>

<style scoped></style>
