// import React from "react";
import FacilitiesSection from "../../components/FacilitiesSection/FacilitiesSection";
import HistorySection from "../../components/HistorySection/HistorySection";
import Map from "../../components/Map/Map";
import QuickContactSection from "../../components/QuickContactSection/QuickContactSection";
import StatsSection from "../../components/StatsSection/StatsSection";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Descoperiți Conacul Dante</h1>
          <h2 className={styles.subtitle}>
            O experiență unică în inima naturii
          </h2>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Conacul Dante reprezintă mai mult decât o simplă cazare - este o
              destinație unde istoria se împletește cu luxul modern, oferind
              oaspeților noștri o experiență de neuitat în inima naturii.
            </p>
            <p className={styles.highlight}>
              &ldquo;Fiecare detaliu din conacul nostru spune o poveste, creând
              amintiri care durează o viață.&ldquo;
            </p>
            <p className={styles.paragraph}>
              Cu o tradiție îndelungată în ospitalitate, ne-am dedicat misiunii
              de a oferi oaspeților noștri nu doar un loc de cazare, ci o
              experiență completă care îmbină confortul modern cu farmecul
              istoric al conacului.
            </p>
          </div>

          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Situat într-o locație pitorească, Conacul Dante oferă priveliști
              spectaculoase și liniștea naturii, fiind locul perfect pentru cei
              care caută să se reconecteze cu natura și să se bucure de momente
              de liniște.
            </p>
            <p className={styles.paragraph}>
              Grădina noastră luxuriantă și terasele spațioase oferă oaspeților
              noștri spații perfecte pentru relaxare și contemplare, în timp ce
              restaurantul nostru servește preparate rafinate, realizate din
              ingrediente locale proaspete.
            </p>
          </div>
        </div>

        <section className={styles.teamSection}>
          <h2 className={styles.subtitle}>Valorile Noastre</h2>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Ospitalitate Autentică</h3>
              <p className={styles.valueText}>
                Ne dedicăm să oferim fiecărui oaspete o experiență personalizată
                și memorabilă.
              </p>
            </div>

            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Atenție la Detalii</h3>
              <p className={styles.valueText}>
                Fiecare aspect al șederii dumneavoastră este atent pregătit
                pentru confort maxim.
              </p>
            </div>

            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Sustenabilitate</h3>
              <p className={styles.valueText}>
                Ne angajăm să protejăm mediul înconjurător și să promovăm
                practici durabile.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.secondContainer}>
        <HistorySection />
        <StatsSection />
        <FacilitiesSection />
        <QuickContactSection />
        <Map />
      </div>
    </>
  );
}

export default AboutUs;
