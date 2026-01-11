import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Επικοινωνία</h2>
      
      <p>Διεύθυνση: <b> Οθωνος Αμαλίας, Καλάβρυτα 250 01 </b></p>
      <p>Email: <b>info@driades-hotel.gr</b></p>
      <p>
        Τηλέφωνο: <b>2692023840</b>
      </p>
      <p>
        Κινητό: <b>6977708378</b>
      </p>

      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.6133263929164!2d22.1092051!3d38.0305259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135fc4ef3ca2eb03%3A0xa5fcff36c35da305!2zzp7Otc69zr_OtM6_z4fOtc6vzr8gzpTPgc-FzqzOtM61z4I!5e1!3m2!1sel!2sgr!4v1768138923919!5m2!1sel!2sgr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Χάρτης Δρυάδες Hotel Καλάβρυτα"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
