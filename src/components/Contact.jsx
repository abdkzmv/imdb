import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-main">
            <h2>Write us 📝</h2>
            <div className="container-contact">
                <div className="contact-inputs">
                    <form action="http://localhost:3004/messages" method="post">
                        <input type="text" name="subject" placeholder="Subject" id="subject-input" className="my-input" />
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