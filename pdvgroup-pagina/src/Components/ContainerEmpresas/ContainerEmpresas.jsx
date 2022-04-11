import '../../Styles.css'
import Zoom from 'react-reveal/Zoom';

function ContainerEmpresas () {
    return(
        <>
        <div className='mainContainerCompanies'>
            <div className='containerHorizontal'>
                <img className='imgLogo' src={require("../../img/Kodak-Logo-2016-presente.png" )}alt="" />
                <img className='imgLogo' src={require("../../img/LogoGp.png" )}alt="" />
                <img className='imgLogo' src={require("../../img/LogoEnergizer.png" )}alt="" />
                <img className='imgLogo' src={require("../../img/LogoDuracell.png" )}alt="" />
            </div>
        </div>
        </>
    )
}

export default ContainerEmpresas;