import { useState, useEffect } from "preact/hooks";

export type Location = {
    latitude: number;
    longitude: number;
};

function Maps() {
   const [locationLink, setLocationLink] = useState('');
    const showPosition = async (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`);
    const text = await response.text();
    setLocationLink(`https://www.google.com/maps?q=${latitude},${longitude}`);
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error => {
        console.log(error);
      });
    } else {
      console.log("erro");
    }
  }

  return (
    <div>
      <button onClick={getLocation}>Compartilhar Localização</button>
      {locationLink && <p>Localização <a href={locationLink} target="_blank" rel="">{locationLink}</a></p>}
    </div>
  );
}

export default Maps;


    
  
    
  
  