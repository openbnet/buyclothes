import React from 'react'
import minimize from "../assets/images/minimize.png";
import minimizeWhite from "../assets/images/minimize-white.png";

import whiteClose from "../assets/images/white-close.svg" ;
class Header extends React.Component {
    render() {
        return (
            <section id="custom-header">
                <div className="header-container show-desktop"> 
                    <div className="nav-items">
                        <a className="nav-item nav-about">About</a>
                        <a className="nav-item nav-price">Price</a>
                        <a className="nav-item nav-how">How</a>
                        <a className="nav-item nav-brands">Brands</a>
                    </div>
                    <div className="button-wrapper">
                        <a className="contact-us-button button nav-contact-us">Contact Us</a>
                    </div>
                </div>
                <div className="header-container show-mobile-flex"> 
                    <div className="ham-menu">
                        <img src={minimize} />
                    </div>
                    <div className="ham-menu white">
                        <img src={minimizeWhite} />
                    </div>
                    <div className="header-title">
                        <p> #PRELOVEDSG </p>
                    </div>
                    <div></div>
                </div>
                <div className="side-menu"> 
                    <img className="close-side" src={whiteClose}/>
                    <a className="nav-item nav-about">About</a>
                    <a className="nav-item nav-price">Price</a>
                    <a className="nav-item nav-how">How</a>
                    <a className="nav-item nav-brands">Brands</a>
                </div>
            </section>
        )
    }
}

export default Header
