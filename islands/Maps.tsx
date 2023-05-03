import { useEffect, useState } from "preact/hooks";

export type LocationData = {
  latitude: number;
  longitude: number;
  
};

function Maps() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  const getPosition = (position: GeolocationPosition) => {
    const data: LocationData = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    console.log(data);
    setLocationData(data);
  };

  const geoError = (error: GeolocationPositionError) => {
    console.log(error);
  };

  const handleButtonClick = () => {
    navigator.geolocation.getCurrentPosition(getPosition, geoError, {
      enableHighAccuracy: true,
    });
  };

  return (
    <div>
      {locationData ? (
        <p>
          Latitude: {locationData.latitude} <br />
          Longitude: {locationData.longitude}
        </p>
      ) : (
        <>
          <button onClick={handleButtonClick}>Obter localização</button>
        </>
      )}
    </div>
  );
}

export default Maps;
