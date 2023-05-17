import React from 'react';
import {useEffect} from 'react';
import './css/Information.css';

function Gifts(props) {
    
    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 

    return (
        <div className='wrapper'>
            <div className='top-img top-img-gift'></div>
            <div className='venue-wrapper'>
                <div className='venue-header' style={{marginTop:'40px'}}>
                    The Registry
                </div>
                <div className='information-text'>
                    Thanks for being in our life. Now please give us some money or buy us something on our registry using the link below!
                </div>
                <div className='information-text'>
                    Additionally, you can also just give us money too.
                </div>

                <a className='venue-directions' style={{marginBottom:'100px', marginTop:'20px', fontSize:'30px', textAlign: 'center'}} href='https://registry.theknot.com/robert-calamari-claudia-giordano-april-2025-nj/60479451'>Registry Website</a>
            
            </div>
        </div>
    );
}

export default Gifts;