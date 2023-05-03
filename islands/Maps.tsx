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
      link:
        `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`,
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

  function copyToClipboard() {
    if(locationData?.link){
      navigator.clipboard.writeText(locationData.link);
    }
  }

  return (
    <div class="text-center px-2 py-2 flex flex-col gap-4">
      {locationData
        ? (
          <div>
            <a href={locationData.link} target="_blank">{locationData.link}</a>
            <button onClick={copyToClipboard}>Copiar</button>
          </div>
        )
        : (
          <div>
            <button onClick={handleButtonClick} class="cursor-pointer px-2 py-2 bg-blue-600">Obter localização</button>
          </div>
        )}
    </div>
  );
}

export default Maps;
