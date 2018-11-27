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

        
      $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
 
        if (scrollTop >= ($('#about').offset().top-50) && scrollTop <=  ($('#price').offset().top-50)){
            $('.header-container.show-mobile-flex > .ham-menu').css('display', 'none')
            $('.header-container.show-mobile-flex > .ham-menu.white').css('display', 'block')
            $('.header-container.show-mobile-flex > .header-title p').css('color', '#fff');
        } else {
            $('.header-container.show-mobile-flex > .header-title p').css('color', '#FF6B00') 
            $('.header-container.show-mobile-flex > .ham-menu').css('display', 'block')
            $('.header-container.show-mobile-flex > .ham-menu.white').css('display', 'none')
        }

      })
        $(".ham-menu").on("click", function(){
            $('.side-menu').css("left", "0px");
            $('body').css("overflow-y", "hidden");
            $('.ham-menu').css("opacity", "0");
            $(".banner").each(function() {
                $(this).css("filter", "blur(2px)");
            })
        });
        $(".close-side").on("click", function(){
            $('.side-menu').css("left", "-100vw");
            $('body').css("overflow-y", "scroll");
            $('.ham-menu').css("opacity", "1");
            $(".banner").each(function() {
                $(this).css("filter", "none");
            })
        });
        
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

        // if($('.msg-alert p').text() != "Thank you for subscribing!"){
        //     return;
        // }else{
        //     $(".box-7 .content . grid-wrapper .contact-details").css("display","none")
        // }
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
