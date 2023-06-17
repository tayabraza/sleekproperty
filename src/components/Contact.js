import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sleekproperty', 'template_sleekproperty', form.current, 'user_DfQXJLKiATMqBuiHCEkQO')
        .then((result) => {
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');
            formMessage.style.display = 'block';
            contactForm.reset();
            setTimeout(() =>{
                formMessage.style.display = 'none';
            },9000)
            //console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

    return (
        
        <div className="page">

            <h1 className="sleek-heading" >Contact Us</h1>

            <div className="property-container">

                <p>
                    Our lines operate Monday – Sunday 9am – 5:30pm with a specialist team to deal with enquiries and emergencies. 
                </p>

                <p>
                    Email: <a href="mailto:info@sleekproperty.co.uk" >info@sleekproperty.co.uk</a><br/>
                    Phone: <a href="tel:07787112305"> 07787 112305</a>
                </p>

                <p>
                    Complete the contact form below and a member of the team will contact you as soon as possible:
                </p>

                <form ref={form} onSubmit={sendEmail} id="contactForm">

                    <div className="input-group">
  
                        <input type="text" placeholder="Name" name="name" id="name" required />

                        <input type="email" placeholder="Enter your Email" name="email" id="email" required />

                        <input type="tel" placeholder="Phone" name="phone" id="phone" minLength="11" maxLength="14" required />
                    
                    </div>

                    <textarea placeholder="How can we help" name="message" id="message"></textarea>

                    <p id="formMessage" style={{'display' : 'none', 'margin': '1rem auto', 'color': '#EDC33F'}}>Thank you for contacting Sleek Property. One of our team member will be in touch with you shortly.</p>

                    <button type="submit" className="sleek-btn">Send</button>

                </form>

            </div>

        </div>

    )
}

export default Contact;