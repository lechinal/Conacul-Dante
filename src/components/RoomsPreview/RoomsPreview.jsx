import Button from "../Button/Button";
import styles from "./RoomsPreview.module.css";

import { roomsImages } from "../../assets/images/imageData.js";

import ImageSlider from "../ImageSlider/ImageSlider";
import { useNavigate } from "react-router-dom";

function RoomsPreview() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <section className={styles.rooms}>
      <div className={styles.titleBox}>
        <h3>Camere Confortabile</h3>
      </div>
      <div className={styles.sliderBox}>
        <ImageSlider images={roomsImages} />
      </div>
      <div className={styles.roomsText}>
        <p>
          <b>Experimentați luxul și confortul camerelor noastre:</b>
        </p>
        <ul>
          <li>Dormitoare spațioase cu pat dublu.</li>
          <li>Apartament privat pentru intimitate sporită.</li>
          <li>Camere cu baie proprie.</li>
        </ul>
        <div className={styles.additionalInfoWrapper}>
          <div className={styles.additionalInfoInner}>
            <div className={styles.additionalInfoFront}>
              <p>
                Conacul este bine compartimentat, beneficiind de o organizare
                excelentă a spațiului pentru a asigura funcționalitate și
                confort într-un mod remarcabil.
              </p>
            </div>
            <div className={styles.additionalInfoBack}>
              <p>
                Designul interior reflectă o arhitectură gândită cu atenție,
                îmbinând eleganța spațiilor largi cu functional moderne într-o
                manieră sofisticată.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonBox}>
        <Button className={styles.roomsButton} onClick={handleClick}>
          Rezervă acum
        </Button>
      </div>
    </section>
  );
}

export default RoomsPreview;
