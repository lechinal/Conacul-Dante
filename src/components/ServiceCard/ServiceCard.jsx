import styles from "../../pages/Services/Services.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function ServiceCard({ id, icon: Icon, title, description }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>{Icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button onClick={() => navigate(`/services/${id}`)}>
          Află mai multe
        </Button>
      </div>
    </div>
  );
}

export default ServiceCard;
