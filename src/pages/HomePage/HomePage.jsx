import styles from "./HomePage.module.css";

import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import AboutPreview from "../../components/AboutPreview/AboutPreview.jsx";
import ServiceOverview from "../../components/ServiceOverview/ServiceOverview.jsx";
import RoomsPreview from "../../components/RoomsPreview/RoomsPreview.jsx";
import BookingCallToAction from "../../components/BookingCallToAction/BookingCallToAction.jsx";
import ExtraInfoSection from "../../components/ExtraInfoSection/ExtraInfoSection.jsx";

function HomePage() {
  return (
    <section className={styles.homePage}>
      <HeroSection />
      <AboutPreview />
      <ServiceOverview />
      <RoomsPreview />
      <ExtraInfoSection />
      <BookingCallToAction />
    </section>
  );
}

export default HomePage;
