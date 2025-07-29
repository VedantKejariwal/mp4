Of course. This is a fantastic project for learning how to handle credentials securely, a critical skill in web development.

Here is the complete Product Requirements Document (PRD) designed to be given to an AI coding assistant like Cursor. It is followed by a separate, detailed step-by-step guide for you to follow for tasks outside of coding, like acquiring the API key and deploying the final application.

---

## Project PRD: Next.js API Key Application

### 1. Project Mandate & Core Philosophy

This project's goal is to build a simple Next.js application that fetches data from an external, key-protected API and displays it to the user. The central challenge is to ensure the API key **is never exposed to the client-side browser**.

**Guiding Philosophy: Simplicity and Adherence to Scope**
This is a beginner-level assignment. The code must be straightforward, easy to understand, and must not use any advanced features beyond the scope of the class material.

*   **Strict Adherence to Instructions:** The implementation must **only** use the techniques and tools explicitly outlined in this document and the assignment PDF.
*   **No Advanced Code:** The code must look like it was written by a student learning Next.js.
    *   **Framework:** Use Next.js with the **App Router**. Do not use the `pages` directory or the `getServerSideProps()` function.
    *   **Styling:** Tailwind CSS is permitted, but not required. Basic CSS is also fine.
    *   **External Packages:** The only external packages allowed are for UI/styling (e.g., MUI, styled-components). We will not use any for this project to maintain simplicity.
*   **No Code Comments:** The final code files (`.ts`, `.tsx`, `.css`) should not contain any comments. This document is the only source of documentation.

### 2. Task 1: Initialize a New Next.js Project

1.  **Initialize Project:** Use the standard `create-next-app` command. When prompted, select the defaults which include TypeScript and Tailwind CSS.
    ```bash
    npx create-next-app@latest
    ```
    *   When asked for the project name, enter `api-key-project`.
2.  **Navigate into Directory:**
    ```bash
    cd api-key-project
    ```

### 3. Task 2: Obtain API Key and Implement Backend Logic

#### 3.1 API Selection
We will use the **OpenWeatherMap** API. It is free, well-documented, requires a simple API key, and returns data in JSON format, making it ideal for this project.
*   **API Documentation:** [https://openweathermap.org/api](https://openweathermap.org/api)

#### 3.2 Secure Key Storage
The API key must be stored securely on the server.
1.  **Create `.env.local` file:** In the root of the `api-key-project` directory, create a file named `.env.local`.
2.  **Store the Key:** Add the API key to this file. The variable name must **not** be prefixed with `NEXT_PUBLIC_`, as this would expose it to the browser.
    ```
    OPENWEATHER_API_KEY="your-key-here"
    ```
    This ensures the key is only accessible via server-side code through `process.env.OPENWEATHER_API_KEY`.

#### 3.3 Backend-Frontend Communication: The JSON API Route Approach
As per the instructions, we will implement this by creating a dedicated API route within our Next.js application. This route will act as a proxy: the client will call our route, and our route will securely call the external API.

1.  **Create the API Route File:** Create a new file at `app/api/weather/route.ts`.
2.  **Implement Server-Side Logic:** This `route.ts` file will contain a `GET` function. This function is **server-side** and can safely access the API key. Its job is to:
    *   Read a `city` query parameter from the incoming request URL.
    *   Retrieve the secret API key from `process.env`.
    *   Use `fetch` to make a request to the OpenWeatherMap API, including the city and the secret key.
    *   Return the data received from OpenWeatherMap to the client as a JSON response using `NextResponse.json()`.

### 4. Frontend Implementation & Functionality Requirements

#### 4.1 Page and Route Structure
The application must have at least **two pages/routes**. A simple structure would be:
1.  **Home Page (`/`):** Contains a search input where the user can type a city name.
2.  **Weather Results Page (`/weather/[city]`):** A dynamic route that displays the weather data for the specified city.

#### 4.2 Component Structure
The UI should be broken down into simple, single-purpose components.
*   **`SearchForm.tsx`:** A client component (`"use client"`) containing an input field and a button. When the form is submitted, it should navigate the user to the results page (e.g., `/weather/london`).
*   **Weather Display Component (e.g., `WeatherCard.tsx`):** A component that receives weather data as props and displays it.

#### 4.3 Data Fetching on the Client
The results page (`/weather/[city]/page.tsx`) will be responsible for fetching the data.
1.  It will be a client component (`"use client"`).
2.  It will use a `useEffect` hook to call **our own API endpoint** (`/api/weather?city=...`).
3.  It will store the fetched data in state using `useState`.

#### 4.4 Functionality Requirements Checklist
*   **API Key MUST NOT be exposed** to the client. Verified by only using it in `app/api/weather/route.ts`.
*   **Display data from the API.**
*   **Proper error handling:** The client-side fetch should include a `.catch()` block or a `try...catch` with async/await. If the API call fails, display a user-friendly error message instead of a permanent loading screen.
*   **At least two pages/routes:** The home/search page and the weather results page.

### 5. Deployment Workflow (Git & Vercel)

The following commands will be used to deploy the application.

1.  **Initialize Git Repository:**
    ```bash
    git init
    ```
2.  **Add all files to staging:**
    ```bash
    git add .
    ```
3.  **Commit the files:**
    ```bash
    git commit -m "Initial project setup"
    ```
4.  **Push to GitHub:** After creating a new repository on GitHub.com:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/api-key-project.git
    git branch -M main
    git push -u origin main
    ```
5.  **Deploy on Vercel:** Import the GitHub repository into Vercel. **Crucially, the environment variable (`OPENWEATHER_API_KEY`) must be added to the Vercel project settings** to ensure the live application can access the key on the server.

---

## Your Step-by-Step Guide to Completing the Project

Follow these exact steps.

### Part 1: Get Your API Key

1.  **Sign Up:** Go to the OpenWeatherMap signup page: [https://home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up). Create a free account.
2.  **Find Your Key:** After signing in, navigate to your account dashboard and click on the **"API Keys"** tab.
3.  **Copy Your Key:** You will see a default key already generated for you. Copy this long string of letters and numbers. This is your API key.

### Part 2: Set Up the Next.js Project

1.  **Open Your Terminal.**
2.  **Run the Create Next App command:**
    ```bash
    npx create-next-app@latest
    ```
3.  **Answer the Prompts:**
    *   What is your project named? `api-key-project`
    *   Would you like to use TypeScript? **Yes**
    *   Would you like to use ESLint? **Yes**
    *   Would you like to use Tailwind CSS? **Yes**
    *   Would you like to use `src/` directory? **No**
    *   Would you like to use App Router? **Yes**
    *   Customize the default import alias? **No**
4.  **Navigate into the project folder:**
    ```bash
    cd api-key-project
    ```

### Part 3: Store Your API Key Securely

1.  **Create the Environment File:** In the root of your `api-key-project` folder, create a new file and name it exactly `.env.local`.
2.  **Add the Key:** Inside `.env.local`, type the following, pasting the key you copied from OpenWeatherMap inside the quotes:
    ```
    OPENWEATHER_API_KEY="paste-your-api-key-here"
    ```
3.  Save the file.

### Part 4: Build the Application

Now, you can provide the **PRD document above** to your AI coding assistant (like Cursor) to write the actual code for the Next.js application based on the detailed requirements.

### Part 5: Test Your Application Locally

1.  Once the code is generated, run the development server from your terminal:
    ```bash
    npm run dev
    ```
2.  Open your browser to `http://localhost:3000` to see your application running. Test the search functionality to ensure it fetches and displays weather data correctly.

### Part 6: Deploy Your Website to Vercel

1.  **Initialize Git and Commit:** In your terminal, run the following git commands one by one:
    ```bash
    git init
    git add .
    git commit -m "Final project ready for deployment"
    ```
2.  **Push to GitHub:**
    *   Go to [GitHub.com](https://github.com/) and create a new, public repository named `api-key-project`.
    *   Copy and run the commands provided on the repository page to push your local code. They will look like this:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/api-key-project.git
        git branch -M main
        git push -u origin main
        ```
3.  **Deploy on Vercel:**
    *   Go to [Vercel.com](https://vercel.com/) and connect your GitHub account.
    *   Click **"Add New..."** -> **"Project"**.
    *   Find and **Import** your `api-key-project` repository.
4.  **Add Environment Variable (CRITICAL STEP):**
    *   After importing, you'll be on the "Configure Project" screen. Expand the **"Environment Variables"** section.
    *   For the **Name**, type: `OPENWEATHER_API_KEY`
    *   For the **Value**, paste your API key again.
    *   Click **"Add"**.
5.  **Deploy:** Click the **"Deploy"** button. Vercel will build and host your site. Once it's done, you'll be given the live URL.