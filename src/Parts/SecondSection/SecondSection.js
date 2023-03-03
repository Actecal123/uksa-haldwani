import React from "react";
import './SecondSection.css'
import { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SecondSection = () => {
    return (
        <>
            <div className="SecondSection-container">
                <div className="SecondSection-main-container">
                    <div className="second-section-content-container">
                        <div className="member-container">
                            <div className="president-box-container">
                                <div style={{ display: "flex" }}>
                                    <img className="member-image" src="assets/president.JPG" />
                                    <div style={{ marginLeft: "10px" }}>
                                        <p className="member-name">President </p>
                                        <p>Dr. Madan Singh Arya</p>
                                    </div>

                                </div>
                                <div style={{ display: "flex" }}>
                                    <img className="member-image" src="assets/secretery.JPG" />
                                    <div style={{ marginLeft: "10px" }}>
                                        <p className="member-name">Secretary</p>
                                        <p>Dr. Kavita Pokharia</p>

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img className="member-image" src="assets/trasurer.JPG" />
                                    <div style={{ marginLeft: "10px" }}>
                                        <p className="member-name">Treasurer</p>
                                        <p>Dr. Kaushal Pandey</p>
                                    </div>

                                </div>
                            </div>
                            <div className="president-box-container">
                                <div style={{ display: "flex" }}>
                                    <img className="member-image" src="assets/dr.JPG" />
                                    <p style={{ marginLeft: "10px" }}>Dr.Abhishek Nautiyal</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img className="member-image" src="assets/dr1.JPG" />
                                    <p style={{ marginLeft: "10px" }}>Dr. Charul Jakwal</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img className="member-image" src="assets/dr2.JPG" />
                                    <p style={{ marginLeft: "10px" }}>Dr. Sikha Singh</p>
                                </div>
                            </div>
                        </div>

                        <div className="second-section-about">
                            <p style={{ lineHeight: "28px" }}>
                                lorem ipsum  is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                lorem ipsum  is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SecondSection