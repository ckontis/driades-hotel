function HotelPhotos() {
  const photos = Array.from({ length: 12 }, (_, i) => ({
    src: `/images/photo${i + 1}.jpg`,
    alt: `Φωτό ${i + 1}`,
  }));

  return (
    <section className="photos">
      <h2>Φωτογραφίες</h2>

      <div className="photo-grid">
        {photos.map((p, idx) => (
          <img key={idx} src={p.src} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}

export default HotelPhotos;
