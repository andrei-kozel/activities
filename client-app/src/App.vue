<template>
  <div class="bg-[#181818]">
    <header>
      <Navigation />
    </header>

    <RouterView class="container mx-auto" />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>
