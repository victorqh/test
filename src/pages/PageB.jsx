// src/pages/PageB.jsx

import RegistrationForm from "../components/RegistrationForm.jsx";'./RegistrationForm.jsx'
import './PageB.css'

const PageB = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Página B</h1>
            <p className="page-description">Bienvenido a la Página B. Aquí puedes registrarte para nuestros cursos.</p>
            <RegistrationForm />
        </div>
    );
};

export default PageB;
