function Kalavryta() {
  return (
    <div className="kalavryta-content">
      <h1 className="page-title">Καλάβρυτα</h1>
      <h1 className="page-subtitle">Αξιοθέατα & Δραστηριότητες</h1>
      {/* 1) Σπήλαιο Λιμνών */}
      <section className="content-row">
        <div className="photo-side">
          <img src="/images/kalavryta/limnon.jpg" alt="Σπήλαιο Λιμνών" />
        </div>
        <div className="text-side">
          <h2>Σπήλαιο Λιμνών</h2>
          <p>
            Ένα μοναδικό σπήλαιο με αλλεπάλληλα επίπεδα και υπόγειες λίμνες, ιδανικό για επίσκεψη όλες τις εποχές.
          </p>
        </div>
      </section>

      {/* 2) Αγία Λαύρα */}
      <section className="content-row reverse">
        <div className="text-side">
          <h2>Μονή Αγίας Λαύρας</h2>
          <p>
            Ιστορικό μοναστήρι-ορόσημο για την περιοχή, συνδεδεμένο με σημαντικές στιγμές της νεότερης ελληνικής ιστορίας.
          </p>
        </div>
        <div className="photo-side">
          <img src="/images/kalavryta/agia-lavra.jpeg" alt="Μονή Αγίας Λαύρας" />
        </div>
      </section>

      {/* 3) Μέγα Σπήλαιο */}
      <section className="content-row">
        <div className="photo-side">
          <img src="/images/kalavryta/mega-spilaio.jpg" alt="Μονή Μεγάλου Σπηλαίου" />
        </div>
        <div className="text-side">
          <h2>Μέγα Σπήλαιο</h2>
          <p>
            Εντυπωσιακή μονή χτισμένη σε βράχο, με μοναδική θέα και έντονη αίσθηση “κάστρου” μέσα στο φυσικό τοπίο.
          </p>
        </div>
      </section>

      {/* 4) Χιονοδρομικό */}
      <section className="content-row reverse">
        <div className="text-side">
          <h2>Χιονοδρομικό Κέντρο Καλαβρύτων</h2>
          <p>
            Στον Χελμό, λίγα χιλιόμετρα από την πόλη, προσφέρει πίστες για όλα τα επίπεδα και υπέροχη εμπειρία χειμώνα.
          </p>
        </div>
        <div className="photo-side">
          <img src="/images/kalavryta/ski-center.jpg" alt="Χιονοδρομικό Κέντρο Καλαβρύτων" />
        </div>
      </section>

      {/* 5) Τόπος Θυσίας */}
      <section className="content-row">
        <div className="photo-side">
          <img src="/images/kalavryta/topos-thysias.jpg" alt="Τόπος Θυσίας" />
        </div>
        <div className="text-side">
          <h2>Τόπος Θυσίας</h2>
          <p>
            Ένας χώρος μνήμης με ιδιαίτερη συναισθηματική βαρύτητα, αφιερωμένος στα τραγικά γεγονότα του Δεκεμβρίου 1943.
          </p>
        </div>
      </section>

      {/* 6) Μουσείο Καλαβρυτινού Ολοκαυτώματος */}
      <section className="content-row reverse">
        <div className="text-side">
          <h2>Μουσείο Καλαβρυτινού Ολοκαυτώματος</h2>
          <p>
            Μουσείο-μαρτυρία για το Ολοκαύτωμα των Καλαβρύτων, στεγασμένο σε ιστορικό κτήριο και με εκθέματα που συγκινούν.
          </p>
        </div>
        <div className="photo-side">
          <img src="/images/kalavryta/holocaust-museum.jpg" alt="Μουσείο Καλαβρυτινού Ολοκαυτώματος" />
        </div>
      </section>

      {/* 7) Οδοντωτός */}
      <section className="content-row">
        <div className="photo-side">
          <img src="/images/kalavryta/odontotos.jpeg" alt="Οδοντωτός Διακοφτό–Καλάβρυτα" />
        </div>
        <div className="text-side">
          <h2>Οδοντωτός</h2>
          <p>
            Η ιστορική οδοντωτή γραμμή Διακοφτό–Καλάβρυτα περνά μέσα από το φαράγγι του Βουραϊκού και προσφέρει μοναδική διαδρομή.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Kalavryta;
