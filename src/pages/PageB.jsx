// src/pages/PageB.jsx

import RegistrationForm from "../components/RegistrationForm.jsx";
import './PageB.css'
import {useEffect} from "react";

const PageB = () => {

    useEffect(() => {
        document.body.classList.add('page-body');
        return () => {
            document.body.classList.remove('page-body');
        };
    }, []);

    return (
        <div className="page-container">
            <h1 className="page-title">Página B</h1>
            <p className="page-description">Bienvenido a la Página B. Aquí puedes registrarte para nuestros cursos.</p>
        </div>
    );
};

export default PageB;
