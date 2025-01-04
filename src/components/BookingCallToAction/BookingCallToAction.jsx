import Button from "../Button/Button";
import styles from "./BookingCallToAction.module.css";

function BookingCallToAction() {
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
            <b>Rezervări disponibile acum</b>
          </p>
        </div>
        <div className={styles.card}>
          <p>
            Conacul Dante vă oferă un refugiu de lux, unde fiecare moment este
            transformat în amintiri prețioase.
            <br />
            <b>Rezervați acum pentru a vă asigura locul!</b>
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
            Nu lăsați amintirile să aștepte – <b>contactați-ne</b> și
            descoperiți un loc unic, creat pentru evenimente de neuitat!
          </p>
        </div>
        <div className={styles.card}>
          <p>
            <b>Rezervați astăzi</b> pentru a experimenta luxul și ospitalitatea
            care ne definesc!
          </p>
        </div>
      </div>

      <div className={styles.buttonBox}>
        <Button className={styles.bookingButton}>
          Rezervă-ți experiența unică
        </Button>
      </div>
    </section>
  );
}

export default BookingCallToAction;
