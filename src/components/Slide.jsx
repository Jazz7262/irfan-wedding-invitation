import React from "react";
import "../styles/Slide.css";

function Slide() {
    return (
        <section id="slide">
            <div
                className="slide-wrapper"
                data-aos="fade-up"
                data-aos-offset="300"
            >
                <div className="img-container">
                    <img
                        alt="frame"
                        src={
                            window.innerWidth > 428
                                ? "./assets/images/frame.png"
                                : "./assets/images/frame-sm.png"
                        }
                    />
                </div>
                <div className="text-content">
                    <h3>We Are Arranging our Son's Wedding</h3>
                    <h1>Save Our Date</h1>
                    <p>
                        11<sup>th</sup> December, 2022
                    </p>
                </div>
                <img
                    className="flower flower-top-left"
                    src="../assets/images/flower.png"
                    alt="flower"
                />
                <img
                    className="flower flower-top-right"
                    src="../assets/images/flower.png"
                    alt="flower"
                />
                <img
                    className="flower flower-bottom-left"
                    src="../assets/images/flower.png"
                    alt="flower"
                />
                <img
                    className="flower flower-bottom-right"
                    src="../assets/images/flower.png"
                    alt="flower"
                />
            </div>
        </section>
    );
}

export default Slide;
