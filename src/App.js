import Aboutus from "./Aboutus";
import Head from "./components/Head";
import Product from "./Product";
import Faq from "./Faq";
import Landingpage from "./Landingpage";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Service from "./components/Service";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 */}
      </Routes>
    </>
  );
}

export default App;
