export async function fetchData(): Promise<any> {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const cityLocation = process.env.REACT_APP_CITY_LOCATION;
      const lang = process.env.REACT_APP_LANG;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLocation},${lang}&APPID=${apiKey}&units=metric&lang=fi`);
    if (!response.ok) {
      throw new Error('API-kutsu epäonnistui');
    }
    const data = await response.json();
    
    const simplifiedData = {
      name: data.name,
      weather: {
        id: data.weather[0].id,
        description: data.weather[0].description,
      },
      wind: {
        speed: data.wind.speed,
      },
      main: {
        temp: data.main.temp,
      }
    };
    console.log("Apikutsu")
    return simplifiedData;
  } catch (error) {
    console.error('Virhe:', error);
  }
}

  export {};