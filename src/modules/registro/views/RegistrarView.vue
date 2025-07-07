<template>
    <div>
        <h2>Formulario de Registro</h2>

        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre"></label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Nombre" />
                <ErrorMessage name="nombre" class="error" />
            </div>
            <div class="form">
                <label for="correo"></label>
                <Field v-model="email" type="email" name="email" id="correo" placeholder="Correo Electrónico" />
                <ErrorMessage name="email" class="error" />
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema.js';
import {useRegistrarStore} from '../stores/registrarStore.js';
import {ref} from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');

const onSubmit = (values) => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Formulario enviado con éxito:', values);
};
</script>

<style scoped>
    .form {
        margin-bottom: 10px;
    }
</style>