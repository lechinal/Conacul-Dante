import { useState } from "react";
import styles from "./AboutFeatures.module.css";

function AboutFeatures() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: "🏛️",
      title: "Spațiu Elegant",
      description:
        "Un mediu rafinat care transformă fiecare eveniment într-o experiență de neuitat, cu design interior care îmbină tradiția cu modernitatea.",
    },
    {
      icon: "🏆",
      title: "Experiență Premium",
      description:
        "Oferim servicii personalizate de înaltă calitate, asigurând că fiecare detaliu este perfect pregătit pentru a-ți depăși așteptările.",
    },
    {
      icon: "🏊‍♂️",
      title: "Piscină Relaxantă",
      description:
        "Piscina noastră oferă o experiență completă de relaxare,unde răcoarea apei și peisajul deosebit vă asigură destinderea dorită.",
    },
    {
      icon: "🌿",
      title: "Liniște și Relaxareeeee",
      description:
        "Conacul Dante este un loc perfect pentru relaxare, înconjurat de natură, unde poți să te deconectezi complet și să te bucuri de liniștea absolută.",
    },
  ];

  const handleFeatureClick = (index) => {
    setActiveFeature((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.featuresContainer}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${styles.featureCard} ${
            index % 2 === 0 ? styles.right : styles.left
          } ${activeFeature === index ? styles.activeFeature : ""}`}
          onClick={() => handleFeatureClick(index)}
        >
          <div className={styles.featureHeader}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            {activeFeature === index ? (
              <p className={styles.featureDescription}>{feature.description}</p>
            ) : (
              <h3 className={styles.featureTitle}>{feature.title}</h3>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutFeatures;
