import SearchForm from './components/SearchForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-200 mb-4">
          Weather App
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Enter a city name to get the forecast
        </p>
        
        <SearchForm />
      </div>
    </main>
  );
}
