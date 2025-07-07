<template>
    {{weatherStore.temperatura}}
</template>

<script setup>
import { onMounted } from 'vue';
import { useWeather } from '@/composables/useWeather.js';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(() => {
    useWeather();
});

</script>

<style scoped>

</style>
