# Car Rental Demo

A bilingual car-rental web application built with React. Visitors can browse and search a sample fleet, view vehicle details, and submit bookings. A dashboard provides demo workflows for managing cars, brands, and bookings.

> **Demo project:** The application currently uses seeded sample data stored in the browser's `localStorage`. It does not connect to a production backend or process real reservations.

## Features
- Browse vehicles across sport, luxury, family, economy, and convertible categories.
- Search the sample fleet and open vehicle booking pages.
- Arabic and English interface support with `i18next`.
- Demo dashboard for cars, brands, and bookings.
- Sample blog pages and SEO metadata support.
- Browser persistence for demo inventory and bookings.

## Tech stack
- React 18, React Router, and Vite
- Bootstrap, Material UI, and Tailwind CSS
- `i18next` and `react-i18next`
- Framer Motion and React Icons

## Getting started
```bash
git clone https://github.com/IbrahemMohammad09/Car.git
cd Car
npm install
npm run start
```

Vite prints the development URL in the terminal (normally [http://localhost:5173](http://localhost:5173)).

## Available scripts
- `npm run start` — start the Vite development server.
- `npm run build` — create the production bundle in `dist/`.
- `npm run preview` — preview the production bundle locally.

## Demo dashboard
The sample administrator credentials are `admin@example.com` / `admin123`. They are for local demonstration only and must not be used in a public deployment. Changes are stored in the current browser's local storage; clearing site data restores the seeded sample state.

## Project structure
- `src/pages/` — home, search, booking, blog, and dashboard pages.
- `src/component/` — shared, home, and dashboard UI.
- `src/data/staticData.js` — sample data and local-storage helpers.
- `src/locales/` — English and Arabic translations.
- `public/` — static files and web app metadata.

## Backend status
The app uses local sample data. The endpoint map in `src/constant/api.js` is commented out and is not an active backend integration. Add and configure a backend before using real inventory, accounts, or reservations.

## License
No license is currently specified. Contact the repository owner before redistributing or using this project beyond its demo context.
