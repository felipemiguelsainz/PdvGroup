import '../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return(
        <footer>
            <div className="container social">
                <div className="title">PdvGroup</div>
                <div className="list">
                    <div className="icon-list">
                        <a href=""></a><FontAwesomeIcon icon={faFacebook}/>
                        <a href=""></a><FontAwesomeIcon icon={faLinkedin}/>
                        <a href=""></a><FontAwesomeIcon icon={faWhatsapp}/>
                    </div>
                </div>
            </div>
            <div className="container about-us">
                <div className="title">Sobre Nosotros</div>
                <div>
                    <p>Cómo Funciona</p>
                </div>
            </div>
            <div className="container legal">
                <div className="title">Legal</div>
                <div>
                    <p>Terminos y Condiciones</p>
                    <p>Res. Gral. AFIP 3916/16</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;