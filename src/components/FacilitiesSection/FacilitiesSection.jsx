import styles from "./FacilitiesSection.module.css";

function FacilitiesSection() {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.title}>
        <h2 className={styles.subtitle}>Ce Oferim</h2>
      </div>
      <div className={styles.facilitiesGrid}>
        <div className={styles.facilityCard}>
          <h3>Restaurant</h3>
          <p>Bucătărie tradițională și internațională</p>
        </div>
        <div className={styles.facilityCard}>
          <h3>Grădină</h3>
          <p>Spațiu verde amenajat pentru relaxare</p>
        </div>
        <div className={styles.facilityCard}>
          <h3>Evenimente</h3>
          <p>Săli pentru evenimente speciale</p>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
