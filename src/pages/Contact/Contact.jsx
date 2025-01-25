import React, { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../../components/Button/Button";

import pin from "../../assets/svg/location-pin.svg";
import phone from "../../assets/svg/phone.svg";
import email from "../../assets/svg/mail.svg";

import Map from "../../components/Map/Map";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Numele este obligatoriu.";
    if (!emailRegex.test(formData.email)) newErrors.email = "Email invalid.";
    if (!formData.message.trim())
      newErrors.message = "Mesajul nu poate fi gol.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(formErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.successMessage}>
        <h2>Mesajul tău a fost trimis!</h2>
        <p>
          Îți mulțumim pentru interes. Te vom contacta în cel mai scurt timp.
        </p>
        <button onClick={() => setIsSubmitted(false)}>
          Trimite un alt mesaj
        </button>
      </div>
    );
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h1>Contactează-ne</h1>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nume</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.inputError : ""}
            />
            {errors.name && (
              <span className={styles.errorMessage}>{errors.name}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.inputError : ""}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={errors.message ? styles.inputError : ""}
            ></textarea>
            {errors.message && (
              <span className={styles.errorMessage}>{errors.message}</span>
            )}
          </div>

          <div className={styles.buttonBox}>
            <Button type="submit" className={styles.submitButton}>
              Trimite
            </Button>
          </div>
        </form>
      </div>
      <div className={styles.contactBox}>
        <div className={styles.contactAddress}>
          <img src={pin} alt="address" width={20} />
          <p> Strada Horea, nr. 117c - 517536, Pianu de Jos, Alba</p>
        </div>
        <div className={styles.contactPhone}>
          <img src={phone} alt="phone" width={20} />
          <p>
            <a href="tel:+40123456789">+40 123 456 789</a>
          </p>
        </div>
        <div className={styles.contactEmail}>
          <img src={email} alt="phone" width={20} />
          <p>
            <a href="mailto:contact@conaculdante.ro">contact@conaculdante.ro</a>
          </p>
        </div>
      </div>
      <div>
        <Map />
      </div>
    </section>
  );
}

export default Contact;
