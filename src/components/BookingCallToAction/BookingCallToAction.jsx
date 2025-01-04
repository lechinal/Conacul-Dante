import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./BookingCallToAction.module.css";

function BookingCallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigare către pagina rezervări");
    navigate("/booking");
  };
  return (
    <section className={styles.bookingCTA}>
      <div className={styles.titleBox}>
        <h3>Planifică-ți momentele speciale la Conacul Dante</h3>
      </div>

      <div className={styles.bookingCTAText}>
        <div className={styles.card}>
          <p>
            Descoperiți eleganța și rafinamentul la Conacul Dante – locul
            perfect unde visele devin realitate.
            <br />
            <Link to="/booking" className={styles.link}>
              Rezervări disponibile acum
            </Link>
          </p>
        </div>
        <div className={styles.card}>
          <p>
            Conacul Dante vă oferă un refugiu de lux, unde fiecare moment este
            transformat în amintiri prețioase.
            <br />
            <Link to="/booking" className={styles.link}>
              Rezervați acum pentru a vă asigura locul!
            </Link>
          </p>
        </div>
        <div className={styles.card}>
          <p>
            Transformați nunta dumneavoastră într-o poveste de basm sau
            organizați întâlniri de afaceri într-un cadru rafinat, dotat cu
            toate facilitățile necesare.
          </p>
        </div>
        <div className={styles.card}>
          <p>
            Planificați un eveniment memorabil într-un cadru de poveste, în care
            fiecare detaliu este gândit pentru a vă depăși așteptările.
          </p>
        </div>
        <div className={styles.card}>
          <p>
            Indiferent de sezon sau ocazie, Conacul Dante este pregătit să
            găzduiască cele mai importante momente din viața dumneavoastră.
          </p>
        </div>
        <div className={styles.card}>
          <p>
            Perfect pentru orice tip de eveniment, indiferent de anotimp – de la
            nunți și botezuri, până la întâlniri corporate sau escapade de
            relaxare.
          </p>
        </div>
        <div className={styles.card}>
          <p>
            Nu lăsați amintirile să aștepte –{" "}
            <Link to="/contact" className={styles.link}>
              contactați-ne
            </Link>{" "}
            și descoperiți un loc unic, creat pentru evenimente de neuitat!
          </p>
        </div>
        <div className={styles.card}>
          <p>
            <Link to="/booking" className={styles.link}>
              Rezervați astăzi
            </Link>{" "}
            pentru a experimenta luxul și ospitalitatea care ne definesc!
          </p>
        </div>
      </div>

      <div className={styles.buttonBox}>
        <Button className={styles.bookingButton} onClick={handleClick}>
          Rezervă-ți experiența unică
        </Button>
      </div>
    </section>
  );
}

export default BookingCallToAction;
