import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { IActivity } from "@/types/Activity.interface";
import { getActivities } from "@/services/getActivities";

export const useActivitiesStore = defineStore("activities", () => {
  const activities = ref<IActivity[]>([]);

  const FETCH_ACTIVITIES = async () => {
    const result = await getActivities();
    activities.value = result;
  };

  return { activities, FETCH_ACTIVITIES };
});
