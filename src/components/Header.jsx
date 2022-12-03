import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <div className="poster-wrapper">
                <img
                    src="../assets/images/bismillah.png"
                    alt="bismillah"
                    className="poster"
                />
            </div>
            <div className="text-wrapper">
                <h3>
                    Begin With The Name Of Allaah, The Most Benificient And The
                    Most Merciful
                </h3>

                <h4 className="mt-4">
                    Under the spirutual patronage of:
                    <br />
                    Qutub-e-Adoni Qutub-ud-Dawaayir Ashraf-ul-Ma'aasir
                    Sayyid-e-Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
                    Rahamatullaahi Alaih, Adoni.
                </h4>

                <h4 className="mt-4">
                    Under the guidance of Peer-O-Murshid:
                    <br />
                    Hazrath Moulana Sayyid Shah Abdullah Hussaini Baadshah
                    Quadri, Al-Haydari Al-Maroof Hussaini Peer Sahab Qibla
                    Madda-zilluhul-a'ali Sajjada Nasheen Bargah-e-Hazarath
                    Lateef Laubali, Kurnool.
                </h4>
                
            </div>
        </section>
    );
}

export default Header;
