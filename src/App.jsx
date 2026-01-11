import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import HotelPhotos from "./pages/HotelPhotos.jsx";
import Kalavryta from "./pages/Kalavryta.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<HotelPhotos />} />
          <Route path="/kalavryta" element={<Kalavryta />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
