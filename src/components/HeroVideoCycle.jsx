import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const VIDEOS = [
  "/videos/hero1.MP4",
  "/videos/hero3.MP4",
];

function HeroVideoCycle() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  // όταν τελειώνει ένα βίντεο, πήγαινε στο επόμενο
  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  // autoplay χωρίς ήχο, με fallback σε browsers που μπλοκάρουν autoplay [web:504][web:506]
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = video.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        // αν ο browser μπλοκάρει autoplay, δεν κάνουμε κάτι, μένει paused
      });
    }
  }, [index]);

  return (
    <section className="home-hero full-bleed">
      {/* video background */}
      <div className="hero-video-wrapper" aria-hidden="true">
        <video
          key={VIDEOS[index]}
          ref={videoRef}
          className="hero-video"
          src={VIDEOS[index]}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
        />
        <div className="hero-video-overlay" />
      </div>

      {/* κείμενο hero */}
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
  );
}

export default HeroVideoCycle;
