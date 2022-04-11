import { Zoom } from 'react-reveal';

function Services (){

    const LinkTo = (e) => {
        alert('This link was supposed to get you to WhatsApp :(')
    }

    return(
        <>
            <div className="companyContainer">
            <Zoom>
                    <div className="mainTextContainerServices">
                        <div className="mainTextServices">
                            <p>
                            Ofrecemos <span className='bold'>servicios de movimientos</span> de carga en forma eficiente y soluciones logísticas integrales para campañas promocionales con la máxima <span className='bold'>calidad, profesionalidad y competitividad</span>, siendo flexibles en la elección del modo de transporte e implementación de la campaña para realizar la prestación del servicio de la forma más óptima. 
                            </p>
                        </div>
                        <div className='buttonServices'>
                                <a onClick={LinkTo}>Adquirir Servicios</a>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    )
}

export default Services;