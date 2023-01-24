<template>
  <div class="mt-6">
    <ActivityItem v-for="activity in activities" :activity="activity" />
  </div>
</template>

<script lang="ts" setup>
import ActivityItem from "@/components/ActivityItem.vue";
import type { IActivity } from "@/types/Activity.interface";

defineProps({
  activities: Array<IActivity>,
});
</script>
