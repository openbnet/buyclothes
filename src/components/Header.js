import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="custom-header">
                <div className="header-container"> 
                    <div className="nav-items">
                        <a className="nav-item nav-about">About</a>
                        <a className="nav-item nav-price">Price</a>
                        <a className="nav-item nav-how">How</a>
                        <a className="nav-item nav-brands">Brandslist</a>
                    </div>
                    <div className="button-wrapper">
                        <a className="contact-us-button button nav-contact-us">Contact Us</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header
