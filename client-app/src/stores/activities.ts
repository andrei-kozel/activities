import { ref } from "vue";
import { defineStore } from "pinia";
import type { IActivity } from "@/types/Activity.interface";
import { getActivities } from "@/services/getActivities";

export const useActivitiesStore = defineStore("activities", () => {
  const activities = ref<IActivity[]>([]);
  const activeActivity = ref<IActivity | null>(null);

  const CREATE_ACTIVITY = async (activity: IActivity) => {
    const state = useState();
    state.EDIT_MODE_ON();
    await createActivity(activity);
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
    SET_ACTIVE_ACTIVITY(activities.value[0]);
  };

  const SET_ACTIVE_ACTIVITY = (activity: IActivity) => {
    activeActivity.value = activity;
  };

  return { activities, activeActivity, FETCH_ACTIVITIES, SET_ACTIVE_ACTIVITY };
});
