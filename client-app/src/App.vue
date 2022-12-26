<template>
  <header>
    <Navigation />
  </header>
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import axios from "axios";

export default {
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000")
      .then((response) => console.log(response));
  },
};
</script>
