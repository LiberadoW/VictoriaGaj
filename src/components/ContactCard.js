import React from 'react';

const ContactCard = (props) => {
    return ( 
        <div className="contact-card">
            <i className={props.iconClass}></i>
            <h2>{props.cardTitle}</h2>
            <p>{props.text}</p>
        </div>
     );
}
 
export default ContactCard;
