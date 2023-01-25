<template>
  <div class="mx-auto grid grid-cols-12 gap-4">
    <div class="col-span-7">
      <activity-list :activities="activities" />
    </div>
    <div class="col-start-9 col-span-5">
      <activity-details />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useActivitiesStore } from "@/stores/activities";

import ActivityList from "@/components/ActivityList.vue";
import ActivityDetails from "@/components/ActivityDetails.vue";

const activitiesStore = useActivitiesStore();

onMounted(() => {
  activitiesStore.FETCH_ACTIVITIES();
});

const activities = computed(() => activitiesStore.activities);
</script>
