import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple Going To Be Married</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <div
                        id="carouselIndicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="2"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                        <img
                            className="flower groom-flower"
                            src="../assets/images/golden-rose.png"
                            alt="flower"
                        />
                    </div>
                    <div className="info groom-info">
                        <h3>
                            Muhammad Irfan <sub>B.Com.,</sub>
                        </h3>
                        <p className="mt-2">
                            Prop.: <strong>SSV Fashions,</strong> #19/96, M.M.
                            Road, Adoni.
                        </p>
                        <p className="mt-2">
                            Paternal Grand S/O Janaab{" "}
                            <strong>P. Sattar Sahab(Late),</strong>
                        </p>
                        <p className="mt-2">
                            Maternal Grand S/O Janaab{" "}
                            <strong>H. Nabi Rasool Sahab.</strong>
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/bride.png"
                            alt="Bride_img"
                        />
                        <img
                            className="flower bride-flower"
                            src="../assets/images/golden-rose.png"
                            alt="flower"
                        />
                    </div>

                    <div className="info">
                        <h3>
                            Noor -e- A'ayin,
                            {/* <sub>MBA.,</sub> */}
                        </h3>
                        <p className="mt-2">
                            D/O Janaab <strong>P. Vali Basha Sahab,</strong>
                            <br />
                            Deputy Tahsildar, Civivl Supplies,
                            <br />
                            MRO Office, Adoni.
                        </p>
                        <p className="mt-2">
                            H. No.: #23/407-A, Karvanpet,
                            <br />
                            Adoni.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
