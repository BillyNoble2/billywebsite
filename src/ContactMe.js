import React from "react";
import './ContactMe.css';


export default function ContactMe(){
    return(
        <div className = "Contact">
            <div className = "ContactHeader">
                <h1>Contact Me</h1>
            </div>
            <p>Please fill out my contact form and I will get back to you.</p>
            <div class="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                    <button className = "sendBtn" type = "submit">Send Message</button>
            </div>
        </div>
    );
}