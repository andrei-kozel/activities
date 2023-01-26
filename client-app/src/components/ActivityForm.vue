<template>
  <div class="w-full mt-5 p-2 rounded-md overflow-hidden bg-neutral-600">
    <form>
      <form-input placeholder="Title" :value="activity?.title" />
      <form-input placeholder="Description" :value="activity?.description" />
      <form-input placeholder="Date" :value="activity?.date" />
      <form-input placeholder="City" :value="activity?.city" />
      <form-input placeholder="Venue" :value="activity?.venue" />
      <form-input placeholder="Category" :value="activity?.category" />
      <div class="flex justify-end space-x-1 mt-4">
        <action-button type="primary" text="save" />
        <action-button type="secondary" text="cancel" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useActivitiesStore } from "@/stores/activities";
import { computed } from "vue";

import FormInput from "@/components/shared/FormInput.vue";
import ActionButton from "@/components/ActionButton.vue";

const activityStore = useActivitiesStore();
const activity = computed(() => activityStore.activeActivity);
</script>

<style scoped></style>
