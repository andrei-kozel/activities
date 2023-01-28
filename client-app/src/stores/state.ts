import { ref } from "vue";
import { defineStore } from "pinia";
import { useActivitiesStore } from "@/stores/activities";

export const useState = defineStore("state", () => {
  const editMode = ref(false);

  const EDIT_MODE_ON = (id?: string) => {
    // fix for bug where edit mode is not turned off when creating new activity
    EDIT_MODE_OFF();
    editMode.value = true;
    const activityStore = useActivitiesStore();

    if (id == undefined) {
      activityStore.CLEAR_ACTIVE_ACTIVITY();
    } else {
      activityStore.SET_ACTIVE_ACTIVITY(id);
    }
  };

  const EDIT_MODE_OFF = () => {
    editMode.value = false;
  };

  return { editMode, EDIT_MODE_ON, EDIT_MODE_OFF };
});
