import styles from "./ServiceDetailsNav.module.css";
import { services } from "../../assets/data/data.jsx";
import { NavLink } from "react-router-dom";

function ServiceDetailsNav() {
  return (
    <div className={styles.container}>
      <nav className={styles.navLinks}>
        <h2>Explorează alte servicii:</h2>
        <ul className={styles.navList}>
          {services.map((service) => (
            <li key={service.id}>
              <NavLink
                to={`/services/${service.id}`}
                className={styles.navElement}
              >
                {service.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ServiceDetailsNav;
