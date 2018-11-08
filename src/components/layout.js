import React from "react";
import "../assets/scss/main.scss";
import $ from 'jquery';

import Header from "./Header";
import MailChimpForm from "./mailChimpForm";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);

      
      $(document).ready(function(){ 
        window.setTimeout(function(){ 
            $("body").css("opacity", 1);
            if(window.location.href.lastIndexOf('#') > -1){ 
                var url = window.location.href;
                var id = url.substring(url.lastIndexOf('#') + 1);
                $('html, body').animate({scrollTop: $("#"+id).offset().top - 100 }, 500);
            }
        }, 500); 
        $('.nav-about').on('click', function() {  
            if(window.location.pathname == '/' ||  window.location.pathname.indexOf("index.html") > -1){ 
                $('html, body').animate({
                scrollTop: $("#about").offset().top }, 500);
            }else{
                window.location.href =  "/index.html#about";
            }
        });
        $('.nav-price').on('click', function() {
            if(window.location.pathname == '/' ||  window.location.pathname.indexOf("index.html") > -1){ 
                $('html, body').animate({
                scrollTop: $("#price").offset().top }, 500);
            }else{
                window.location.href =  "/index.html#price";
            }
        });
        $('.nav-how').on('click', function() {
            if(window.location.pathname == '/' ||  window.location.pathname.indexOf("index.html") > -1 ){ 
                $('html, body').animate({
                scrollTop: $("#how").offset().top }, 500);
            }else{
                window.location.href =  "/index.html#how";
            }
        });
        
        $('.nav-brands').on('click', function() {
            if(window.location.pathname == '/' ||  window.location.pathname.indexOf("index.html") > -1 ){ 
                $('html, body').animate({
                scrollTop: $("#brands").offset().top }, 500);
            }else{
                window.location.href =  "/index.html#brands";
            }
        });
        $('.nav-contact-us').on('click', function() {
            if(window.location.pathname == '/' ||  window.location.pathname.indexOf("index.html") > -1){ 
                $('html, body').animate({
                scrollTop: $("#contact-us").offset().top - 100 }, 500);
            }else{
                window.location.href =  "/index.html#contact-us";
            }
        });
    });
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
                <Header />
                {children}
            </div>
        );
    }
}

export default Template;
