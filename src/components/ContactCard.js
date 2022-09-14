import React from 'react';

const ContactCard = ({iconClass,cardTitle,text}) => {
    return ( 
        <div className="contact-card">
            <i className={iconClass}></i>
            <h2>{cardTitle}</h2>
            <p>{text}</p>
        </div>
     );
}
 
export default ContactCard;
