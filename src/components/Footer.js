import React from 'react';
import squidImg from '../img/CalamariWhite.png';

function Footer() {

    return (
        <div className='footer'>
            Robert & Claudia
             <img className="logo-img" style={{margin: '10px 8px 5px 5px'}} alt="Calamari" src={squidImg} />
        </div>
    );
}

export default Footer;