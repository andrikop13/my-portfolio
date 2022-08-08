import { myLocationLatLon } from "../../../../config/config";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import MarkerWithOpenPopup from "./Marker";

const MyLocation = () => {
  const coordinates = myLocationLatLon;

  return (
    <div id="container">
      <MapContainer
        center={coordinates}
        zoomControl={false}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerWithOpenPopup position={coordinates}>
          <Popup>
            Patras, <b>Greece</b> <br /> Achaia, <b>Peloponnese</b>
          </Popup>
        </MarkerWithOpenPopup>
      </MapContainer>
    </div>
  );
};

export default MyLocation;
