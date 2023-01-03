<template>
  <div class="mt-6">
    <ActivityItem v-for="activity in activities" :activity="activity" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IActivity } from "@/types/Activity.interface";
import ActivityItem from "@/components/ActivityItem.vue";

export default defineComponent({
  name: "ActivityList",
  props: {
    activities: Array<IActivity>,
  },
  components: {
    ActivityItem,
  },
});
</script>

<style scoped></style>
