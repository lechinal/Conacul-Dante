import styles from "./QuickContactSection.module.css";
import Button from "../Button/Button";

function QuickContactSection() {
  return (
    <section className={styles.quickContactSection}>
      <h2 className={styles.subtitle}>Contactează-ne:</h2>
      <div className={styles.contactInfo}>
        <p>Email: contact@conaculdante.ro</p>
        <p>Telefon: +40 123 456 789</p>
        <p>Adresă: Strada Horea, nr. 117c - 517536, Pianu De Jos, Alba</p>
      </div>
      <Button type="button" className={styles.aboutButton}>
        Contact
      </Button>
    </section>
  );
}

export default QuickContactSection;
