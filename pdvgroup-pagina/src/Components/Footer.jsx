import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    function alertarLink(mensaje) {
        alert("supposed to get you to " + mensaje);
    }
    return (
        <footer>
            <div className='container social'>
                <div className='title'>PdvGroup</div>
                <div className='list'>
                    <div className='icon-list'>
                        <FontAwesomeIcon
                            className='pointer'
                            icon={faFacebook}
                            onClick={() => alertarLink("Facebook")}
                        />
                        <FontAwesomeIcon
                            className='pointer'
                            icon={faLinkedin}
                            onClick={() => alertarLink("Linkedin")}
                        />
                        <FontAwesomeIcon
                            className='pointer'
                            icon={faWhatsapp}
                            onClick={() => alertarLink("WhatsApp")}
                        />
                    </div>
                </div>
            </div>
            <div className='container about-us'>
                <div className='title'>Sobre Nosotros</div>
                <div>
                    <p className='pointer' onClick={() => alertarLink("Como Funciona")}>
                        Cómo Funciona
                    </p>
                </div>
            </div>
            <div className='container legal'>
                <div onClick={() => alertarLink("Legal")} className='title pointer'>
                    Legal
                </div>
                <div>
                    <p
                        className='pointer'
                        onClick={() => alertarLink("Terminos y Condiciones")}
                    >
                        Terminos y Condiciones
                    </p>
                    <p>Res. Gral. AFIP 3916/16</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
