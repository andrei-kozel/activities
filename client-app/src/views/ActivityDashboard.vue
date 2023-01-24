<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <ActivityList :activities="activities" />
  </div>
</template>

<script lang="ts" setup>
import ActivityList from "@/components/ActivityList.vue";
import { onMounted } from "vue";
import { useActivitiesStore } from "@/stores/activities";

const activitiesStore = useActivitiesStore();

onMounted(() => {
  activitiesStore.FETCH_ACTIVITIES();
});

const activities = activitiesStore.activities;
</script>
