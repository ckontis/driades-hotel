import { useScrollReveal } from "../hooks/useScrollReveal";
import HeroVideoCycle from "../components/HeroVideoCycle";

function Home() {
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();

  return (
    <div className="home-content">
      <HeroVideoCycle />

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
