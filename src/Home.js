import React from 'react';
import {NavLink} from "react-router-dom";
import {useEffect} from 'react';
import './css/Home.css';
import Clock from './components/Clock'
import bridePic from './img/people/claudia.png';
import groomPic from './img/people/robert.png';
import caityPic from './img/people/caity.png';
import afronPic from './img/people/afron.png';
import katiePic from './img/people/katie.png';
import jonathonPic from './img/people/jonathon.png';
import jessicaPic from './img/people/jessica.png';
import dannyPic from './img/people/danny.png';
import melissaPic from './img/people/melissa.png';
import dillonPic from './img/people/dillon.png';
import veronicaPic from './img/people/veronica.png';
import seanPic from './img/people/sean.png';
import theresaPic from './img/people/theresa.png';
import davePic from './img/people/dave.png';
import jeremyPic from './img/people/jeremy.png';
import middleLogo from './img/heartlogo5.png';
import PartyMemberHome from './components/PartyMemberHome';

function Home(props) {

    useEffect(() => {
        document.title = props.title + ' | Robert & Claudia'; // eslint-disable-next-line
    }, []); 

    let deadline = "April, 27, 2025";

    return (
        <>  
            
            <div className='wrapper'>
                <div className='greeting-img'>
                    <div className="greeting-date">
                        <svg  style={{width:'18px'}}fill="#f08e80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.67 17C15.9479 16.9873 15.2389 16.8041 14.6011 16.4652C13.9633 16.1263 13.4147 15.6414 13 15.05L9.36001 10.16C9.1279 9.80623 8.81203 9.51526 8.44046 9.3129C8.06889 9.11054 7.6531 9.00305 7.23001 8.99997C6.77343 9.05419 6.33732 9.22041 5.96048 9.48385C5.58364 9.74729 5.27775 10.0998 5.07001 10.51L3.86001 12.51L2.14001 11.51L3.35001 9.50997C3.71832 8.80965 4.25642 8.21292 4.91506 7.77441C5.5737 7.3359 6.33182 7.06962 7.12001 6.99997C7.88316 6.97767 8.63948 7.14948 9.3181 7.49928C9.99672 7.84909 10.5754 8.36544 11 8.99997L14.68 13.89C14.9134 14.2295 15.2252 14.5077 15.5891 14.701C15.9529 14.8942 16.358 14.9968 16.77 15C17.2269 14.9466 17.6633 14.7807 18.0403 14.5172C18.4173 14.2537 18.723 13.9007 18.93 13.49L20.14 11.49L21.86 12.49L20.65 14.49C20.2817 15.1903 19.7436 15.787 19.085 16.2255C18.4263 16.664 17.6682 16.9303 16.88 17H16.67Z"></path> </g></svg>
                        <div className='greeting-date-title'>04/27/25</div>               
                        <svg  style={{width:'18px'}}fill="#f08e80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.67 17C15.9479 16.9873 15.2389 16.8041 14.6011 16.4652C13.9633 16.1263 13.4147 15.6414 13 15.05L9.36001 10.16C9.1279 9.80623 8.81203 9.51526 8.44046 9.3129C8.06889 9.11054 7.6531 9.00305 7.23001 8.99997C6.77343 9.05419 6.33732 9.22041 5.96048 9.48385C5.58364 9.74729 5.27775 10.0998 5.07001 10.51L3.86001 12.51L2.14001 11.51L3.35001 9.50997C3.71832 8.80965 4.25642 8.21292 4.91506 7.77441C5.5737 7.3359 6.33182 7.06962 7.12001 6.99997C7.88316 6.97767 8.63948 7.14948 9.3181 7.49928C9.99672 7.84909 10.5754 8.36544 11 8.99997L14.68 13.89C14.9134 14.2295 15.2252 14.5077 15.5891 14.701C15.9529 14.8942 16.358 14.9968 16.77 15C17.2269 14.9466 17.6633 14.7807 18.0403 14.5172C18.4173 14.2537 18.723 13.9007 18.93 13.49L20.14 11.49L21.86 12.49L20.65 14.49C20.2817 15.1903 19.7436 15.787 19.085 16.2255C18.4263 16.664 17.6682 16.9303 16.88 17H16.67Z"></path> </g></svg>
                    </div>
                    <img className="greeting-logo" alt="" src={middleLogo} />    
                    <div className='greeting-date-subtitle'>We're Getting Married!</div>  
                </div>
                <div className='hs-block'>
                    <div className='ww-container'>
                        <div className='ww-block'>
                            <div className='ww-simple-text'>
                                When
                            </div>
                            <div className='ww-bold-text'>
                                Sunday, April 27,<br />2025
                            </div>
                            <div className='ww-info-text style-text'>
                                Ceremony: 4:30pm—5pm<br />
                                Reception: 5pm—10pm
                            </div>
                            <div className='ww-more-info'>
                                <a href='/information'>More Details +</a>
                            </div>
                        </div>
                        <div className='mobile-only gapper'>
                        </div>
                        <div className='ww-block'>
                            <div className='ww-simple-text'>
                                Where
                            </div>
                            <div className='ww-bold-text'>
                                The Hamilton Manor
                            </div>
                            <div className='ww-info-text style-text'>
                                30 NJ-156, Hamilton Township,<br />NJ 08620
                            </div>
                            <div className='ww-more-info'>
                                <a href='/venue'>More Details +</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='white-block hs-block'>
                    <div className='ww-container'>
                        <div className='when-block ww-block acc-block'>
                            <div className='ww-simple-text'>
                                Accommodations
                            </div>
                            <div className='ww-bold-text'>
                                The Example Inn
                            </div>
                            <div className='ww-simple-text '>
                                We've reserved a block of rooms at The Melike Hotel in Greenwich Village. Just mention the Rey-Miller wedding when you reserve.
                            </div>
                            <div className='ww-info-text style-text'>
                                123 Demo Street<br />
                                New York, NY 12345
                            </div>
                            <div className='ww-info-text style-text'>
                                (555) 555-5555<br />
                                email@example.com
                            </div>
                            <div className='ww-more-info'>
                                <a href='/information'>More Details +</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hs-block'>
                    <div className='ww-container'>
                        <div className='ww-block'>
                            <div className='ww-bold-text'>
                               The Bride
                            </div>
                            <img className="person-img" alt="" src={bridePic} />
                            <div className='person-info-text'>
                                Claudia Giordano
                            </div>
                        </div>
                        <div className='mobile-only gapper'>
                        </div>
                        <div className='ww-block'>
                            <div className='ww-bold-text'>
                                The Groom
                            </div>
                            <img className="person-img" alt="" src={groomPic} />
                            <div className='person-info-text'>
                                Robert Calamari
                            </div>
                        </div>
                    </div>
                </div>
                <div className='white-block hs-block'>
                    <div className='ww-container'>
                        <div className='party-block'>
                            <div className='ww-bold-text' style={{color:'black'}}>
                               The Party
                            </div>
                            <div className='people-block'> 
                                <div className='ww-block'>
                                    <PartyMemberHome pic={caityPic} name='Caity Halligan' />
                                    <div style={{borderBottom: '1px solid var(--main-color-text-one)', height:'1px', width:'120px'}}></div>
                                    <PartyMemberHome pic={katiePic} name='Katie Giordano' />
                                    <PartyMemberHome pic={jessicaPic} name='Jessica Roessner' />
                                    <PartyMemberHome pic={melissaPic} name='Melissa Louie' />
                                    <PartyMemberHome pic={veronicaPic} name='Veronica DiGiovanni' />
                                    <PartyMemberHome pic={theresaPic} name='Theresa Dill' />
                                </div>
                                <div className='ww-block'>
                                    <PartyMemberHome pic={afronPic} name='Afron Guze' />
                                    <div style={{borderBottom: '1px solid var(--main-color-text-one)', height:'1px', width:'120px'}}></div>
                                    <PartyMemberHome pic={jonathonPic} name='Jonathon Giordano' />
                                    <PartyMemberHome pic={dannyPic} name='Danny Roessner' />
                                    <PartyMemberHome pic={dillonPic} name='Dillon Freeman' />
                                    <PartyMemberHome pic={seanPic} name='Sean Kim' />
                                    <PartyMemberHome pic={davePic} name='Dave Chai' />
                                </div>
                            </div>
                            <div style={{borderBottom: '1px solid var(--main-color-text-one)', height:'1px', width:'120px', margin:'15px 0 20px 0 '}}></div>
                            <div className='ww-simple-text' style={{paddingBottom: '0'}}>
                                Officiant
                            </div>
                            <PartyMemberHome pic={jeremyPic} name='Jeremy' />
                        </div>
                    </div>
                </div>
                <div className='hs-block'>
                    <div className='ww-container'>
                        <div className='ww-block'>
                            <div className='ww-bold-text'>
                                The Registry
                            </div>
                            <div className='ww-simple-text' style={{textAlign:'center'}}>
                                Thanks for being in our life. Now please give us some money or buy us something on our registry using the link below!
                            </div>
                            <div className='ww-info-text'>
                                The Registry is hosted on TheKnot, which can be accessed with the link below.
                            </div>
                            <div className='ww-more-info'>
                                <a href='https://registry.theknot.com/robert-calamari-claudia-giordano-april-2025-nj/60479451' target="_blank" >Registry Website +</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='white-block hs-block'>
                    <div className='ww-container'>
                        <div className='clock-container'>
                            <div className='ww-bold-text'>
                                Wedding Countdown!
                            </div>
                            <div className='ww-simple-text' style={{textAlign:'center', fontSize:'40px'}}>
                                <Clock deadline={deadline} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hs-block'>
                    <div className='ww-container'>
                        <div className='ww-block'>
                            <div className='ww-bold-text special-day-text'>
                                We hope you'll join us on this special day.
                            </div>
                            
                            <NavLink to="/rsvp" style={isActive => ({color: isActive.isActive ? "#eee" : "#eee"})} >
                                    <div className='rsvp-button'>RSVP</div>
                                </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
        
    );
}

export default Home;