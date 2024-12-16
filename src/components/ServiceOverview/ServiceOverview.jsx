import Button from "../Button/Button";
import styles from "./ServiceOverview.module.css";

function ServiceOverview() {
  return (
    <section className={styles.services}>
      <div className={styles.titleBox}>
        <h3>ServiceOverview</h3>
      </div>

      <div className={styles.servicesText}>
        <p>
          Conacul Dante vă oferă o experiență unică de găzduire și organizare de
          evenimente într-un cadru pitoresc și elegant, situat în inima
          județului Alba.
        </p>

        <div className={styles.cardsBox}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>🛏️ Cazare Exclusivă</h3>
                <ul>
                  <li>9 dormitoare duble spațioase și rafinate;</li>
                  <li>Fiecare cameră cu baie privată;</li>
                  <li>
                    Design interior care îmbină eleganța tradițională cu
                    confortul modern.
                  </li>
                </ul>
              </div>
              <div className={styles.cardBack}>
                <h3>Descoperă mai multe</h3>
                <p>Rezervă acum și bucură-te de o experiență unică!</p>
                <Button type="button" className={styles.bookingButton}>
                  Rezervă acum
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>🎉 Organizare Evenimente</h3>
                <ul>
                  <li>
                    Capacitate pentru evenimente de până la 50 de persoane;
                  </li>
                  <li>
                    Bucătărie complet utilată pentru catering și preparate
                    culinare;
                  </li>
                  <li>Spațiu interior versatil.</li>
                </ul>
              </div>
              <div className={styles.cardBack}>
                <h3>Descoperă mai multe</h3>
                <p>Rezervă acum și bucură-te de o experiență unică!</p>
                <Button type="button" className={styles.bookingButton}>
                  Rezervă acum
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>🏊 Facilități de Relaxare</h3>
                <ul>
                  <li>Piscină exterioară amenajată;</li>
                  <li>Grădină privată;</li>
                  <li>Peisaj natural relaxant;</li>
                  <li>Zonă ideală pentru fotosesiuni și momente speciale.</li>
                </ul>
              </div>
              <div className={styles.cardBack}>
                <h3>Descoperă mai multe</h3>
                <p>Rezervă acum și bucură-te de o experiență unică!</p>
                <Button type="button" className={styles.bookingButton}>
                  Rezervă acum
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>📍 Locație Specială</h3>
                <ul>
                  <li>Situat în Pianu de Jos, Alba Iulia;</li>
                  <li>Intimitate deplină;</li>
                  <li>Înconjurat de livadă privată;</li>
                  <li>Ușor accesibil, departe de aglomerație.</li>
                </ul>
              </div>
              <div className={styles.cardBack}>
                <h3>Descoperă mai multe</h3>
                <p>Rezervă acum și bucură-te de o experiență unică!</p>
                <Button type="button" className={styles.bookingButton}>
                  Rezervă acum
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttonBox}>
        <Button className={styles.servicesButton}>
          Descoperă Mai Multe Servicii
        </Button>
      </div>
    </section>
  );
}

export default ServiceOverview;
