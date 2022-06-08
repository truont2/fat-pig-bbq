import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import styles from "../styles/Location.module.css";

const Map = () => {
  const location = [47.831770, -122.336839];
  return (
    <MapContainer
      center={location}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "40vh", zIndex: 0}}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <Marker position={location} draggable={false} animate={true}>
        <Popup>7533 Olympic View Dr, Edmonds, WA 98026</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
