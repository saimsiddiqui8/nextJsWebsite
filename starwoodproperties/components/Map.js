import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.AIzaSyDWqX0zbqIWvP0KjqrWPdSRggvSdu7KNoQ,
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 }, // Set initial center coordinates
        zoom: 8, // Set initial zoom level
      });

      // Use the geocoder to convert address to coordinates and set the map center
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results.length > 0) {
          map.setCenter(results[0].geometry.location);
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  }, [address]);

  return <div style={{ height: "400px" }} ref={mapRef} />;
};

export default Map;
