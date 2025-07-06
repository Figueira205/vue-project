<template>
    <div>
        <h2>Formulario de Registro</h2>

        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre"></label>
                <Field type="text" name="nombre" id="nombre" placeholder="Nombre" />
                <ErrorMessage name="nombre" class="error" />
            </div>
            <div class="form">
                <label for="correo"></label>
                <Field type="email" name="email" id="correo" placeholder="Correo Electrónico" />
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

const onSubmit = (values) => {
    console.log('Formulario enviado con éxito:', values);
    // Aquí puedes agregar la lógica para manejar el envío del formulario, como una llamada a una API.
};
</script>

<style scoped>
    .form {
        margin-bottom: 10px;
    }
</style>