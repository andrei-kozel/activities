<template>
  <header>
    <Navigation />
  </header>

  <RouterView />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navigation,
    RouterView,
  },
});
</script>
