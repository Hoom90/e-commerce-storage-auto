<script setup>
import leftIconComp from "@/assets/component/left.vue"
import bag_plusIconComp from "@/assets/component/bag_plus.vue"
import { appStore } from "@/store/app";
const breadCrumb = appStore()
const options = appStore()
const state = reactive({
    inventoryData: [{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "amount": 100,
        "createdOn": "2024/4/30"
    },],
    liquidityData: [],
    tab: 1,
    loading: false,
})

onMounted(() => {
    breadCrumb.setBreadCrumbs([])
    breadCrumb.setPageTitle({
        title: 'انبارداری',
        to: '/account/warehouse'
    })
    options.setOptions([
        { title: 'قیمت ها', style: 'border border-blue-500 bg-white text-blue-500', method: null },
        { title: 'نقدینگی', style: 'border border-blue-500 bg-white text-blue-500 mt-1', method: null }
    ])
    getData()
})

// Get All Items
const getData = async () => {
    state.loading = true
    state.inventoryData = [
        { title: 'نون قندی', amount: 10, unit: 'کیلو' },
        { title: 'تن ماهی ایلیکا', amount: 50, unit: 'عدد' },
        { title: 'برنج محسن', amount: 20, unit: 'کیسه' },
        { title: 'تخم مرغ کوچی اعلاء', amount: 3, unit: 'کارتن' },
        { title: 'روغن گیاهی 5 کیلویی حلبی گلی', amount: 10, unit: 'عدد' },
        { title: 'ماکارانی 1/2 تک ماکاران', amount: 25, unit: 'عدد' },
        { title: 'رب چین چین', amount: 20, unit: 'عدد' },
    ]
    state.loading = false
}
</script>
<template>
    <div class="mb-3">
        <input type="search" class="border rounded w-full p-3" placeholder="جستجوی قیمت کالا بر اساس نام کالا">
    </div>

    <div class="w-full">
        <div v-for="(item, index) in state.inventoryData"
            class="flex items-center border bg-white rounded mb-3 text-center shadow" :key="index">
            <div class="py-2 px-3 w-full"> {{ item.title }}</div>
            <div class="py-2 px-3 w-full">
                <div dir="ltr">{{ item.amount.toLocaleString() }}</div>
                <div dir="ltr">{{ item.unit }}</div>
            </div>
            <div class="flex items-center justify-center px-3">
                <leftIconComp width="20" color="#000" />
            </div>
        </div>
    </div>

    <button
        class="fixed bottom-24 right-5 bg-blue-500 w-14 aspect-square rounded-full flex justify-center items-center shadow-xl"
        @click="state.modal = !state.modal">
        <bag_plusIconComp width="40" color="#ffffff" />
    </button>

    <Loading v-if="state.loading"></Loading>
</template>