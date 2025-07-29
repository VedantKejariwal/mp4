import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json({ error: 'Invalid API key. Please check your OpenWeatherMap API key.' }, { status: 401 });
      } else if (response.status === 404) {
        return NextResponse.json({ error: 'City not found' }, { status: 404 });
      } else {
        return NextResponse.json({ error: data.message || 'Failed to fetch weather data' }, { status: response.status });
      }
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
} 