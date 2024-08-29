<script setup>
import dashboard from "./dashboard.vue"
import { appStore } from "@/store/app";
const app = appStore()
</script>
<template>
  <div dir="rtl">
    <dashboard></dashboard>
    <!-- <dashboard v-if="app.getAuth" /> -->
    <!-- <RouterView v-else /> -->
  </div>
</template>