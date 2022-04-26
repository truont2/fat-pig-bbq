import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { useMap } from "react-leaflet/hooks";
import "../styles/Map.module.css";

//TODO: finalize map operational
export default function Map() {
  return (
    <div className="map">
      {" "}
      <MapContainer
        className="map"
        center={[47.831, -122.336]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[47.831, -122.336]}>
          <Popup>
            Fat Pig BBQ <br /> Delicious Eats!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
