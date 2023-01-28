<template>
  <cards-container v-show="showEditForm">
    <form>
      <form-input placeholder="Title" v-model="activity.title" />
      <form-input placeholder="Description" v-model="activity.description" />
      <form-input placeholder="Date" v-model="activity.date" />
      <form-input placeholder="City" v-model="activity.city" />
      <form-input placeholder="Venue" v-model="activity.venue" />
      <form-input placeholder="Category" v-model="activity.category" />
      <div class="flex justify-end space-x-3 mt-4">
        <action-button type="primary" text="Save" @click.prevent="submitForm" />
        <action-button
          type="cancel"
          text="Cancel"
          class="rounded-md"
          @click.prevent="handleCloseForm"
        />
      </div>
    </form>
  </cards-container>
</template>

<script setup lang="ts">
import type { IActivity } from "@/types/Activity.interface";
import { useActivitiesStore } from "@/stores/activities";
import { computed, ref, onUpdated } from "vue";
import { useState } from "@/stores/state";
import { v4 as uuid } from "uuid";

import FormInput from "@/components/shared/FormInput.vue";
import ActionButton from "@/components/shared/ActionButton.vue";
import CardsContainer from "@/components/shared/CardsContainer.vue";

const activityStore = useActivitiesStore();
const activeActivity = computed(() => activityStore.activeActivity);

const initialState = computed(
  () =>
    activeActivity.value ?? {
      category: "",
      city: "",
      date: "",
      description: "",
      id: "",
      title: "",
      venue: "",
    }
);

const activity = ref<IActivity>(initialState.value);

onUpdated(() => {
  if (activeActivity.value) {
    activity.value = activeActivity.value;
  } else {
    activity.value = {
      category: "",
      city: "",
      date: "",
      description: "",
      id: "",
      title: "",
      venue: "",
    };
  }
});

const submitForm = () => {
  if (activity.value.id) {
    const updatedActivity = {
      title: activity.value.title,
      description: activity.value.description,
      category: activity.value.category,
      date: activity.value.date,
      venue: activity.value.venue,
      city: activity.value.city,
    };

    activityStore.UPDATE_ACTIVITY(updatedActivity, activity.value.id);
  } else {
    activity.value.id = uuid();
    activity.value.date = new Date().toISOString();
    activityStore.CREATE_ACTIVITY(activity.value);
  }
};

const state = useState();
const showEditForm = computed(() => state.editMode);
const handleCloseForm = () => {
  state.EDIT_MODE_OFF();
};
</script>
