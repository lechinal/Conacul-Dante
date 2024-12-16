import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "./components/Loader/Loader.jsx";

const Header = lazy(() => import("./components/Header/Header.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const Services = lazy(() => import("./pages/Services/Services.jsx"));
const Booking = lazy(() => import("./pages/Booking/Booking.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));

import "./App.css";

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
