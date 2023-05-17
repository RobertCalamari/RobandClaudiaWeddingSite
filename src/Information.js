import React from 'react';
import {useEffect} from 'react';
import './css/Information.css';
import schedulePic from './img/schedule.png';

function Information(props) {

    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 

    return (
        <div className='wrapper'>
            <div className='top-img top-img-schedule'></div>
            <div className='schedule-content'>
                <div className='information-left'>
                        <div className='information-header'>
                            Attire
                        </div>
                        <div className='information-text'>
                        Cocktail / Formal<br />(ties optional)
                        </div>
                        <div className='information-header'>
                            Photos
                        </div>
                        <div className='information-text'>
                            We invite you to be fully present during our ceremony so no phones or cameras are permitted during this time. However, we are more than happy for you to take photos after the ceremony and share them with your loved ones
                        </div>
                        <div className='information-header'>
                            The Hotel
                        </div>
                        <div className='information-text'>
                            Here's all the info that is needed whenver we get the hotel info
                        </div>
                        <div className='information-header'>
                            Shuttle Times
                        </div>
                        <div className='information-text'>
                            The shuttle will be bringing people to and from the hotel. This will be happening 10 minutes before the wedding.
                        </div>
                </div>
                <div style={{textAlign:'center'}}>
                    <div className='information-header'> Agenda For The Day</div>    
                    <img className="schedule-pic" alt="" src={schedulePic} />
                </div>
            </div>
        </div>
    );
}

export default Information;