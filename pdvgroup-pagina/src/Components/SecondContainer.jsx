import '../Styles/SecondContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faMessage, faCreditCard} from '@fortawesome/free-solid-svg-icons'

function SecondContainer() {
    return(
        <div>
            <div className='second-container'>
            </div>
            <div className='questions-container' id='questions'>
                <div className='questions-title'><p>Nuestra prioridad está en tu tranquilidad, siempre.</p></div>
                <div className='questions-carts'>
                    <div>
                        <div className='icon-container'><FontAwesomeIcon className='icon' icon={faMapLocationDot} /></div>
                        <div className='text-container'><p>Mediante tu panel personal, podrás hacer el seguimiento de tu envío en todo momento. </p></div>
                    </div>
                    <div>
                        <div className='icon-container'><FontAwesomeIcon className='icon' icon={faMessage} /></div>
                        <div className='text-container'><p>Al alertar tu compra, un ejecutivo de cuentas se pondrá en contacto para comenzar el seguimiento.</p></div>
                    </div>
                    <div>
                        <div className='icon-container'><FontAwesomeIcon className='icon' icon={faCreditCard} /></div>
                        <div className='text-container'><p>Aboná una vez llegado tu paquete a destino vía efectivo, débito, crédito o con Mercado Pago.</p></div>
                    </div>
                </div>
                <div className='questions-button'>Contacto</div>
            </div>
        </div>
    )
}
export default SecondContainer;