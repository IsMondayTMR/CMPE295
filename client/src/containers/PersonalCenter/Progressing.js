import React from "react";
// import { ProfileComp } from "../../styledComponents/export";
import MapContainer from "../../components/MapContainer";
import PropTypes from "prop-types";
import { useLoadScript } from "@react-google-maps/api";

const Progressing = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    });

    if (!isLoaded) return <div>...loading</div>;
    return (
        <div
            style={{
                width: "1600px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",

            }}>
            Progressing
            < MapContainer />
        </div >
    );
};





Progressing.propTypes = {
    innerRef: PropTypes.object,
};
export default Progressing;