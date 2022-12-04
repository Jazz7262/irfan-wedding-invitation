import React from "react";
import $ from "jquery";
import AOS from "aos";
import "../styles/CustomModel.css";

function CustomModel() {
    function handleClick() {
        $("#card").fadeOut();
        // $("#modal").fadeOut();
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        document.getElementById("audio").play();
    }

    return (
        // <section id="modal">
        //     <div className="modal-content">
        //         <div className="modal-heading">
        //             <span className="modal-title">
        //                 SSV Family's Wedding Invitation
        //             </span>
        //         </div>
        //         <div className="modal-body">
        //             <p>From</p>
        //             <span className="modal-description">
        //                 Mr. & Mrs. P. Shaikh Sha Vali Sahab
        //             </span>
        //         </div>
        //         <div className="modal-footer">
        //             <button className="btn btn-primary" onClick={handleClick}>
        //                 Open
        //             </button>
        //         </div>
        //     </div>
        // </section>
        <section id="card">
            <div className="card-wrapper">
                {/* <div className="strip-wrapper">
                    <div className="top-strip"></div>
                </div> */}
                <div className="card-content">
                    <h1 className="card-title">
                        SSV Family's Wedding Invitation
                    </h1>
                    <img
                        src="../assets/images/line-divider.png"
                        alt="line_divider"
                        className="line-divider"
                    />
                    <h4>From:</h4>
                    <h2 className="invitor-name mb-5">
                        Mr. & Mrs. P. Shaikh Sha Vali Sahab
                    </h2>
                    <button className="btn btn-primary" onClick={handleClick}>
                        Open
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CustomModel;
