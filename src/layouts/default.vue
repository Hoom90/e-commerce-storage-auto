<script setup>
import mobile from "./mobile.vue"
import { appStore } from "@/store/app";
const app = appStore()
</script>
<template>
  <div dir="rtl">
    <mobile v-if="app.getAuth"/>
    <RouterView v-else/>
  </div>
</template>