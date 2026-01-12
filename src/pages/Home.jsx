import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Home() {
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();

  return (
    <div className="home-content">
      {/* Hero Section with 3-image crossfade */}
      <section className="home-hero">
        <div className="hero-slides" aria-hidden="true">
          <div className="hero-slide s1" />
          <div className="hero-slide s2" />
          <div className="hero-slide s3" />
        </div>

        <div className="hero-text hero-text-animate">
          <h1>Ξενοδοχείο Δρυάδες-Καλάβρυτα</h1>
          <p>Ζεστή φιλοξενία στην καρδιά των Καλαβρύτων</p>

          <div className="hero-buttons">
            <Link to="/hotel" className="btn-primary">
              Δείτε Φωτογραφίες
            </Link>
            <Link to="/contact" className="btn-secondary">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section
        ref={section1.ref}
        className={`content-row reveal ${section1.visible ? "visible" : ""}`}
      >
        <div className="photo-side">
          <img src="/images/kalavryta.jpg" alt="Καλάβρυτα" />
        </div>
        <div className="text-side">
          <h2>Καλωσήρθατε στα Καλάβρυτα</h2>
          <p>
            Μια ορεινή απόδραση με φύση, ιστορία και δραστηριότητες όλες τις εποχές.
            Ανακαλύψτε τον Οδοντωτό, το Χιονοδρομικό Κέντρο και τα μοναστήρια της
            περιοχής.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2.ref}
        className={`content-row reverse reveal ${section2.visible ? "visible" : ""}`}
      >
        <div className="text-side">
          <h2>Δωμάτια & Παροχές</h2>
          <p>
            Άνετα δωμάτια, καθαροί χώροι και ζεστή ατμόσφαιρα για να ξεκουραστείτε μετά
            τη βόλτα. Ιδανική επιλογή για ζευγάρια, οικογένειες και παρέες που θέλουν
            χαλάρωση στα Καλάβρυτα.
          </p>
        </div>
        <div className="photo-side">
          <img src="/images/hotel.jpg" alt="Ξενοδοχείο Δρυάδες" />
        </div>
      </section>
    </div>
  );
}

export default Home;
