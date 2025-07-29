interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">{weather.name}</h2>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-blue-600">
          {Math.round(weather.main.temp)}°C
        </div>
        <div className="text-gray-600 capitalize">
          {weather.weather[0].description}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Feels Like</div>
          <div className="font-semibold">{Math.round(weather.main.feels_like)}°C</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Humidity</div>
          <div className="font-semibold">{weather.main.humidity}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Wind Speed</div>
          <div className="font-semibold">{weather.wind.speed} m/s</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Condition</div>
          <div className="font-semibold capitalize">{weather.weather[0].main}</div>
        </div>
      </div>
    </div>
  );
} 