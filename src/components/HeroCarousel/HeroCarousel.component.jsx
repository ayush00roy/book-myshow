import React from 'react'
import HeroSlider from "react-slick"

//component
import { NextArrow, PrevArrow } from './Arrows.component';


const HeroCarousel = () => {
    const settingLG = {
        dots:true,
        arrows:true, 
        autoplay:true, 
        centerMode: true, 
        centerPadding:"300px",
        slidesToShow: 1,
        infinite : true,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow />  
     };
    const settings = {
        arrows:true,
        centerPadding: "150px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow />
      };
    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1629181011015_bellbottom_incinemasnow_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629396533100_bas_web_banner_changed.jpg"
    ]
   
    return (
    <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
 
             {images.map((image) => (
                <div className="w-auto h-40 md:h-64 py-3">
                    <img src={image} alt="testing" className="w-full h-full" />
                </div>
                 ))}

            </HeroSlider>
        </div>
        
        <div className="hidden lg:block">
            <HeroSlider {...settingLG}>
 
                {images.map((image) => (
                    <div className="w-full h-80 px-2 py-3">
                      <img src={image} alt="testing" className="w-full h-full"/>
                      </div>
                    ))}

             </HeroSlider>
        </div>
    </>
    );
};

export default HeroCarousel;
