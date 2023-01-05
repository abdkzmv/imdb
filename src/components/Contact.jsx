import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-main">
            <h2>Write us</h2>
            <div className="container-contact">
                <div className="contact-inputs">
                    <form action="https://formspree.io/f/xvoyqpqd" method="post">
                        <input type="text" name="name" placeholder="Subject" id="subject-input" className="my-input" />
                        <br />
                        <input type="text" name="email" placeholder="Email" id="email-input" className="my-input" />
                        <br />
                        <textarea name="message" id="message" rows="10" placeholder="Message" className="my-text"></textarea>
                        <br />
                        <input id="contact-submit-btn" type="submit" value="Submit" className="submit-input" />
                    </form>
                </div>
            </div>
        </div>
    );
}