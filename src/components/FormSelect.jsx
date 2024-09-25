// src/components/FormSelect.jsx

const FormSelect = ({ label, name, value, onChange, options, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={error ? 'error-input' : ''}
                required
            >
                <option value="">Selecciona un curso</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <span className="error-message">Este campo es obligatorio</span>}
        </div>
    );
};

export default FormSelect;
