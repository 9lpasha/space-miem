import './Logo.css';
import logoImg from '../images/HSE2.png'

function Logo() {
    return (
        <div className="Logo">
            <img src={logoImg} alt=""/>
            <p className="LogoText">ВИРТУАЛЬНЫЙ КОСМОС</p>
        </div>
    );
}

export default Logo;