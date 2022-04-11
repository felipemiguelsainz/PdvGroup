import '../../Styles.css'
import Zoom from 'react-reveal/Zoom';



function ContainerPpal (props) {

    return(
        <>
            <div className="companyContainer">
                <Zoom>
                    <div className="mainTextContainer">
                        <img className="mainImg" src={require('../../img/17111.png')}/>
                        <div className="mainText">
                            <p>
                            Somos una empresa diseñada para brindar Servicios y <span className='bold'>Soluciones Logísticas Integrales</span> a las más diversas industrias.  
                            Operamos sobre la totalidad de la cadena logística, brindando servicios a la medida del cliente, obteniendo ventajas competitivas perdurables con aplicación de tecnología y una cultura de servicio.
                            </p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    )
}

export default ContainerPpal;