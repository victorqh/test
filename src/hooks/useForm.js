// src/hooks/useForm.js
import { useState } from 'react';

const useForm = (initialState, validate) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [showGeneralError, setShowGeneralError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e, callback) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length === 0) {
            callback();
            setShowGeneralError(false);
        } else {
            setErrors(validationErrors);
            setShowGeneralError(true);
        }
    };

    return {
        formData,
        errors,
        showGeneralError,
        handleChange,
        handleSubmit
    };
};

export default useForm;
