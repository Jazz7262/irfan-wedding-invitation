import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. P. Shaik Sha Vali Sahab</h2>
                <h5>
                    Prop.: <strong>SSV Biryani Hotel</strong>, Adoni.
                </h5>
                <h5 className="mt-3">
                    H.No. 1/541/16-A, NGO's Colony,
                    <br />
                    Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 98663 62876, <br />
                    +91 77996 74186, <br />
                    +91 84658 52280, <br />
                    +91 83094 71044.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
