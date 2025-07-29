# Weather App - Next.js API Key Project

A simple Next.js application that demonstrates secure API key handling by fetching weather data from OpenWeatherMap API.

## Features

- **Secure API Key Handling**: API key is stored server-side and never exposed to the client
- **Weather Search**: Search for any city to get current weather information
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **Error Handling**: Proper error handling for API failures and invalid cities

## Project Structure

```
api-key-project/
├── app/
│   ├── api/weather/route.ts    # Server-side API route (secure)
│   ├── components/
│   │   ├── SearchForm.tsx      # Search form component
│   │   └── WeatherCard.tsx     # Weather display component
│   ├── weather/[city]/page.tsx # Dynamic weather results page
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── .env.local                  # Environment variables (API key)
└── README.md                   # This file
```

## Setup Instructions

### 1. Get Your OpenWeatherMap API Key

1. Go to [OpenWeatherMap Signup](https://home.openweathermap.org/users/sign_up)
2. Create a free account
3. Navigate to your account dashboard and click on **"API Keys"**
4. Copy your default API key

### 2. Configure the API Key

1. In the project root, edit the `.env.local` file
2. Replace `"your-api-key-here"` with your actual API key:
   ```
   OPENWEATHER_API_KEY="your-actual-api-key-here"
   ```

### 3. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## How It Works

### Security Implementation

The API key is securely handled using Next.js App Router:

1. **Server-Side Only**: The API key is only accessible in `app/api/weather/route.ts`
2. **Environment Variables**: Stored in `.env.local` (not prefixed with `NEXT_PUBLIC_`)
3. **Proxy Pattern**: Client calls our API route, which securely calls OpenWeatherMap

### Data Flow

1. User enters a city name on the home page
2. Form submission navigates to `/weather/[city]`
3. The weather page calls `/api/weather?city=[city]`
4. Our API route securely calls OpenWeatherMap with the API key
5. Weather data is returned and displayed

## Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/api-key-project.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [Vercel.com](https://vercel.com/)
   - Connect your GitHub account
   - Import your `api-key-project` repository
   - **Add Environment Variable:**
     - Name: `OPENWEATHER_API_KEY`
     - Value: Your OpenWeatherMap API key
   - Click **"Deploy"**

## Technologies Used

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **OpenWeatherMap API** for weather data

## API Endpoints

- `GET /api/weather?city=[city]` - Fetches weather data for a city
  - Returns JSON with weather information
  - Handles errors gracefully

## Error Handling

- Invalid city names
- API key configuration issues
- Network failures
- Server errors

All errors are displayed with user-friendly messages and navigation back to the search page.
