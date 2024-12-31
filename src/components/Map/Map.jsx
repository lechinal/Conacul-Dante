import { GoogleMap, LoadScript } from "@react-google-maps/api";

import styles from "./Map.module.css";

function Map() {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 45.924388,
    lng: 23.483548,
  };

  return (
    <section className={styles.mapSection}>
      <h2 className={styles.subtitle}>Locația Noastră</h2>
      <LoadScript googleMapsApiKey="AIzaSyAOTHscfcXksu3fCxyNGT99cS4wymEjHCQ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        ></GoogleMap>
      </LoadScript>
    </section>
  );
}

export default Map;
