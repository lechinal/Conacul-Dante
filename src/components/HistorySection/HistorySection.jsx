import styles from "./HistorySection.module.css";

function HistorySection() {
  return (
    <section className={styles.historySection}>
      <div className={styles.title}>
        <h2 className={styles.subtitle}>Istoria Conacului Dante</h2>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <h3>1920</h3>
          <p>Construcția conacului</p>
        </div>
        <div className={styles.timelineItem}>
          <h3>1950</h3>
          <p>Prima renovare majoră</p>
        </div>
        <div className={styles.timelineItem}>
          <h3>2020</h3>
          <p>Transformarea în hotel boutique</p>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
