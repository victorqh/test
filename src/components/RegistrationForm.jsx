// src/pages/RegistrationForm.jsx

import FormInput from './FormInput.jsx';
import FormSelect from './FormSelect.jsx';
import useForm from '../hooks/useForm.js';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const initialState = {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        course: ''
    };

    const validate = (formData) => {
        const errors = {};
        if (!formData.name) errors.name = true;
        if (!formData.lastName) errors.lastName = true;
        if (!formData.email) {
            errors.email = true;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = true;
        }
        if (!formData.phone) errors.phone = true;
        if (!formData.course) errors.course = true;
        return errors;
    };

    const { formData, errors, showGeneralError, handleChange, handleSubmit } = useForm(initialState, validate);

    const submitForm = () => {
        console.log('Formulario enviado:', formData);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e, submitForm)} className="RegistrationForm">
            <FormInput
                label="Nombre:"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <FormInput
                label="Apellido:"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
            />
            <FormInput
                label="Correo Electrónico:"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <FormInput
                label="Teléfono:"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
            />
            <FormSelect
                label="Curso de Interés:"
                name="course"
                value={formData.course}
                onChange={handleChange}
                options={[
                    'Finanzas en casa',
                    'Derecho Tributario',
                    'Marketing Digital',
                    'Gestión de Proyectos',
                    'Desarrollo Web'
                ]}
                error={errors.course}
            />
            <button type="submit" className="submit-button">LLÁMAME</button>
            {showGeneralError && <p className="general-error">Rellena los espacios obligatorios</p>}
        </form>
    );
};

export default RegistrationForm;
