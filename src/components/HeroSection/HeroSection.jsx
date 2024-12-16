import styles from "./HeroSection.module.css";

import Button from "../Button/Button.jsx";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionBox}>
        <div className={styles.title1Box}>
          <h1>Conacul Dante</h1>
        </div>
        <div className={styles.title2Box}>
          <h2>Luxury Estate</h2>
          <h3>Eleganță și Rafinament pentru Evenimente Memorabile</h3>
        </div>
        <div className={styles.buttonBox}>
          <Button className={styles.heroButton}>Rezervă acum</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
