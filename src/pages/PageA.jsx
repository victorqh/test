import './PageA.css';
import logo from '../assets/contadorlogo.svg';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { useNavigate } from 'react-router-dom';

const PageA = () => {
    const navigate = useNavigate();

    const handleCornerClick = () => {
        navigate('/pageb');
    };

    return (
        <div className="page-container">
            <div className="content">
                <div className="text-section">
                    <h1 className="page-title">Organización de Contadores y Auditores</h1>
                    <p className="page-description">
                        Comprometidos con la formación y el desarrollo profesional, ofrecemos servicios innovadores y de alta calidad diseñados para profesionales que buscan la excelencia en sus carreras. Proveemos soluciones que empoderan a nuestros miembros con las herramientas necesarias para enfrentar los desafíos del mundo financiero actual.
                    </p>
                </div>
                <img src={logo} className="logo" alt="Logo de la organización" />
                <div className="form-section">
                    <RegistrationForm />
                </div>
            </div>
            <div className="corner" onClick={handleCornerClick}>
                <div className="corner-content">
                    <span>Ver más</span>
                </div>
            </div>
        </div>
    );
};

export default PageA;
