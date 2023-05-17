import React from 'react';
import {useEffect} from 'react';
import './css/Information.css';
import GoogleMaps from './components/GoogleMaps';

function Venue(props) {

    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 
    
    return (
        <div className='wrapper'>
            <div className='top-img top-img-venue'></div>
            <div className='venue-wrapper'>
                <div className='venue-header'>
                    The Venue
                </div>
                <div className='information-text' style={{lineHeight:'17px'}}>
                The Hamilton Manor<br /><br />30 NJ-156, Hamilton Township, NJ 08620
                </div>
                <div className='venue-content'>
                    <div className='venue-block'>
                        <div className='information-header'>
                            Parking &<br />Transport
                        </div>
                        <div className='information-text'>
                        There is opportunity to park at the venue, however limited. There will also be a shuttle to and from the hotel.
                        </div>  
                    </div>
                    <div className='venue-block'>
                        <div className='information-header'>
                            Need<br />Something Here
                        </div>
                        <div className='information-text'>
                            Need to think about what to add here that also relates to the venue.
                        </div>
                    </div>                    
                </div>
                <a className='venue-directions' href='https://www.google.com/maps/dir//The+Hamilton+Manor,+New+Jersey+156,+Hamilton+Township,+NJ/@40.1752161,-74.7190792,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c15c029d86ef13:0x1f512ceb55401705!2m2!1d-74.677819!2d40.1750955'>Get Directions</a>
                <div className='google-maps'>
                    <GoogleMaps />
                </div>
                
            </div>
        </div>
    );
}

export default Venue;