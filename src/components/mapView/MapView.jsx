import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MapView = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });

  return (
    <div className="w-1/2 h-screen">
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      >
        <Marker latitude={37.7577} longitude={-122.4376}>
          <div>Marker</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default MapView;
