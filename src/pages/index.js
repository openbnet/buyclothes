import React from "react";
import ReactDOM from 'react-dom';

import Helmet from "react-helmet";
import Swiper from 'react-id-swiper';

import Layout from '../components/layout';
import MailChimpForm from '../components/mailChimpForm';

import '../assets/css/styles.css';

import pic01 from '../assets/images/1.jpg'
import pic02 from '../assets/images/2.png'
import pic03 from '../assets/images/3.jpg'

import clothe1 from '../assets/images/4.1.png'
import clothe2 from '../assets/images/4.2.jpg'
import clothe3 from '../assets/images/4.3.jpg'
import clothe4 from '../assets/images/4.4.jpg'
import clothe5 from '../assets/images/4.5.jpg'
import clothe6 from '../assets/images/4.6.jpg'

class Homepage extends React.Component {
    
    
    render() {
        const siteTitle = "Prelove.sg";
        
        const params = {
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,
            loop: true
        };
        return (
            <Layout>
                <Helmet title={siteTitle} />
                <div id="landing-page">
                    <div className="main style1 box-1">
                        <div className="grid-wrapper">
                            <div className="col-6 details"> 
                                <div className="content">
                                    <p>Trade in your used designer clothing and get instant cash</p>
                                    
                                    <div className="button-wrapper">
                                        <a className="interested-btn button nav-contact-us">I'm Interested!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 flower-dress"> 
                                <span className="image fit"><img src={pic01} alt="" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="container box-2" id="about">
                        <div className="grid-wrapper">
                            <div className="col-6 purple-dress show-desktop">
                                <span className="image fit"><img src={pic02} alt="" /></span>
                            </div>
                            <div className="col-6">
                                <div className="service">
                                    <div className="title-text">
                                        We provide 24-hour doorstep service all around Singapore.
                                    </div>
                                    <div className="hr show-mobile-flex">
                                        <hr/>
                                    </div>
                                    <div className="list">
                                        <div className="camera-list"> 
                                            <div className="icon">
                                                <svg width="63" height="61" viewBox="0 0 63 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M26.918 35.082C28.1967 36.3607 29.7951 37 31.5 37C33.2049 37 34.9098 36.3607 36.082 35.082C37.3607 33.8033 38 32.2049 38 30.5C38 28.7951 37.3607 27.0902 36.082 25.918C34.8033 24.6393 33.2049 24 31.5 24C29.7951 24 28.0902 24.6393 26.918 25.918C25.6393 27.1967 25 28.7951 25 30.5C25 32.2049 25.6393 33.9098 26.918 35.082ZM28.4098 27.4098C29.2623 26.5574 30.3279 26.1311 31.5 26.1311C32.6721 26.1311 33.7377 26.5574 34.5902 27.4098C35.4426 28.2623 35.8689 29.3279 35.8689 30.5C35.8689 31.6721 35.4426 32.7377 34.5902 33.5902C33.7377 34.4426 32.6721 34.8689 31.5 34.8689C30.3279 34.8689 29.2623 34.4426 28.4098 33.5902C27.5574 32.7377 27.1311 31.6721 27.1311 30.5C27.1311 29.3279 27.5574 28.1557 28.4098 27.4098Z" fill="white"/>
                                                    <path d="M48.2348 27.6309C47.6243 27.0332 46.9119 26.7344 46.0978 26.5352C46.5049 25.2402 46.1996 23.6465 45.182 22.6504C44.5714 22.0527 43.8591 21.7539 43.045 21.5547C43.452 20.2598 43.1468 18.666 42.1292 17.6699C41.1115 16.6738 39.4834 16.2754 38.1605 16.7734C38.0587 15.9766 37.6517 15.2793 37.0411 14.6816C35.5147 13.1875 33.0724 13.1875 31.546 14.6816L31.1389 15.0801L25.9491 10L10.4814 25.041L12.6184 27.1328L9.9726 29.7227L7.93738 39.6836L4.68102 42.8711C4.57926 42.6719 4.47749 42.5723 4.37573 42.3731L2.54403 43.2695C2.74755 43.668 2.95108 44.0664 3.1546 44.4648L0 47.5527L1.42466 48.9473L9.76908 40.7793L11.8043 30.8184L17.5029 25.2402C18.317 24.4434 19.7417 24.4434 20.5558 25.2402C21.2681 25.9375 21.3699 27.0332 20.8611 27.9297L17.8082 32.3125L31.4442 45.6602L29.6125 47.4531L22.4892 50.4414L12.2113 59.5059L13.5342 61L16.9941 57.9121C17.4012 58.1113 17.8082 58.3105 18.2153 58.5098L19.0294 56.7168C18.9276 56.6172 18.7241 56.6172 18.6223 56.5176L23.6086 52.1348L30.7319 49.1465L32.8689 47.0547L36.5323 50.6406L52 35.5L48.7436 32.3125C49.7612 30.918 49.5577 28.9258 48.2348 27.6309ZM46.8102 29.0254C47.319 29.5234 47.4207 30.2207 47.2172 30.918L44.8767 28.627C45.589 28.4277 46.3014 28.5273 46.8102 29.0254ZM43.7573 24.0449C44.4697 24.7422 44.4697 25.9375 43.7573 26.6348L43.3503 27.0332L40.7045 24.4434L41.1115 24.0449C41.8239 23.3477 43.045 23.3477 43.7573 24.0449ZM38.0587 19.0645C38.771 18.3672 39.9922 18.3672 40.7045 19.0645C41.4168 19.7617 41.4168 20.957 40.7045 21.6543L39.2798 23.0488L36.634 20.459L38.0587 19.0645ZM32.9706 16.0762C33.683 15.3789 34.9041 15.3789 35.6164 16.0762C35.9217 16.375 36.1252 16.873 36.1252 17.3711C36.1252 17.8691 35.9217 18.2676 35.6164 18.666L35.2094 19.0645L32.5636 16.4746L32.9706 16.0762ZM36.634 47.8516L20.454 32.0137L22.4892 29.0254C23.6086 27.4316 23.4051 25.2402 21.9804 23.8457C20.3522 22.252 17.7065 22.252 16.0783 23.8457L14.0431 25.8379L13.3307 25.1406L25.8474 12.8887L49.0489 35.5996L36.634 47.8516Z" fill="white"/>
                                                    <path d="M8 13.0667L6.35897 12C5.4359 12.9778 4.71795 14.0444 4 15.1111L5.74359 16C6.35897 15.0222 7.17949 14.0444 8 13.0667Z" fill="white"/>
                                                    <path d="M28 2.30769L27.814 0C26.5116 0.115385 25.2093 0.461538 24 0.807692L24.4651 3C25.5814 2.76923 26.7907 2.53846 28 2.30769Z" fill="white"/>
                                                    <path d="M21 4.17143L20.2222 2C18.7778 2.57143 17.3333 3.25714 16 4.05714L17.1111 6C18.3333 5.31429 19.6667 4.74286 21 4.17143Z" fill="white"/>
                                                    <path d="M14 7.52381L12.6047 6C11.3256 6.85714 10.1628 7.71429 9 8.66667L10.6279 10C11.6744 9.14286 12.8372 8.28571 14 7.52381Z" fill="white"/>
                                                    <path d="M37 0.333333C35.3721 0.166667 33.7442 0 32.1163 0L32 1.66667C33.5116 1.66667 35.0233 1.83333 36.5349 2L37 0.333333Z" fill="white"/>
                                                    <path d="M58 13.75C57.2195 12.3864 56.439 11.1364 55.4634 10L54 11.4773C54.878 12.6136 55.6585 13.75 56.3415 15L58 13.75Z" fill="white"/>
                                                    <path d="M45 2.81818C43.5556 2.09091 42.1111 1.48485 40.6667 1L40 3.30303C41.3333 3.78788 42.7778 4.39394 44.1111 5L45 2.81818Z" fill="white"/>
                                                    <path d="M60.6 29L63 28.907C62.88 27.6047 62.76 26.3023 62.4 25L60 25.3721C60.36 26.4884 60.48 27.6977 60.6 29Z" fill="white"/>
                                                    <path d="M52 7.43902C51.0909 6.56098 50 5.68293 49 5L48 6.65854C49 7.34146 50 8.12195 50.8182 9L52 7.43902Z" fill="white"/>
                                                    <path d="M61 21.3333C60.6471 19.8889 60.1176 18.4444 59.5882 17L58 18C58.5294 19.3333 58.9706 20.6667 59.3235 22L61 21.3333Z" fill="white"/>
                                                    <path d="M46 55.3L47.1111 57C48.4444 56.3 49.7778 55.5 51 54.6L49.6667 53C48.4444 53.9 47.2222 54.6 46 55.3Z" fill="white"/>
                                                    <path d="M53 50.4091L54.3659 52C55.3415 50.8636 56.2195 49.6136 57 48.3636L55.439 47C54.7561 48.25 53.9756 49.3864 53 50.4091Z" fill="white"/>
                                                    <path d="M39 58.125L39.5556 60C41.1111 59.625 42.5556 59.25 44 58.6875L43.1111 57C41.7778 57.4687 40.3333 57.8438 39 58.125Z" fill="white"/>
                                                    <path d="M4 19.7778L2.21875 19C1.75 20.4444 1.28125 21.8889 1 23.4444L2.78125 24C3.15625 22.4444 3.53125 21.1111 4 19.7778Z" fill="white"/>
                                                    <path d="M60 36.6364L62.1923 37C62.5385 35.7273 62.7692 34.4545 63 33.1818L60.6923 33C60.5769 34.2727 60.3462 35.4545 60 36.6364Z" fill="white"/>
                                                    <path d="M57 44.1111L59 45C59.7778 43.9333 60.4444 42.7778 61 41.6222L58.8889 41C58.3333 42.0667 57.6667 43.1333 57 44.1111Z" fill="white"/>
                                                    <path d="M0 35.2727C0.214286 36.5455 0.535714 37.8182 0.964286 39L3 38.4545C2.57143 37.2727 2.25 36.1818 2.03571 35L0 35.2727Z" fill="white"/>
                                                    <path d="M31.2857 59.1818H31V61H31.381C32.619 61 33.8571 60.9091 35 60.8182L34.8095 59C33.5714 59.0909 32.4286 59.1818 31.2857 59.1818Z" fill="white"/>
                                                    <path d="M1.81818 30.2381C1.81818 29.1905 1.90909 28.2381 2 27.1905L0.181818 27C0.0909091 28.0476 0 29.0952 0 30.2381C0 30.5238 0 30.7143 0 31H1.81818C1.81818 30.7143 1.81818 30.4286 1.81818 30.2381Z" fill="white"/>
                                                    <path d="M23 60.0357C24.1818 60.4643 25.4545 60.7857 26.7273 61L27 58.8571C25.8182 58.6429 24.6364 58.3214 23.5455 58L23 60.0357Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className="text">
                                                Zero delay;<br/>
                                                Cash payment upfront
                                            </div>
                                        </div>
                                        <div className="x-list">
                                            <div className="icon">
                                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M30.5 0C13.6557 0 0 13.6557 0 30.5C0 47.3443 13.6557 61 30.5 61C47.3443 61 61 47.3443 61 30.5C61 13.6557 47.3443 0 30.5 0ZM30.5 2.77273C45.8193 2.77273 58.2273 15.1807 58.2273 30.5C58.2273 45.8193 45.8193 58.2273 30.5 58.2273C15.1807 58.2273 2.77273 45.8193 2.77273 30.5C2.77273 15.1807 15.1807 2.77273 30.5 2.77273ZM37.5705 17.2602C37.2239 17.2602 36.8773 17.3989 36.6 17.6761L30.5 23.7761L24.4 17.6761C24.1227 17.3989 23.7068 17.2602 23.2216 17.2602C22.9443 17.2602 22.5977 17.3989 22.3898 17.6761L17.6761 22.3898C17.1216 22.9443 17.1216 23.7761 17.6761 24.3307L23.7761 30.4307L17.6761 36.5306C17.1216 37.0852 17.1216 37.917 17.6761 38.4716L22.3898 43.1852C22.9443 43.7398 23.7761 43.7398 24.3307 43.1852L30.4307 37.0852L36.5307 43.1852C37.0852 43.7398 37.917 43.7398 38.4716 43.1852L43.1852 38.4716C43.7398 37.917 43.7398 37.0852 43.1852 36.5306L37.0852 30.4307L43.1852 24.3307C43.7398 23.7761 43.7398 22.9443 43.1852 22.3898L38.4716 17.6761C38.2636 17.3989 37.917 17.2602 37.5705 17.2602ZM23.4295 20.6568L29.5295 26.7568C30.0841 27.3113 30.9159 27.3113 31.4705 26.7568L37.5705 20.6568L40.3432 23.4295L34.2432 29.5295C33.6886 30.0841 33.6886 30.9159 34.2432 31.4704L40.3432 37.5704L37.5705 40.3431L31.4705 34.2432C30.9159 33.6886 30.0841 33.6886 29.5295 34.2432L23.4295 40.3431L20.6568 37.5704L26.7568 31.4704C27.3114 30.9159 27.3114 30.0841 26.7568 29.5295L20.6568 23.4295L23.4295 20.6568Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className="text">
                                                No transport or<br/> hidden charges
                                            </div>
                                        </div>
                                        <div className="check-list">
                                            <div className="icon">
                                                <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M53.011 20.2714C52.0744 20.5033 51.4922 21.4824 51.72 22.4615C55.036 35.8591 47.037 49.4372 33.8994 52.7866C20.7365 56.1618 7.3964 48.0201 4.10567 34.6482C0.814936 21.2763 8.78863 7.67248 21.9262 4.29729C29.748 2.28764 38.0508 4.34882 44.126 9.75942C44.8601 10.4293 45.9739 10.352 46.632 9.60483C47.2902 8.85766 47.2142 7.72401 46.4801 7.05412C34.836 -3.30331 17.142 -2.11813 6.94076 9.70789C-3.26051 21.5339 -2.07078 39.5435 9.54803 49.9267C21.1668 60.3099 38.8608 59.1247 49.0621 47.2729C55.112 40.2391 57.3902 30.6546 55.1626 21.5855C54.9348 20.6064 53.9729 20.0396 53.011 20.2714Z" fill="white"/>
                                                    <path d="M47.5127 9.50961C46.863 8.83013 45.7801 8.83013 45.1304 9.50961L15.2436 40.7658L6.86957 32.008C6.21985 31.3286 5.137 31.3286 4.48728 32.008C3.83757 32.6875 3.83757 33.82 4.48728 34.4995L14.0405 44.4904C14.6902 45.1699 15.773 45.1699 16.4228 44.4904L47.5127 12.001C48.1624 11.3216 48.1624 10.2143 47.5127 9.50961Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className="text">
                                                On-the-spot<br/> quality checks
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                </div>
                <div className="container box-3" id="price">
                    <h2>Here’s our pricing guide*:</h2>
                    <div className="pricing show-desktop">
                        <div className="left">
                            Trade in 1-10 items<br/>
                            Trade in >10 items<br/>
                            Trade in >20 items
                        </div>
                        <div className="right">
                            Get up to 70 SGD/piece<br/>
                            Get up to 90 SGD/piece<br/>
                            Get up to 120 SGD/piece
                        </div>
                    </div>
                    <div className="pricing show-mobile-flex">
                        <div className="trade-in">
                            <p className="trade-items items">Trade in >10 items</p>
                            <p className="trade-items items">Trade in >10 items</p>
                            <p className="trade-items items">Trade in >20 items</p> 
                        </div>
                        <div className="get-up">
                            <p className="get-up-items items">Get up to 70 SGD/piece</p>
                            <p className="get-up-items items">Get up to 90 SGD/piece</p>
                            <p className="get-up-items items">Get up to 120 SGD/piece</p>  
                        </div>
                    </div>
                    <div className="note-1">
                        <p>
                            *Prices stated are generally for items at least SGD$300-$500 in retail value. For premium items >$500 in retail value, prices are negotiable.
                        </p>
                    </div>
                    <div className="divider-wrapper" >
                        <div className="divider"></div>
                    </div>
                </div>
                <div className="container box-4" id="how">
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
                <div className="container box-5" id="brands">
                    <div className="row grid-wrapper content">  
                        <h2>Brands we buy.</h2>
                        <div className="brandings show-desktop">
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
                                    <a href="/brandSearch">View more Brands ></a>
                                </div>
                            </div>
                        </div>
                        <div className="brandings show-mobile-flex">
                            <div className="items">
                                <div className="left">
                                    <div className="brandings-item logo1"> </div>
                                    <div className="brandings-item logo3"> </div>
                                    <div className="brandings-item logo5"> </div>
                                    <div className="brandings-item logo7"> </div>
                                    <div className="brandings-item logo9"> </div>
                                    <div className="brandings-item logo11"> </div>

                                </div>
                                <div className="right">
                                    <div className="brandings-item logo2"> </div>
                                    <div className="brandings-item logo4"> </div>
                                    <div className="brandings-item logo6"> </div>
                                    <div className="brandings-item logo8"> </div>
                                    <div className="brandings-item logo10"> </div>
                                    <div className="brandings-item logo12"> </div>
                                </div> 
                            </div> 
                            <div className="view-more">
                                <a href="/brandSearch">View more Brands ></a>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="container box-6">
                    <h2>Clothes we've bought</h2>

                    <div className="content show-desktop">
                        <Swiper {...params}>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe1} alt="" /></span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">MM La Fleur</div>
                                    <div className="info">The Dana Dress - Tuxedo</div>
                                    <div className="price">Retail SGD $325</div>
                                </div>
                            </div>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe2} alt="" /></span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">TALITHA</div>
                                    <div className="info">Ashanti Geometric Print Silk Georgette Burgundy Dress</div>
                                    <div className="price">Retail SGD $1,365</div>
                                </div>
                            </div>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe3} alt="" /></span>
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
                                        <img src={clothe4} alt="" />
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
                                        <img src={clothe5} alt="" />
                                    </span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">RIXO LONDON</div>
                                    <div className="info">Martha Silk Midi  Floral Printed Dress</div>
                                    <div className="price">Retail SGD $738</div>
                                </div>
                            </div> 
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit">
                                        <img src={clothe6} alt="" />
                                    </span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">Karen Millen</div>
                                    <div className="info">Dot Collection Day Dress</div>
                                    <div className="price">Retail SGD $314</div>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                    <div className="content show-mobile"> 
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe1} alt="" /></span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">MM La Fleur</div>
                                    <div className="info">The Dana Dress - Tuxedo</div>
                                    <div className="price">Retail SGD $325</div>
                                </div>
                            </div> 
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe2} alt="" /></span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">TALITHA</div>
                                    <div className="info">Ashanti Geometric Print Silk Georgette Burgundy Dress</div>
                                    <div className="price">Retail SGD $1,365</div>
                                </div>
                            </div>
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit"><img src={clothe3} alt="" /></span>
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
                                        <img src={clothe4} alt="" />
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
                                        <img src={clothe5} alt="" />
                                    </span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">RIXO LONDON</div>
                                    <div className="info">Martha Silk Midi  Floral Printed Dress</div>
                                    <div className="price">Retail SGD $738</div>
                                </div>
                            </div>  
                            <div className="clothes-container">
                                <div className="clothes-picture">
                                    <span className="image fit">
                                        <img src={clothe6} alt="" />
                                    </span>
                                </div>
                                <div className="clothes-details">
                                    <div className="title">Karen Millen</div>
                                    <div className="info">Dot Collection Day Dress</div>
                                    <div className="price">Retail SGD $314</div>
                                </div>
                            </div>
                    </div> 
                </div> 
                <div className="divider-wrapper" >
                    <div className="divider"></div>
                </div>
                <div className="container box-7" id="contact-us">
                    <div className="content">
                        <div className="context"> 
                            <div className="title">
                                What's happens next?
                            </div>
                            <div className="sub-title">
                                <p> 
                                    We’ve built a community made up of some of the most fashion-savvy movers and shakers in Singapore who’ve each traded in their designer clothing to build a shared wardrobe accessible by a monthly subscription.  
                                    <br/><br/>
                                    Want to join us? Trade in your clothing!
                                </p>
                            </div> 
                        </div>
                        <div className="row grid-wrapper">
                            <div className="col-6 contact-details">
                            <MailChimpForm/>
                            </div>
                            <div className="col-6 address-contact">
                                <div className="address">
                                    <div className="-title">
                                        <p>
                                            Address:
                                        </p>
                                    </div>
                                    <div className="address-context">
                                        <p>
                                            60 Paya Lebar Road <br/> Paya Lebar Square #07-49 <br/> Singapore 438103
                                        </p>
                                    </div>
                                </div> 
                                <div className="contact">
                                    <div className="contact-title">
                                        <p>
                                        Contact:
                                        </p>
                                    </div>
                                    <div className="contact-context">
                                        <p>
                                        hello@prelove.sg
                                        </p>
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
                            Ready to start the<br/> year fresh?
                        </div>                         
                        <div className="button-wrapper">
                            <a className="interested-btn button nav-contact-us">YES!</a>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
}

export default Homepage;