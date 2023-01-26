<template>
  <cards-container>
    <form>
      <form-input placeholder="Title" :value="activity?.title" />
      <form-input placeholder="Description" :value="activity?.description" />
      <form-input placeholder="Date" :value="activity?.date" />
      <form-input placeholder="City" :value="activity?.city" />
      <form-input placeholder="Venue" :value="activity?.venue" />
      <form-input placeholder="Category" :value="activity?.category" />
      <div class="flex justify-end space-x-3 mt-4">
        <action-button type="primary" text="Save" />
        <action-button type="cancel" text="Cancel" class="rounded-md" />
      </div>
    </form>
  </cards-container>
</template>

<script setup lang="ts">
import { useActivitiesStore } from "@/stores/activities";
import { computed } from "vue";

import FormInput from "@/components/shared/FormInput.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import CardsContainer from "@/components/shared/CardsContainer.vue";

const activityStore = useActivitiesStore();
const activity = computed(() => activityStore.activeActivity);
</script>

<style scoped></style>
