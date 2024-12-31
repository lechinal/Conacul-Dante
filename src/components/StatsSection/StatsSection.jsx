import styles from "./StatsSection.module.css";

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statItem}>
        <h3>1000+</h3>
        <p>Oaspeți mulțumiți</p>
      </div>
      <div className={styles.statItem}>
        <h3>9</h3>
        <p>Camere unice</p>
      </div>
      <div className={styles.statItem}>
        <h3>4.9/5</h3>
        <p>Rating mediu</p>
      </div>
    </section>
  );
}

export default StatsSection;
