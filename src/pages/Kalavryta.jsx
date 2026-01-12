import { useScrollReveal } from "../hooks/useScrollReveal";

function Kalavryta() {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();
  const s5 = useScrollReveal();
  const s6 = useScrollReveal();
  const s7 = useScrollReveal();

  return (
    <div className="kalavryta-content">
      <h1 className="page-title">Καλάβρυτα</h1>

      <section ref={s1.ref} className={`content-row reveal ${s1.visible ? "visible" : ""}`}>
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

      <section ref={s2.ref} className={`content-row reverse reveal ${s2.visible ? "visible" : ""}`}>
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

      <section ref={s3.ref} className={`content-row reveal ${s3.visible ? "visible" : ""}`}>
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

      <section ref={s4.ref} className={`content-row reverse reveal ${s4.visible ? "visible" : ""}`}>
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

      <section ref={s5.ref} className={`content-row reveal ${s5.visible ? "visible" : ""}`}>
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

      <section ref={s6.ref} className={`content-row reverse reveal ${s6.visible ? "visible" : ""}`}>
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

      <section ref={s7.ref} className={`content-row reveal ${s7.visible ? "visible" : ""}`}>
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
