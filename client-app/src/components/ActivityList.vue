<template>
  <div class="mt-6">
    <ActivityItem v-for="activity in activities" :activity="activity" />
  </div>
</template>

<script lang="ts" setup>
import ActivityItem from "@/components/ActivityItem.vue";
import { useActivitiesStore } from "@/stores/activities";
import { onMounted } from "vue";

const activitiesStore = useActivitiesStore();

onMounted(() => {
  activitiesStore.FETCH_ACTIVITIES();
});

const activities = activitiesStore.activities;
</script>
