import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./ExtraInfoSection.module.css";

import {
  eventImages,
  teamBuildingImages,
  evImages,
} from "../../assets/images/imageData.js";

function ExtraInfoSection() {
  return (
    <section className={styles.extraInfo}>
      <div className={styles.titleBox}>
        <h3>Informații Suplimentare</h3>
      </div>
      <ImageSlider images={evImages} />
      <div className={styles.extraInfoText}>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <h4>Capacitate și Flexibilitate</h4>
            <p>
              9 dormitoare cu paturi duble, oferind un ambient discret și un
              apartament distinctiv. Capacitatea de primire se adaptează
              flexibil în funcție de tipul evenimentului.
            </p>
          </div>

          <div className={styles.infoItem}>
            <h4>Disponibilitate</h4>
            <p>
              Disponibil pentru închiriere pe tot parcursul anului, inclusiv
              pentru sărbătorile de iarnă.
            </p>
          </div>

          <div className={styles.infoItem}>
            <h4>Versatilitate</h4>
            <p>
              Spații generoase în interior și exterior pentru evenimente
              diverse: nunți, aniversări, evenimente corporative și alte ocazii
              speciale.
            </p>
          </div>

          <div className={styles.infoItem}>
            <h4>Experiență Personalizată</h4>
            <p>
              Organizare excelentă a spațiului, asigurând funcționalitate și
              confort. Atmosferă elegantă și intimă într-un peisaj de vis.
            </p>
          </div>
        </div>
        <div className={styles.specialEventsSectionBox}>
          <div className={styles.specialEventsSection}>
            <h3>Evenimente Speciale</h3>
            <p>
              Conacul Dante a fost locul ales pentru numeroase evenimente de
              prestigiu, având onoarea de a găzdui personalități notabile precum
              Cătălin Botezatu, Gică Popescu sau celebrul Gică Hagi. Situat în
              proximitatea celui mai mare teren de golf din România, conacul se
              distinge prin alegerea strategică a locației, oferind o intimitate
              desăvârșită, esențială pentru orice tip de eveniment. Descoperiți
              rafinamentul și eleganța la Conacul Dante, locul unde evenimentele
              devin povești de neuitat.
            </p>
          </div>
        </div>

        <ImageSlider images={eventImages} />

        <div className={styles.specialEventsSectionBox}>
          <div className={styles.specialEventsSection}>
            <h3>Team Building</h3>
            <p>
              Conacul Dante este perfect pregătit pentru o varietate de
              evenimente, inclusiv proiecții cinematografice sau team
              building-uri. Beneficiind de o locație avantajoasă, în
              proximitatea celui mai mare teren de golf din România, conacul
              oferă un cadru deosebit pentru orice ocazie specială.
            </p>
          </div>
        </div>

        <ImageSlider images={teamBuildingImages} />
      </div>
    </section>
  );
}

export default ExtraInfoSection;
