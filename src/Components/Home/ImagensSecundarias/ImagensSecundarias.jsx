import React from 'react';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';
import ImgA from '../Img/sofa azul.png';
import ImgB from '../Img/sofa-cinza.png';

function ImagensSecundarias() {
    return(
        <div>
            {/* PB = P do Body */}
            <div className="DIB">
                {/* DB,DIB = Div do Body */}
                <li className="LMG"><img className="IMG" src={ImgA} alt=""/></li>
                <li className="LIMG"><img className="IMG" src={ImgB} alt=""/></li>
                {/* LIMG,LMG = LI Img */}
            </div>
        </div>
    )
}

export default ImagensSecundarias;