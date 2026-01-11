import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="header-content header-right">
        <button
          className="menu-button"
          aria-label="Μενού"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        {/* Backdrop overlay (κάνει click για κλείσιμο) */}
        <div
          className={`menu-overlay ${open ? "show" : ""}`}
          onClick={closeMenu}
        />

        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Αρχική
          </NavLink>
          <NavLink to="/hotel" onClick={closeMenu}>
            Φωτογραφίες
          </NavLink>
          <NavLink to="/kalavryta" onClick={closeMenu}>
            Καλάβρυτα
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Επικοινωνία
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
