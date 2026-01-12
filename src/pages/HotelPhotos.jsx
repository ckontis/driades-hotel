import { useEffect, useMemo, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function HotelPhotos() {
  const section = useScrollReveal();
  const grid = useScrollReveal();

  const photos = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        src: `/images/photo${i + 1}.jpg`,
        alt: `Φωτό ${i + 1}`,
      })),
    []
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = (idx) => {
    setActiveIndex(idx);
    setLightboxOpen(true);
  };

  const close = () => setLightboxOpen(false);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + photos.length) % photos.length);

  const next = () => setActiveIndex((i) => (i + 1) % photos.length);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, photos.length]);

  return (
    <>
      <section
        ref={section.ref}
        className={`photos reveal ${section.visible ? "visible" : ""}`}
      >
        <h2>Φωτογραφίες</h2>

        <div
          ref={grid.ref}
          className={`photo-grid reveal-grid ${grid.visible ? "visible" : ""}`}
        >
          {photos.map((p, idx) => (
            <button
              key={idx}
              type="button"
              className="photo-tile"
              onClick={() => openAt(idx)}
              aria-label={`Άνοιγμα ${p.alt}`}
            >
              <img src={p.src} alt={p.alt} />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={close}>
              ✕
            </button>

            <button className="lightbox-nav left" type="button" onClick={prev} aria-label="Προηγούμενη">
              ‹
            </button>

            <img
              className="lightbox-img"
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
            />

            <button className="lightbox-nav right" type="button" onClick={next} aria-label="Επόμενη">
              ›
            </button>

            <div className="lightbox-caption">
              {photos[activeIndex].alt} ({activeIndex + 1}/{photos.length})
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HotelPhotos;
