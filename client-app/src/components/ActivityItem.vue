<template>
  <div class="bg-neutral-600 my-5 p-4 rounded-md w-full">
    <p class="text-2xl bold">{{ activity!.title }}</p>
    <p class="text-sm text-neutral-400 mb-2">{{ activity?.date }}</p>
    <p>{{ activity!.description }}</p>
    <p>{{ activity!.city }}, {{ activity?.venue }}</p>
    <div class="flex mt-2 justify-between">
      <div
        class="bg-indigo-600 py-1 px-2 rounded-md flex justify-center items-center"
      >
        {{ activity!.category }}
      </div>
      <action-button
        type="primary"
        text="View"
        @click="setActiveActivity(activity!)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IActivity } from "@/types/Activity.interface";
import type { PropType } from "vue";
import { defineProps } from "vue";
import { useActivitiesStore } from "@/stores/activities";

import ActionButton from "@/components/ActionButton.vue";

defineProps({
  activity: Object as PropType<IActivity>,
});

const activityStore = useActivitiesStore();
const setActiveActivity = (activity: IActivity) => {
  activityStore.SET_ACTIVE_ACTIVITY(activity);
};
</script>

<style scoped></style>
