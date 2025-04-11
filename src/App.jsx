import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
// import Components from "./Screen/Components/Components";
import Footer from "./Pages/Footer";
import Our_product from "./Pages/Our_product";
// import Contact from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ScrollToTop from './Pages/ScrollToTop';
import Component from "./Screen/Components/Components";
// import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Component />
              <About />
              <Our_product />
              {/* <Contact/> */}
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
