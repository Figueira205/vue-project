<template>
    <div class="container">
        <div class="content">
            <RouterView />
            <sidebar/>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import 'bootstrap/dist/css/bootstrap.min.css'

</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        height: 100vh;
        background-color: rgb(56, 56, 56);
    }

    .content {
        align-items: center;
        align-self: center; 
        flex: 1;
        padding: 20px;
        text-align: center;
        font-size: 2rem;
        color: #ecaf07;
    }
</style>