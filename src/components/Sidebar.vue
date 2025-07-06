<template>
    <div class="sidebar">
        <h2>Menu</h2>
        <ul>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/listadetareas">Lista de Tareas</router-link></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100vh;
    background-color: #1d1d1d;
    padding: 20px 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sidebar ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
    text-decoration: none;
}

/* Quitar subrayado y color azul de los enlaces */
.sidebar a {
    text-decoration: none;
    color: #ecaf07; /* Cambia este color si quieres otro */
}

.sidebar a.router-link-exact-active {
    font-weight: bold;
    color: #fff; /* Color para el enlace activo */
}
</style>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
</script>