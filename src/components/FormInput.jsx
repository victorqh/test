// src/components/FormInput.jsx


const FormInput = ({ label, type, name, value, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={error ? 'error-input' : ''}
                required
            />
            {error && <span className="error-message">Este campo es obligatorio</span>}
        </div>
    );
};

export default FormInput;
