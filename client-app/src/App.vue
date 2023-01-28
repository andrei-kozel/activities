<template>
  <div class="bg-background-600">
    <header>
      <navigation />
    </header>
    <activity-dashboard />
  </div>
</template>

<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
import ActivityDashboard from "@/views/ActivityDashboard.vue";
</script>
