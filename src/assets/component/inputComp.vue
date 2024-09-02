<script setup>
const model = defineModel()
const props = defineProps(['modelValue', 'type', 'placeholder', 'disabled', 'required', 'class'])
</script>
<template>
    <div class="border rounded bg-white relative" :class="props.class">
        <input :type="props.type ?? 'text'" v-model="model" class="w-full bg-transparent p-3"
            :disabled="props.disabled ?? false" :required="props.required ?? false">
        <span :class="props.modelValue ? 'top-0' : 'top-[50%]'"
            class="bg-white absolute translate-y-[-50%] right-3 text-gray-500 transition-all"><small>{{ props.placeholder ??
                'ورودی' }}</small></span>
    </div>
</template>
<style scoped>
input:focus+span {
    top: -4px
}
</style>