import { useEffect, useRef } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import MarkerIcon from "./MarkerIcon";

function MarkerWithOpenPopup(props) {
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const customIcon = new LeafIcon({
    iconUrl: MarkerIcon,
    iconSize: [30, 60],
    iconAnchor: [10, 58], // point of the icon which will correspond to marker's location
    popupAnchor: [5, -57],
  });

  const markerRef = useRef();

  useEffect(() => {
    if (!markerRef.current) return;
    markerRef.current.openPopup();
  }, []);

  return <Marker ref={markerRef} {...props} icon={customIcon} />;
}

export default MarkerWithOpenPopup;
