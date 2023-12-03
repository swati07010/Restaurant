// Map.js
import React from "react";

const Map = ({ coordinates }) => {
  const mapUrl = `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&z=15&output=embed`;

  return (
    <div className="decoration">
      <div className="row rowdec">
        <h5>123 Gourmet Avenue, Culinary Metropolis</h5>
        <iframe
          title="restaurant-map"
          width="500"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
