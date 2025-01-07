// import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../ServiceDetails/ServiceDetails.module.css";
import Button from "../../../components/Button/Button";

function ServicesDetails() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const handleClickBooking = () => {
    navigate("/booking");
  };

  const handleClickContact = () => {
    navigate("/contact");
  };

  const servicesDetails = {
    cazare: {
      title: "Cazare Premium",
      mainImage: "/images/cazare.jpg", // placeholder pentru calea imaginii
      description:
        "Experimentați confortul și luxul în camerele noastre premium, special amenajate pentru a vă oferi o ședere de neuitat.",
      features: [
        "Camere spațioase cu vedere panoramică",
        "Paturi king size cu saltele premium",
        "Băi private cu duș și cadă",
        "TV cu ecran plat și canale premium",
        "Mini-bar și facilități pentru prepararea cafelei/ceaiului",
        "Wi-Fi gratuit de mare viteză",
      ],
      additionalInfo:
        "Toate camerele sunt dotate cu aer condiționat și încălzire individuală pentru confortul dumneavoastră maxim.",
    },
    piscina: {
      title: "Piscină",
      mainImage: "/images/piscina.jpg",
      description:
        "Relaxați-vă la piscina noastră cu vedere panoramică, perfectă atât pentru înot cât și pentru relaxare.",
      features: [
        "Piscină încălzită",
        "Șezlonguri confortabile",
        "Bar la piscină",
        "Prosoape gratuite",
        "Zonă pentru copii",
        "Serviciu de salvare",
      ],
      additionalInfo:
        "Piscina este deschisă zilnic între orele 8:00 - 22:00. Pentru siguranța dumneavoastră, vă rugăm să respectați regulile afișate.",
    },
    ciubar: {
      title: "Ciubar Tradițional",
      mainImage: "/images/ciubar.jpg",
      description:
        "Bucurați-vă de o experiență autentică românească în ciubarul nostru din lemn cu apă încălzită.",
      features: [
        "Apă încălzită la temperatura optimă",
        "Construit din lemn de brad",
        "Capacitate de 6-8 persoane",
        "Iluminat ambiental",
        "Zonă acoperită pentru relaxare",
        "Serviciu de prosop inclus",
      ],
      additionalInfo:
        "Rezervările pentru ciubar se fac cu minimum 2 ore înainte pentru a asigura temperatura optimă a apei.",
    },
    gratar: {
      title: "Zonă Grătar și Ceaun",
      mainImage: "/images/gratar.jpg",
      description:
        "O zonă special amenajată pentru prepararea mâncărurilor tradiționale la grătar sau ceaun.",
      features: [
        "Grătare din cărămidă",
        "Ceaune de diverse dimensiuni",
        "Lemne pentru foc incluse",
        "Zonă acoperită",
        "Mese și bănci din lemn masiv",
        "Ustensile pentru gătit disponibile",
      ],
      additionalInfo:
        "Vă rugăm să rezervați zona de grătar cu cel puțin o zi înainte. Toate ustensilele necesare sunt incluse în preț.",
    },
    restaurant: {
      title: "Restaurant",
      mainImage: "/images/restaurant.jpg",
      description:
        "Savurați preparate delicioase din bucătăria tradițională și internațională, pregătite cu ingrediente locale de cea mai bună calitate.",
      features: [
        "Mic dejun tip bufet",
        "Meniu à la carte",
        "Bucătărie tradițională și internațională",
        "Atmosferă elegantă și relaxantă",
        "Opțiuni vegetariene și vegane",
        "Deschis zilnic între orele 7:00 - 23:00",
      ],
      additionalInfo:
        "Pentru evenimente speciale, vă rugăm să contactați echipa noastră de organizare.",
    },
    parcare: {
      title: "Parcare Privată",
      mainImage: "/images/parcare.jpg",
      description:
        "Parcare securizată și monitorizată pentru confortul și siguranța oaspeților noștri.",
      features: [
        "Locuri de parcare supravegheate",
        "Acces facil la intrarea principală",
        "Disponibilitate 24/7",
        "Acces gratuit pentru oaspeți",
        "Spații pentru biciclete",
        "Stații de încărcare pentru vehicule electrice",
      ],
      additionalInfo:
        "Rezervarea locului de parcare este recomandată pentru perioadele aglomerate.",
    },
  };

  const service = servicesDetails[serviceId];

  if (!service) {
    return (
      <div className={styles.error}>
        Serviciul nu a fost găsit!
        <Link to="/services" className={styles.backButton}>
          Înapoi la Servicii
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/services" className={styles.backButton}>
        ← Înapoi la Servicii
      </Link>
      <section className={styles.hero}>
        <h1 className={styles.title}>{service.title}</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.description}>
          <p>{service.description}</p>
        </div>

        <div className={styles.features}>
          <h2>Facilități și Servicii Incluse</h2>
          <ul className={styles.featuresList}>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.additional}>
          <h2>Informații Adiționale</h2>
          <p>{service.additionalInfo}</p>
        </div>

        <div className={styles.cta}>
          <Button className={styles.button} onClick={handleClickBooking}>
            Rezervă Acum
          </Button>
          <Button
            className={styles.secondaryButton}
            onClick={handleClickContact}
          >
            Contactează-ne
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ServicesDetails;
