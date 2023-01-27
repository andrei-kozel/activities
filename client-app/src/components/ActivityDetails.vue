<template>
  <cards-container styles="p-0 overflow-hidden">
    <div class="max-h-[200px] overflow-hidden">
      <img
        class=""
        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
    </div>
    <div class="p-2 mb-3">
      <p class="text-xl">{{ activity?.title }}</p>
      <p class="text-xs text-gray-400">{{ activity?.date }}</p>
      <p>{{ activity?.description }}</p>
    </div>
    <div class="flex">
      <action-button
        type="secondary"
        text="Edit"
        class="w-full rounded-bl-md"
        @click="$emit('openEditForm')"
      />
      <action-button type="cancel" text="Cancel" class="w-full rounded-br-md" />
    </div>
  </cards-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useActivitiesStore } from "@/stores/activities";

import ActionButton from "@/components/shared/ActionButton.vue";
import CardsContainer from "@/components/shared/CardsContainer.vue";

const activityStore = useActivitiesStore();
const activity = computed(() => activityStore.activeActivity);
</script>

<style scoped></style>
