<template>
  <div class="mx-auto grid grid-cols-12 gap-4">
    <div class="col-span-7">
      <activity-list :activities="activities" />
    </div>
    <div class="col-start-8 col-span-5">
      <activity-details v-if="!isFormOpen" @openEditForm="openEditForm" />
      <activity-form v-else @closeEditForm="closeEditForm" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";
import { useActivitiesStore } from "@/stores/activities";

import ActivityList from "@/components/ActivityList.vue";
import ActivityDetails from "@/components/ActivityDetails.vue";
import ActivityForm from "@/components/ActivityForm.vue";

const isFormOpen = ref<boolean>(false);
const openEditForm = () => (isFormOpen.value = true);
const closeEditForm = () => (isFormOpen.value = false);

const activitiesStore = useActivitiesStore();
onMounted(() => {
  activitiesStore.FETCH_ACTIVITIES();
});
const activities = computed(() => activitiesStore.activities);
</script>
