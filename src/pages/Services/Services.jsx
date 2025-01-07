// import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../assets/data/data.jsx";
function Services() {
  // const services = [
  //   {
  //     id: "cazare",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
  //         <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
  //         <path d="M12 4v6" />
  //         <path d="M2 18h20" />
  //       </svg>
  //     ),

  //     title: "Cazare Premium",
  //     description: "Camere spațioase și confortabile cu vedere spectaculoasă.",
  //   },
  //   {
  //     id: "restaurant",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
  //         <path d="M17 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
  //         <path d="M21 13v9" />
  //         <path d="M3 13v9" />
  //         <path d="M12 2v20" />
  //       </svg>
  //     ),
  //     title: "Restaurant",
  //     description:
  //       "Bucătărie tradițională și internațională cu specific local.",
  //   },
  //   {
  //     id: "piscina",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="M22 20a6 6 0 0 1-6 0c-3 1.5-6 0-6 0s-3 1.5-6 0a6 6 0 0 1-6 0" />
  //         <path d="M2 20c0-3.37 4.77-1.67 6-4" />
  //         <path d="M22 20c0-3.37-4.77-1.67-6-4" />
  //         <path d="M2 15c0-3.37 4.77-1.67 6-4" />
  //         <path d="M22 15c0-3.37-4.77-1.67-6-4" />
  //       </svg>
  //     ),
  //     title: "Piscină",
  //     description:
  //       "Un loc perfect pentru relaxare: piscina noastră și barul cu băuturi răcoritoare.",
  //   },
  //   {
  //     id: "ciubar",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  //       </svg>
  //     ),
  //     title: "Ciubar",
  //     description:
  //       "Experiență tradițională în ciubarul nostru din lemn cu apă încălzită.",
  //   },
  //   {
  //     id: "gratar",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="m12 15-3-3a2.83 2.83 0 0 1 4-4l1 1 1-1a2.83 2.83 0 0 1 4 4l-3 3" />
  //         <path d="m8 9-3 3" />
  //         <path d="m16 9 3 3" />
  //         <path d="m3 21 7.5-7.5" />
  //         <path d="M21 21l-7.5-7.5" />
  //       </svg>
  //     ),
  //     title: "Zonă Grătar și Ceaun",
  //     description:
  //       "Pregătiți preparate la grătar sau ceaun în zona special amenajată.",
  //   },
  //   {
  //     id: "parcare",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.5-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
  //         <circle cx="7" cy="17" r="2" />
  //         <path d="M9 17h6" />
  //         <circle cx="17" cy="17" r="2" />
  //       </svg>
  //     ),
  //     title: "Parcare Privată",
  //     description:
  //       "Parcare supravegheată și securizată pentru oaspeții noștri.",
  //   },
  // ];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Serviciile Noastre</h1>
        <h2 className={styles.sectionSubTitle}>
          Descoperă gama noastră completă de servicii personalizate:
        </h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
