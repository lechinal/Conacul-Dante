import styles from "./AboutPreview.module.css";

import Button from "../Button/Button.jsx";

// import oak from "../../assets/svg/oak-tree-M.svg";

import oak2 from "../../assets/svg/oak-tree-M-ActiveColor.svg";

import AboutFeatures from "../AboutFeatures/AboutFeatures.jsx";

function IntroductionSection() {
  return (
    <section className={styles.introduction}>
      <div className={styles.box}>
        <div className={styles.textBox}>
          <p className={styles.introText}>
            <b>Conacul Dante</b> - o oază de eleganță și rafinament pentru
            evenimente memorabile. În inima noastră, fiecare moment devine o
            <br />
            amintire prețioasă, îmbinând atmosfera subtil rafinată cu
            facilitățile moderne.
          </p>
        </div>

        <div className={styles.imageBox}>
          {/* <img src={oak} className={styles.oakImage} width={150} height={320} /> */}
          <img
            src={oak2}
            className={styles.oakImage}
            width={150}
            height={320}
          />
        </div>
      </div>
      <div className={styles.features}>
        <AboutFeatures />
      </div>
      <div className={styles.buttonBox}>
        <Button type="button" className={styles.aboutButton}>
          Despre Noi
        </Button>
      </div>
    </section>
  );
}

export default IntroductionSection;
