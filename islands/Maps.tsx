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
    if (locationData?.link) {
      navigator.clipboard.writeText(locationData.link);
    }
  }

  return (
    <div class="text-center px-2 py-2 flex flex-col gap-4">
      {locationData
        ? (
          <div>
            <a href={locationData.link} target="_blank">
              {locationData.link}
            </a>
            <button onClick={copyToClipboard}>Copiar</button>
          </div>
        )
        : (
          <div>
            <div class="alert alert-info shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  >
                  </path>
                </svg>
                <span>New software update available.</span>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Maps;
