<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <ActivityList :activities="activities" />
  </div>
</template>

<script lang="ts">
import ActivityList from "@/components/ActivityList.vue";
import { getActivities } from "@/services/activitiesApi";
import type { IActivity } from "@/types/Activity.interface";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activities: [] as IActivity[],
    };
  },
  async mounted() {
    this.activities = await getActivities();
  },
  components: { ActivityList },
});
</script>

<style scoped></style>
