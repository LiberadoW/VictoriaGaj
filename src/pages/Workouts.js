import React from "react";
import "../styles/Workouts.css";

const Workout = () => {
  return (
    <div className="workout">
      <h1>TRENINGI</h1>
      <div className="workouts">
        <div className="workout-info-container">
          <h3>Miesiące letnie</h3>
          <h4>Wtorek i czwartek</h4>
          <p>Godzina: 18:30</p>
          <p>Stadion LKS Gajowianka</p>
          <p>Adres: ul. Parkowa 52, 32-030 Gaj</p>
          <div className="map-container">
            <iframe
              title="mapStadium"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.6955495260954!2d19.89799631588602!3d49.960813330404456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165d56b24cade5%3A0xcc2b701cee991586!2sLKS%20Gajowianka!5e0!3m2!1spl!2spl!4v1661342866035!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="workout-info-container">
          <h3>Miesiące zimowe</h3>
          <h4>Wtorek i czwartek</h4>
          <p>Godzina: 18:30</p>
          <p>Szkoła Podstawowa im. Jana Pawła II</p>
          <p>Adres: ul. Szkolna 73, 32-031 Gaj</p>
          <div className="map-container">
            <iframe
              title="mapSchool"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.6955495260954!2d19.89799631588602!3d49.960813330404456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165d571700464b%3A0xad638f463c5bff20!2sSzko%C5%82a%20Podstawowa%20im.%20Jana%20Paw%C5%82a%20II!5e0!3m2!1spl!2spl!4v1661342822618!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
