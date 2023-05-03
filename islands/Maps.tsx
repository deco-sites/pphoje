import { useEffect, useState } from "preact/hooks";

export type LocationData = {
  latitude: number;
  longitude: number;
  link: string;
};

function Maps() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  const getPosition = (position: GeolocationPosition) => {
    const data: LocationData = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      link: `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`
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
      {locationData
        ? (
          <div>
            <a href={locationData.link} target="_blank">{locationData.link}</a>
          </div>                 
        )
        : (
          <>
            <button onClick={handleButtonClick}>Obter localização</button>
          </>
        )}
    </div>
  );
}

export default Maps;
