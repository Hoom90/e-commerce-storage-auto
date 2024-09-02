<script setup>
const model = defineModel()
const props = defineProps(['placeholder', 'disabled', 'required', 'class'])
</script>
<template>
    <div class="bg-white text-white relative flex border rounded after:content-['\25BC'] after:text-gray-500 after:p-3 after:absolute after:left-0 after:top-0"
        :class="props.class">
        <select v-model="model" class="appearance-none p-3 text-[#aaa] bg-transparent cursor-pointer flex-1 outline-none"
            :disabled="props.disabled ?? false" :required="props.required ?? false">
            <option value="1">Americano</option>
            <option value="2">Latte</option>
            <option value="3">Green Tea</option>
        </select>
        <span class="bg-white absolute translate-y-[-50%] right-3 top-0 text-gray-500 transition-all"><small>{{
            props.placeholder ??
            'ورودی' }}</small></span>
    </div>
</template>
<style scoped>
/* Remove IE arrow */
select::-ms-expand {
    display: none;
}
</style>