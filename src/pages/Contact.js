import React from 'react';
import ContactCard from '../components/ContactCard';
import "../styles/Contact.css"

const Contact = () => {
    return ( 
        <div className="contact-info-wrapper">
            <h1>KONTAKT</h1>
            <div className="welcome-message">
                <h2>Witaj na naszej stronie</h2>
                <div>Jeżeli jesteś zainteresowana/y dołączeniem do naszej drużyny jako zawodnik lub sponsor, zadzwoń lub napisz do nas.</div>
            </div>
            <div className="contact-box-container">
                <ContactCard iconClass="fa-solid fa-location-dot fa-2x" cardTitle="Adres stadionu" text="ul. Parkowa 52 32-020 Gaj Małopolska"/>
                <ContactCard iconClass="fa-solid fa-envelope fa-2x" cardTitle="Napisz do nas" text="victoria@mogilany.pl"/>
                <ContactCard iconClass="fa-solid fa-phone fa-2x" cardTitle="Zadzwoń" text="ul. Kolna 2 30-381 Kraków Małopolska Polska"/>
            </div>
            
        </div>
     );
}
 
export default Contact;