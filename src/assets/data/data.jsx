export const services = [
  {
    id: "cazare",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M12 4v6" />
        <path d="M2 18h20" />
      </svg>
    ),

    title: "Cazare Premium",
    description: "Camere spațioase și confortabile cu vedere spectaculoasă.",
  },
  {
    id: "restaurant",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M17 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M21 13v9" />
        <path d="M3 13v9" />
        <path d="M12 2v20" />
      </svg>
    ),
    title: "Restaurant",
    description: "Bucătărie tradițională și internațională cu specific local.",
  },
  {
    id: "piscina",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 20a6 6 0 0 1-6 0c-3 1.5-6 0-6 0s-3 1.5-6 0a6 6 0 0 1-6 0" />
        <path d="M2 20c0-3.37 4.77-1.67 6-4" />
        <path d="M22 20c0-3.37-4.77-1.67-6-4" />
        <path d="M2 15c0-3.37 4.77-1.67 6-4" />
        <path d="M22 15c0-3.37-4.77-1.67-6-4" />
      </svg>
    ),
    title: "Piscină",
    description:
      "Un loc perfect pentru relaxare: piscina noastră și barul cu băuturi răcoritoare.",
  },
  {
    id: "ciubar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    title: "Ciubar",
    description:
      "Experiență tradițională în ciubarul nostru din lemn cu apă încălzită.",
  },
  {
    id: "gratar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 15-3-3a2.83 2.83 0 0 1 4-4l1 1 1-1a2.83 2.83 0 0 1 4 4l-3 3" />
        <path d="m8 9-3 3" />
        <path d="m16 9 3 3" />
        <path d="m3 21 7.5-7.5" />
        <path d="M21 21l-7.5-7.5" />
      </svg>
    ),
    title: "Zonă Grătar și Ceaun",
    description:
      "Pregătiți preparate la grătar sau ceaun în zona special amenajată.",
  },
  {
    id: "parcare",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.5-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    title: "Parcare Privată",
    description: "Parcare supravegheată și securizată pentru oaspeții noștri.",
  },
];

export const servicesDetails = {
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

export const rooms = [
  { id: "camera1", name: "Camera Standard" },
  { id: "camera2", name: "Camera Premium" },
  { id: "camera3", name: "Suită" },
  { id: "camera4", name: "Cameră Familială" },
];
