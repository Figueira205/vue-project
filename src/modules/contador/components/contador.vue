
<template>
  <header>
   <h2>Contador Manual</h2>
<p>{{ contador }}</p>
    <button id="incrementar" @click="incrementar">Incrementar</button>
    <button id="decrementar" @click="decrementar">Decrementar</button>
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

#incrementar{
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 5px;
  cursor: pointer;
  background-color: #4CAF50; /* Verde */
  color: white;
  border: none;
  border-radius: 5px;
}

#decrementar{
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 5px;
  cursor: pointer;
  background-color: #ff4810; /* Verde */
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
