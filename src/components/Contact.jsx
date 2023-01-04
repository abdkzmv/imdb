import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-main">
            <div className="container-contact">
                <div className="contact-inputs">
                    <form action="post">
                        <input type="text" placeholder="Subject" id="subject-input" className="my-input" />
                        <br />
                        <input type="text" placeholder="Email" id="email-input" className="my-input" />
                        <br />
                        <textarea name="messsage" id="message" rows="10" placeholder="Message" className="my-text"></textarea>
                        <br />
                        <input type="submit" value="Submit" className="submit-input" />
                    </form>
                </div>
            </div>
        </div>
    );
}