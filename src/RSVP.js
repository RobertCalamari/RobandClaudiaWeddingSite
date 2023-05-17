import React from 'react';
import {useEffect} from 'react';
import './css/Information.css';

function RSVP(props) {

    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 

    return (
        <div className='wrapper'>
            <div className='top-img top-img-rsvp'></div>
            <div className='venue-wrapper'>
                <div className='venue-header' style={{marginTop:'40px'}}>
                    RSVP
                </div>
                <div className='information-text rsvp-text'>
                    We look forward to seeing you! If you will be bringing a guest or have specific dietary restrictions, please don't forget to add the info.
                </div>
                <div className='information-text rsvp-text' style={{fontSize:'30px'}}>
                    Kindly RSVP by January 15, 2025
                </div>

                <a className='venue-directions' style={{marginBottom:'100px', marginTop:'20px', fontSize:'30px'}} href='https://forms.gle/SaRiVQfgTUjwqK6X9'>Click here to RSVP!</a>
            
            </div>
        </div>
    );
}

export default RSVP;