
<template>
  <header>
   <h2>Contador Manual</h2>
<p>{{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);
const incrementar = () => {
  contador.value++;
};
const decrementar = () => {
  contador.value--;
};


</script>

<style scoped>
P{
  font-size: 4rem;
  color: rgb(255, 12, 12);
  padding: 0;
}
</style>
