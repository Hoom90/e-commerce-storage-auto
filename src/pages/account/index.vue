<script setup>
import { appStore } from '@/store/app';
const breadCrumb = appStore()
const options = appStore()
onMounted(() => {
    breadCrumb.setBreadCrumbs([])
    breadCrumb.setPageTitle({
        title: 'داشبورد',
        to: '/account'
    })
    options.setOptions([])
})
</script>
<template>
    index
</template>