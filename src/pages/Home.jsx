function Home() {
  return (
    <div className="home-content">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-overlay">
          <h1>Ξενοδοχείο Δρυάδες</h1>
          <p>Ζεστή φιλοξενία στην καρδιά των Καλαβρύτων</p>
          <div className="hero-buttons">
            <a href="/hotel" className="btn-primary">Δείτε Φωτογραφίες</a>
            <a href="/contact" className="btn-secondary">Επικοινωνία</a>
          </div>
        </div>
      </section>

      {/* ΝΕΟ Row 1: Καλάβρυτα */}
      <section className="content-row">
        <div className="photo-side">
          <img src="/images/kalavryta.jpg" alt="Καλάβρυτα" />
        </div>
        <div className="text-side">
          <h2>Καλωσήρθατε στα Καλάβρυτα</h2>
          <p>
            Μια ορεινή απόδραση με φύση, ιστορία και δραστηριότητες όλες τις εποχές.
            Ανακαλύψτε τον Οδοντωτό, το Χιονοδρομικό Κέντρο και τα μοναστήρια της περιοχής.
          </p>
        </div>
      </section>

      {/* ΝΕΟ Row 2: Ξενοδοχείο */}
      <section className="content-row reverse">
        <div className="text-side">
          <h2>Δωμάτια & Παροχές</h2>
          <p>
            Άνετα δωμάτια, καθαροί χώροι και ζεστή ατμόσφαιρα για να ξεκουραστείτε μετά τη βόλτα.
            Ιδανική επιλογή για ζευγάρια, οικογένειες και παρέες που θέλουν χαλάρωση στα Καλάβρυτα.
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
