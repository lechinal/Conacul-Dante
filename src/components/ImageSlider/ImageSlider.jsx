import { useState } from "react";
import styles from "./ImageSlider.module.css";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderLeft} onClick={goToPrevious}>
        ❮
      </div>
      <div className={styles.sliderRight} onClick={goToNext}>
        ❯
      </div>

      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className={styles.dotsContainer}>
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`${styles.dot} ${
              slideIndex === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
