import Button from "../Button/Button";
import styles from "./BookingCallToAction.module.css";

function BookingCallToAction() {
  return (
    <section className={styles.bookingCTA}>
      <div className={styles.titleBox}>
        <h3>BookingCallToAction</h3>
      </div>

      <div className={styles.bookingCTAText}>
        <p>
          Incheie pagina cu o invitatie clara pt utilizatorii care doresc sa
          faca o rezervare, oferind un link proeminent catre pagina{" "}
          <b>Rezervari</b>
        </p>
        <p>
          Transformați viziunea dumneavoastră într-o realitate memorabilă la
          Conacul Dante.
        </p>
        <p>
          {" "}
          Disponibil pentru toate tipurile de evenimente și în orice anotimp.
        </p>
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
