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
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 max-w-md mx-auto">
      <h2 className="text-4xl font-bold text-gray-200 mb-4">{weather.name}</h2>
      
      <div className="text-center mb-6">
        <div className="text-7xl font-extrabold text-gray-200 mt-4">
          {Math.round(weather.main.temp)}°C
        </div>
        <div className="text-gray-400 capitalize mt-2">
          {weather.weather[0].description}
        </div>
        <div className="text-gray-400 mt-2">
          Feels like {Math.round(weather.main.feels_like)}°C
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="text-center">
          <div className="text-sm text-gray-400">Humidity</div>
          <div className="font-semibold text-gray-200">{weather.main.humidity}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-400">Wind Speed</div>
          <div className="font-semibold text-gray-200">{weather.wind.speed} m/s</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-400">High</div>
          <div className="font-semibold text-gray-200">{Math.round(weather.main.temp_max)}°C</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-400">Low</div>
          <div className="font-semibold text-gray-200">{Math.round(weather.main.temp_min)}°C</div>
        </div>
      </div>
    </div>
  );
} 