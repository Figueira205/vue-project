<template>
    <div class="header">
        <weather>
            <span class="temperatura">{{ weatherStore.temperatura }}</span>
        </weather>
    </div>
</template>

<script setup>
import Weather from './Weather.vue';
import { useWeatherStore } from '@/stores/weatherStore';
</script>

<style scoped>
.header {
    width: 90px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: fixed; 
    top: 0;
    right: 0;
    background-color: #5a5a5a;
    border-radius: 5px;
    margin-top: 20px;
    margin-right: 20px;
}

.temperatura {
    font-size: 2rem;
    color: #ecaf07;
    font-weight: bold;
    text-shadow: 1px 1px 2px #333;
}

h1 {
    margin: 0;
}
</style>