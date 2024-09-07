import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import locationIcon from "../assets/images/location.png";

// Custom marker component
const Marker = ({ text }) => (
  <div className="map-marker">
    <img src={locationIcon} alt={text} width={40} height={40} />
  </div>
);

const GoogleMap = ({ lat, lng, zoom, options }) => {
  console.log("location", lat, lng);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws" }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
        options={options}
      >
        {/* <Marker lat={lat} lng={lng} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  options: PropTypes.shape({}),
};

GoogleMap.defaultProps = {
  lat: 12.971599,
  lng: 77.594566,
  zoom: 12,
};

export default GoogleMap;
