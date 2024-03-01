export interface SimpleWeatherData {
    weather: {
      id: number;
      description: string;
    };
    main: {
      temp: number;
    };
    wind: {
      speed: number;
    };
    name: string;
  }
  