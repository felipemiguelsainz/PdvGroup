import '../../Styles.css'
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

function Landing () {
    return(
    <div className="landing">
        <div className="containerOnImage">
            <div className="textOnImage"> 
                <h1 className='brandTitle'>PdvGroup</h1>
                <div className="dynamicText">
                    <Typewriter
                        
                        options={{
                            loop: true,
                            autostart: true,
                        }}
                        onInit={(typewriter) =>{
                            typewriter
                                .typeString('Distribucion')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('Importacion')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('Logistica')
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                        }
                    }
                    />
                </div>
            </div>
            <div className='segundoContainer'>
                <img className='imgContainer' src={require('../../img/17123sinfondo.png')}/>
            </div>
        </div>
        <div className='containerHorizontal'>
            <img src={require("../../img/BarcoIcon.png")} alt="" />
            <img className='arrow' src={require("../../img/Arrow.png")} alt="" />
            <img src={require("../../img/Camion.png")} alt="" />
            <img className='arrow' src={require("../../img/Arrow.png")} alt="" />
            <img src={require("../../img/Cajas.png")} alt="" />
        </div>            
    </div>   
    )
}

export default Landing;