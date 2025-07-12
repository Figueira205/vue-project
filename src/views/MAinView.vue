<template>
    <Header />

    <div class="container">
        <div class="content">
            <input type="text" v-model="texto" placeholder="Escribe algo...">
            {{ texto }}
             <RouterView /> 
            <Sidebar />
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header.vue';
import { ref } from 'vue';

const texto = ref('');
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        background-color: rgb(56, 56, 56);
    }

    .content {
        align-items: center;
        align-self: center; 
        flex: 1;
        padding: 22px;
        text-align: center;
        font-size: 2rem;
        color: #ecaf07;
    }
</style>