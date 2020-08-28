import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Typography } from "@material-ui/core";

const MyMapComponent = () => {
  return (
    <Map center={[25.7837424, -108.9986538]} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        key={1}
        position={[25.7837424, -108.9986538]}
        onClick={() => console.log('Clickeado el mapa xd')}
      ><Popup><Typography align='center'>¡Visítanos pronto!</Typography></Popup></Marker>
    </Map>
  );
}

export default MyMapComponent;