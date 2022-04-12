
import React, { useMemo } from "react";
// import PropTypes from "prop-types";

import { GoogleMap } from "@react-google-maps/api";
const MapContainer = () => {

    const center = useMemo(() => ({ lat: 43, lng: -80 }), []);
    return (
        <div style={{ height: "100px", width: "100px" }}>
            <GoogleMap google="" zoom={10} center={center} mapContainerClassName="map-container"></GoogleMap>
        </div>

    );

};

MapContainer.propTypes = {
};
// "AIzaSyBNGgpaMwmJWlFT2sh-7oYqgNhAA4B6Du4"
export default MapContainer;