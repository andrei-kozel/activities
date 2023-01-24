<template>
  <header>
    <Navigation />
  </header>

  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>
