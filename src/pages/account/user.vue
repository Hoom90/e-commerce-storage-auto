<script setup>
import selectComp from '@/assets/component/selectComp.vue'
import inputComp from "@/assets/component/inputComp.vue"
const state = reactive({
    text: 2
})
</script>
<template>
    <selectComp v-model="state.text" placeholder="نام کالا" class="mb-3" />
    <inputComp v-model="state.text" placeholder="نام کالا" />
</template>