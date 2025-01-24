import React, { useState, useEffect } from "react";
import styles from "./Booking.module.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    room: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedBooking = localStorage.getItem("pendingBooking");
    if (savedBooking) {
      setFormData(JSON.parse(savedBooking));
    }
  }, []);

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
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!formData.name.trim()) newErrors.name = "Numele este obligatoriu";
    if (!emailRegex.test(formData.email)) newErrors.email = "Email invalid";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Număr de telefon invalid";
    if (!formData.checkIn) newErrors.checkIn = "Data check-in este obligatorie";
    if (!formData.checkOut)
      newErrors.checkOut = "Data check-out este obligatorie";
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut =
        "Data check-out trebuie să fie ulterioară datei check-in";
    }
    if (!formData.room) newErrors.room = "Selectați o cameră";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("pendingBooking", JSON.stringify(formData));
      setIsSubmitted(true);

      // Email pentru confirmare
      const mailtoLink = `mailto:contact@conaculuidante.ro?subject=Cerere Rezervare&body=
        Nume: ${formData.name}
        Email: ${formData.email}
        Telefon: ${formData.phone}
        Check-in: ${formData.checkIn}
        Check-out: ${formData.checkOut}
        Număr Oaspeți: ${formData.guests}
        Cameră: ${formData.room}
        Cerințe Speciale: ${formData.specialRequests}
      `;

      window.location.href = mailtoLink;
    } else {
      setErrors(formErrors);
    }
  };

  const rooms = [
    { id: "camera1", name: "Camera Standard" },
    { id: "camera2", name: "Camera Premium" },
    { id: "camera3", name: "Suită" },
    { id: "camera4", name: "Cameră Familială" },
  ];

  if (isSubmitted) {
    return (
      <div className={styles.successMessage}>
        <h2>Rezervarea a fost trimisă!</h2>
        <p>
          Vă mulțumim. Un reprezentant vă va contacta în curând pentru
          confirmare.
        </p>
        <button onClick={() => setIsSubmitted(false)}>
          Faceți altă rezervare
        </button>
      </div>
    );
  }

  return (
    <div className={styles.bookingContainer}>
      <h1>Rezervare</h1>
      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        <div className={styles.formGroup}>
          <label>Nume Complet</label>
          <input
            type="text"
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
          <label>Email</label>
          <input
            type="email"
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
          <label>Telefon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? styles.inputError : ""}
          />
          {errors.phone && (
            <span className={styles.errorMessage}>{errors.phone}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Check-in</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className={errors.checkIn ? styles.inputError : ""}
          />
          {errors.checkIn && (
            <span className={styles.errorMessage}>{errors.checkIn}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Check-out</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className={errors.checkOut ? styles.inputError : ""}
          />
          {errors.checkOut && (
            <span className={styles.errorMessage}>{errors.checkOut}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Număr Oaspeți</label>
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Cameră</label>
          <select
            name="room"
            value={formData.room}
            onChange={handleChange}
            className={errors.room ? styles.inputError : ""}
          >
            <option value="">Selectează Camera</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
          {errors.room && (
            <span className={styles.errorMessage}>{errors.room}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Cerințe Speciale</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Trimite Rezervare
        </button>
      </form>
    </div>
  );
}

export default Booking;
/* 

Booking page cu următoarele caracteristici:

Formular de rezervare complet
Validare client-side
Stocare în localStorage pentru persistență
Email de contact pentru confirmare manuală


Caracteristici principale:

Validare formular client-side
Stocare în localStorage pentru persistență
Trimitere automată email pentru confirmare manuală
Design responsiv și modern
Validări pentru email, telefon, date
Listă predefinită de camere
Mesaj de succes după trimitere

Notă: Fiind fără backend, formularul va deschide clientul de email al utilizatorului pentru a trimite datele manual.
*/
