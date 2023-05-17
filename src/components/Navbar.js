import React from 'react';
import {NavLink} from "react-router-dom";
import leftLogo from '../img/heartlogo4.png';
import HamMenu from '../img/hammenu.png';
import HeartLogo from '../img/heartlogo-white.png'
import $ from 'jquery';

function Navbar() {

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        $('.navbar-background').css({
          opacity: function() {
            var elementHeight = $(this).height()+100;
            return 1 - (elementHeight - scrollTop) / elementHeight;
          }
        });
      });

    return (
        <div className='navbar'>
            <div className='navbar-background'></div>
            <div className='navbar-content'>
                <div className='routes only-web'>
                    <NavLink to="/" style={isActive => ({color: isActive.isActive ? "white" : "var(--main-color-text-one)"})} onClick={closeMenuBar} >
                        <div className='route-name'>Home</div> 
                    </NavLink>
                    <NavLink to="/pictures" style={isActive => ({color: isActive.isActive ? "white" : "var(--main-color-text-one)"})} onClick={closeMenuBar} >
                        <div className='route-name'>Pictures</div>
                    </NavLink>
                    <NavLink to="/information" style={isActive => ({color: isActive.isActive ? "white" : "var(--main-color-text-one)"})} onClick={closeMenuBar} >
                        <div className='route-name'>Information</div>
                    </NavLink>
                    <NavLink to="/venue" style={isActive => ({color: isActive.isActive ? "white" : "var(--main-color-text-one)"})} onClick={closeMenuBar} >
                        <div className='route-name'>The Venue</div>
                    </NavLink>
                    <NavLink to="/gifts" style={isActive => ({color: isActive.isActive ? "white" : "var(--main-color-text-one)"})} onClick={closeMenuBar} >
                        <div className='route-name'>Gifts</div>
                    </NavLink>
                    <NavLink to="/rsvp" className="only-mobile" style={isActive => ({color: isActive.isActive ? "white" : "var(--main-color-text-one)"})} onClick={closeMenuBar} >
                        <div className='route-name'>RSVP</div>
                    </NavLink>
                </div>
                <div className='navbar-logo'>
                    <NavLink to="/"  >
                        <img className="logo-img only-web" alt="Calamari" src={leftLogo} onClick={closeMenuBar} />
                        <img className="logo-img only-mobile" alt="Heart" src={HeartLogo} onClick={closeMenuBar} />
                    </NavLink>
                </div>
                <div className='navbar-right only-web'>
                    <NavLink to="/rsvp" style={{color: "#eee"}} >
                        <div className='button'>RSVP</div>
                    </NavLink>
                </div>
            </div>
            <div className="ham-menu only-mobile">
                <img className="logo-img " alt="" src={HamMenu} onClick={openMenuBar} />
            </div>
        </div>
    );
}

var menuBarIsOpen = false;

function openMenuBar(){
    
    if(menuBarIsOpen === false){
        document.getElementsByClassName("ham-menu")[0].classList.add("rotate180");
        setTimeout(() => {
            document.getElementsByClassName("ham-menu")[0].classList.remove("rotate180");            
        }, 300);
        document.getElementsByClassName("routes")[0].classList.add("nav-opened");   
        menuBarIsOpen = true;
        
    }else{
        closeMenuBar();
    }
}

function closeMenuBar(){
    document.getElementsByClassName("ham-menu")[0].classList.add("rotate180");
    setTimeout(() => {
        document.getElementsByClassName("ham-menu")[0].classList.remove("rotate180");            
    }, 300);
    document.getElementsByClassName("routes")[0].classList.remove("nav-opened");  
    menuBarIsOpen = false;
}

export default Navbar;