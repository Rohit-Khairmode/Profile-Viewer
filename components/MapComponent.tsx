// "use client";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// function MapComponent({
//   latitude,
//   longitude,
// }: {
//   latitude: number;
//   longitude: number;
// }) {
//   return (
//     <>
//       <div>Map</div>
//       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[51.505, -0.09]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   );
// }

// export default MapComponent;
"use client";

import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 13.338414, lat: 52.507932 };
  const [zoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
    // @ts-ignore
    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    });
    // @ts-ignore
    map.addLayer({
      id: "background",
      type: "background",
      layout: {
        visibility: "visible",
      },
      paint: {
        "background-color": {
          stops: [
            [6, "hsl(0, 100%, 50%)"],
            [20, "hsl(60,24%,90%)"],
          ],
        },
      },
    });

    // Create a MapTiler Layer inside Leaflet
    const mtLayer = new MaptilerLayer({
      // Get your free API key at https://cloud.maptiler.com
      apiKey: "lxF4JJeBiyD53Nfgdv2K",
      // @ts-ignore
    }).addTo(map.current);
  }, [center.lng, center.lat, zoom]);

  return (
    <div className="border-4 border-primary w-full h-[50vh] ">
      <div ref={mapContainer} className=" w-full h-full " />
    </div>
  );
};

export default Map;
