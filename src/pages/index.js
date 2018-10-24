import React from "react";
import Helmet from "react-helmet";
import Swiper from 'react-id-swiper';

import Layout from '../components/layout';
import MailChimpForm from '../components/mailChimpForm';

import '../assets/css/styles.css';

import pic01 from '../assets/images/1.jpg'
import pic02 from '../assets/images/2.png'
import pic03 from '../assets/images/3.jpg'

import clothe1 from '../assets/images/4.1.jpg'
import clothe2 from '../assets/images/4.2.jpg'
import clothe3 from '../assets/images/4.3.jpg'
import clothe4 from '../assets/images/4.4.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Clothes";
        
        const params = {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          };
        return (
            <Layout>
                <Helmet title={siteTitle} />
                <div id="landing-page">
                    <div className="main style1 box-1">
                        <div className="grid-wrapper">
                            <div className="col-6 details">
                                <p className="hashtag">                                   
                                    #SGFashionForGood
                                </p>
                                <div className="content">
                                    <p>Trade in your used designer clothing and get instant cash</p>
                                    <a href="#" onClick={() => console.log("Clicked")} className="contact-us-button button icon">I'm Interested!</a>
                                </div>
                            </div>
                            <div className="col-6 flower-dress">
                                {/* <img src={require('../images/1.jpg')}/> */}
                                <span className="image fit"><img src={pic01} alt="" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="container box-2">
                        <div className="grid-wrapper">
                            <div className="col-6 purple-dress">
                                <span className="image fit"><img src={pic02} alt="" /></span>
                            </div>
                            <div className="col-6">
                                <div className="service">
                                    <div className="text">
                                        We provide 24-hour doorstep service all around Singapore.
                                    </div>
                                    <ul>
                                        <li>
                                            Zero delay;<br/>
                                            Cash payment upfront
                                        </li>
                                        <li>
                                            No transport or<br/> hidden charges
                                        </li>
                                        <li>
                                            On-the-spot<br/> quality checks
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="container box-3">
                    <h2>Here’s our pricing guide*:</h2>
                    <div className="grid-wrapper  pricing">
                        <div className="col-6 left">
                            Trade in >10 items<br/>
                            Trade in >10 items<br/>
                            Trade in >20 items
                        </div>
                        <div className="col-6 right">
                            Get up to 70 SGD/piece<br/>
                            Get up to 90 SGD/piece<br/>
                            Get up to 120 SGD/piece
                        </div>
                    </div>
                    <div className="note-1">
                        *Prices stated are generally for items at least SGD$300-$500 in retail value. For premium items >$500 in retail value, prices are negotiable.
                    </div>
                </div>
                <div className="container box-4">
                    <div className="grid-wrapper">
                        <div className="col-6 sparkle-girls">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                        </div>
                        <div className="col-6 content">
                            <h2>How to get started? Leave us your email and we’ll get in touch!</h2>
                            <ol>
                                <li>
                                    Then send us photos of your old clothing
                                </li>
                                <li>
                                    Receive an itemised cash offer from us
                                </li>
                                <li>
                                    Choose to accept/reject the offer
                                </li>
                                <li>
                                    We’ll come by at your convenience
                                </li>
                                <li>
                                    Cash exchange on the spot! Zero delay
                                </li>
                            </ol>
                            <div className="note-2">
                                *Please note that we only take in items in good-excellent condition. Do not offer clothes that are dirtied or torn!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container box-5">
                    <div className="row grid-wrapper content">
                        <div className="col-4"> 
                            <h2>Brands we buy.</h2>
                            <div className="brandings">
                                <div className="row grid-wrapper">
                                    <div className="col-3 logo1"> </div>
                                    <div className="col-3 logo2"> </div>
                                    <div className="col-3 logo3"> </div>
                                    <div className="col-3 logo4"> </div>
                                    <div className="col-3 logo5"> </div>
                                    <div className="col-3 logo6"> </div>
                                    <div className="col-3 logo7"> </div>
                                    <div className="col-3 logo8"> </div>
                                    <div className="col-3 logo9"> </div>
                                    <div className="col-3 logo10"> </div>
                                    <div className="col-3 logo11"> </div>
                                    <div className="col-3 logo12"> </div>
                                </div>
                                <div className="row">
                                    <div className="view-more">
                                        <a href="http://html5up.net">View more Brands ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container box-6">
                    <h2>Clothes we've bought</h2>

                    <div className="content">
                        <Swiper {...params}>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe1} alt="" /></span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">TALITHA</div>
                                    <div className="info">Ashanti Geometric Print Silk Georgette Burgundy Dress</div>
                                    <div className="price">Retail SGD $1,365</div>
                                </div>
                            </div>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe2} alt="" /></span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">GUCCI</div>
                                    <div className="info">Ecru Embellished Knit Beige Dress</div>
                                    <div className="price">Retail SGD $3,675</div>
                                </div>
                            </div>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit">
                                        <img src={clothe3} alt="" />
                                    </span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">REFORMATION</div>
                                    <div className="info">Butterfly Midi Black Dress</div>
                                    <div className="price">Retail SGD $593</div>
                                </div>
                            </div>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit">
                                        <img src={clothe4} alt="" />
                                    </span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">RIXO LONDON</div>
                                    <div className="info">Martha Silk Midi  Floral Printed Dress</div>
                                    <div className="price">Retail SGD $738</div>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                    
                    <div className="hr">
                        <hr/>
                    </div>
                </div>
                <div className="container box-7">
                    <div className="content ">
                        <div className="title">
                            We’re a group of passionate, fashion-loving women. 
                            Want to find out more about being sustainably fashionable?
                            Feel free to contact us! 
                        </div>
                        <div className="row grid-wrapper">
                            <div className="col-6 contact-details">
                            <MailChimpForm/>
                                {/* <form>
                                    <label>
                                        <input type="text" name="name" placeholder="Name"/>
                                    </label>
                                    
                                    <label>
                                        <input type="text" name="email" placeholder="Email"/>
                                    </label>
                                    <input type="text" name="number" placeholder="Contact Number"/>
                                    <div className="submit-button">
                                        <a href="#" onClick={() => console.log("button clicked")} className="contact-us-button button">I'm Interested!</a>
                                    </div>
                                </form> */}
                            </div>
                            <div className="col-6 address">
                                <div className="row">
                                    <div className="col-2">
                                        Address:
                                    </div>
                                    <div className="col-6 off-1">
                                        60 Paya Lebar Road Paya Lebar Square #07-49 Singapore 438103
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        Contact:
                                    </div>
                                    <div className="col-6 off-1">
                                        +65 8253 4168 <br/>
                                        hello@sgfashionforgood.com
                                    </div>
                                </div>
                                <div className="map">
                                    <img src={require('../assets/images/map.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container box-8">
                    <div className="content">
                        <div className="title">
                            Ready to start the year fresh?
                        </div>
                        <div>
                            <a href="#" onClick={() => console.log("button clicked")} className="yes-button button">I'm Interested!</a>
                        </div>
                    </div>
                </div>
            </div>
                {/*<section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>
            
                 <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section> */}
            </Layout>
        );
    }
}

export default Homepage;