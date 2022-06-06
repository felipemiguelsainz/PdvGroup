import "../Styles/PpalContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
function PpalContainer() {
    return (
        <div>
            <div className='container-ppal'></div>
            <div className='container-text' id='about'>
                <p>
                    <FontAwesomeIcon icon={faQuoteLeft} /> Somos una empresa diseñada para
                    brindar Servicios y{" "}
                    <span className='bold'>Soluciones Logísticas Integrales</span> a las
                    más diversas industrias. Operamos sobre la totalidad de la cadena
                    logística, brindando servicios a la medida del cliente, obteniendo
                    ventajas competitivas perdurables con aplicación de tecnología y una
                    cultura de servicio <FontAwesomeIcon icon={faQuoteRight} />
                </p>
                <div>
                    <img className='img-ceo' src={require("../img/FaceCeo.jpg")} alt='' />
                </div>
                <div>
                    <p className='ceo-text'>
                        <span className='bold'>Ceo</span> de PdvGroup
                    </p>
                </div>
            </div>
        </div>
    );
}
export default PpalContainer;
