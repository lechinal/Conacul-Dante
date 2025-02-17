import { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPinHouse } from "lucide-react";

import Button from "../Button/Button";
import styles from "./Map.module.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Map() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const position = [45.92425, 23.48361];

  const toggleMapVisibility = () => {
    setIsMapVisible((prev) => !prev);
  };
  return (
    <section className={styles.mapSection}>
      <div className={styles.subtitleBox}>
        <MapPinHouse size={35} />
        <Button className={styles.mapButton} onClick={toggleMapVisibility}>
          Locația Noastră
        </Button>
      </div>

      {isMapVisible && (
        <div className={styles.mapWrapper}>
          <MapContainer
            center={position}
            zoom={13}
            style={{
              height: "500px",
              width: "100%",
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Conacul Dante
                <p>Strada Horea, nr. 117c</p>
                <p>517536</p>
                <p>Pianu de Jos, Alba</p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </section>
  );
}

export default Map;
