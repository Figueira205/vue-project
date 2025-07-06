import * as yup from 'yup';

export const schema = yup.object({ 
    nombre: yup.string().required('El nombre es obligatorio'),
    email: yup.string().email('El email debe ser válido').required('El email es obligatorio'),
});