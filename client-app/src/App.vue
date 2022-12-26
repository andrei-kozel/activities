<template>
  <header>
    <Navigation />
  </header>
  <div v-for="activity in activities" :key="activity.id">
    {{ activity.title }}
  </div>
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { defineComponent } from "vue";
import { getActivities } from "./services/activitiesApi";
import type { IActivity } from "./types/Activity.interface";

export default defineComponent({
  components: {
    Navigation,
    RouterView,
  },
  data() {
    return {
      activities: [] as IActivity[],
    };
  },
  async mounted() {
    this.activities = await getActivities();
  },
});
</script>
