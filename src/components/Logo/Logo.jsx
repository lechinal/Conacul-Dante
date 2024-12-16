import styles from "./Logo.module.css";

import logoDante from "../../assets/logo/dante-w220-h100.svg";
import logoDanteSmall from "../../assets/logo/dante-small.svg";
function Logo() {
  return (
    <div className={styles.logo}>
      {/* <img src={logoDante} className={styles.logo} alt="logo" /> */}
      <img
        src={logoDante}
        className={`${styles.logoImage} ${styles.large}`}
        alt="logo mare"
      />
      <img
        src={logoDanteSmall}
        className={`${styles.logoImage} ${styles.small}`}
        alt="logo mic"
      />
    </div>
  );
}

export default Logo;
