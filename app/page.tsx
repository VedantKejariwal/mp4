import SearchForm from './components/SearchForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Weather App
          </h1>
          <p className="text-gray-600 text-lg">
            Enter a city name to get the current weather information
          </p>
        </div>
        
        <SearchForm />
      </div>
    </main>
  );
}
