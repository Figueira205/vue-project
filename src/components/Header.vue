<template>
    <div class="header">
        <h3>Temperatura actual:<weather></weather> </h3>
    </div>
</template>

<script setup>
import Weather from './Weather.vue';
</script>

<style scoped>
    .header {
        width: 200px;
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        right: 0;
        background-color: #b3b3b3;
        border-radius: 5px;
        margin-top: 20px;
        margin-right: 20px;
    }

    h1{
        margin: 0;
    }
</style>