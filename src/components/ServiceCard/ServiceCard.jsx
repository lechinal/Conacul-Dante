import styles from "../../pages/Services/Services.module.css";
import Button from "../Button/Button";

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>{Icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button>Află mai multe</Button>
      </div>
    </div>
  );
}

export default ServiceCard;
