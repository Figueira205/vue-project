<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" placeholder="Nueva tarea" v-model="nuevaTarea" @keyup.enter="addTarea"/>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index" style="list-style: none; display: flex; align-items: center;">
                <input type="checkbox" style="margin-right: 0px;" />
                <span style="flex: 1;">{{ tarea }}</span>
                <button @click="eliminarTarea" title="Borrar tarea" style="background:none;border:none;cursor:pointer;font-size:0.6em;">
                    ​❌
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');
const addTarea = () => {
     if (nuevaTarea.value.trim() !== '') {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
    }
};
const eliminarTarea = (index) => {
    tareas.value.splice(index, 1);
};
</script>
    
<style>
    input[type="text"] {
        width: 100%;
        padding: 10px;
        border-radius: 11px;
        margin-bottom: 10px;
    }

    ul {
        padding-left: 0;
    }

    li {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.8em;
    }

</style>