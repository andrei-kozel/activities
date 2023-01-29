<template>
  <div class="bg-background-300 my-5 p-4 rounded-md w-full">
    <p v-if="!activity">
      <span class="text-sm text-neutral-400">Loading...</span>
    </p>
    <p class="text-2xl bold">{{ activity!.title }}</p>
    <p class="text-sm text-neutral-400 mb-2">{{ activity?.date }}</p>
    <p>{{ activity!.description }}</p>
    <p>{{ activity!.city }}, {{ activity?.venue }}</p>
    <div class="flex mt-2 justify-between items-center">
      <badge :text="activity!.category" />
      <div class="flex flex-row space-x-4">
        <action-button
          type="warning"
          text="Delete"
          @click="deleteActivity(activity!.id)"
        />
        <action-button
          type="primary"
          text="View"
          @click="setActiveActivity(activity!)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IActivity } from "@/types/Activity.interface";
import type { PropType } from "vue";
import { defineProps } from "vue";
import { useActivitiesStore } from "@/stores/activities";
import { useState } from "@/stores/state";

import ActionButton from "@/components/shared/ActionButton.vue";
import Badge from "./shared/Badge.vue";

defineProps({
  activity: Object as PropType<IActivity>,
});

const activityStore = useActivitiesStore();
const state = useState();

const setActiveActivity = (activity: IActivity) => {
  state.EDIT_MODE_OFF();
  activityStore.SET_ACTIVE_ACTIVITY(activity.id);
};

const deleteActivity = (id: string) => {
  activityStore.DELETE_ACTIVITY(id);
};
</script>

<style scoped></style>
