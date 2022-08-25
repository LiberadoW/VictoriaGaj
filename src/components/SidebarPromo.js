import React from 'react';
import "../styles/SidebarPromo.css"
const SidebarPromo = () => {
    return ( 
        <div className="sidebar-promo">
        <p className="sidebar-promo-title">
        <h3>Dołącz do nas już dziś!</h3>
        </p>
        <div className="sidebar-promo-text">
            <h3>UKS Victoria Gaj</h3>
            <p>Zaprasza wszystkie dziewczyny na niezwykłą przygodę z piłką nożną!</p>
            <ul>
                <li>Profesjonalne treningi</li>
                <li>Rozgrywki ligowe</li>
                <li>Obozy przygotowawcze</li>
                <li>Turnieje halowe</li>
                <li>Szkolenie bramkarskie</li>
                <li>Boisko trawiaste latem</li>
                <li>Hala sportowa zimą</li>
                <li>Różne grupy wiekowe</li>
                <li>Świetna atmosfera</li>
            </ul>
            
        </div>
        </div>
     );
}
 
export default SidebarPromo;