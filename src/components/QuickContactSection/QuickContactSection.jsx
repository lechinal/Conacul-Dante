import styles from "./QuickContactSection.module.css";

function QuickContactSection() {
  return (
    <section className={styles.quickContactSection}>
      <h2 className={styles.subtitle}>Contactează-ne:</h2>
      <div className={styles.contactInfo}>
        <p>Email: contact@conaculdante.ro</p>
        <p>Telefon: +40 123 456 789</p>
        <p>Adresă: Strada Horea, nr. 117c - 517536, Pianu De Jos, Alba</p>
      </div>
    </section>
  );
}

export default QuickContactSection;
