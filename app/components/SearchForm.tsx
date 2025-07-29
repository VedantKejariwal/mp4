"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      router.push(`/weather/${encodeURIComponent(city.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-8">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="bg-gray-800 border border-gray-700 rounded-l-md p-3 text-gray-200 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold rounded-r-md px-6 py-3 hover:bg-blue-500"
      >
        Get Weather
      </button>
    </form>
  );
} 