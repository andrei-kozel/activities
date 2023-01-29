import type { IActivity } from "@/types/Activity.interface";
import { ref } from "vue";
import { defineStore } from "pinia";
import { getActivities } from "@/services/getActivities";
import { createActivity } from "@/services/createActivity";
import { useState } from "./state";
import { updateActivity } from "@/services/updateActivity";

export const useActivitiesStore = defineStore("activities", () => {
  const activities = ref<IActivity[]>([]);
  const activeActivity = ref<IActivity | null>(null);

  const CREATE_ACTIVITY = async (activity: IActivity) => {
    const state = useState();
    state.EDIT_MODE_ON();
    await createActivity(activity);
    activities.value.push(activity);
    state.EDIT_MODE_OFF();
  };

  const UPDATE_ACTIVITY = async (activity: Partial<IActivity>, id: string) => {
    const state = useState();
    state.EDIT_MODE_ON();
    await updateActivity(activity, id);
    state.EDIT_MODE_OFF();
  };

  const FETCH_ACTIVITIES = async () => {
    const result = await getActivities();
    activities.value = result;
  };

  const SET_ACTIVE_ACTIVITY = (id: string) => {
    activeActivity.value = activities.value.find(
      (activity) => activity.id === id
    )!;
  };

  const CLEAR_ACTIVE_ACTIVITY = () => {
    activeActivity.value = null;
  };

  return {
    activities,
    activeActivity,
    FETCH_ACTIVITIES,
    SET_ACTIVE_ACTIVITY,
    CLEAR_ACTIVE_ACTIVITY,
    CREATE_ACTIVITY,
    UPDATE_ACTIVITY,
  };
});
