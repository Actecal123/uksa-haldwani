import React from "react";
import './FirstSection.css'
import { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const FirstSection = () => {
    return (
        <>
            <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
                <div>
                    <img className="carousel-image" src="assets/nainital.jpg" />

                </div>
                <div>
                    <img className="carousel-image" src="assets/uksa_slider1.jpg" />

                </div>
                <div>
                    <img className="carousel-image" src="assets/uksa_slider2.jpg" />

                </div>
            </Carousel>
        </>
    )
}
export default FirstSection