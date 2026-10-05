# Car Rental Demo

A bilingual car-rental web application built with React. Visitors can browse and search a sample fleet, view vehicle details, and submit bookings. A dashboard provides demo workflows for managing cars, brands, and bookings.

> **Demo project:** The application currently uses seeded sample data stored in the browser's `localStorage`. It does not connect to a production backend or process real reservations.

## Features

- Responsive vehicle browsing across sport, luxury, family, economy, and convertible categories.
- Vehicle search and individual booking pages.
- Arabic and English interface support with `i18next`.
- Demo dashboard for adding and editing vehicles and brands, and reviewing bookings.
- Sample blog pages and basic SEO metadata support.
- Browser persistence for demo cars, brands, and bookings.

## Tech stack

- React 18 and React Router
- Vite
- Bootstrap, Material UI, and Tailwind CSS
- `i18next` and `react-i18next`
- Framer Motion and React Icons

## Requirements

- Node.js compatible with the installed Vite version
- npm

## Getting started

```bash
git clone https://github.com/IbrahemMohammad09/Car.git
cd Car
npm install
npm run start
```

Vite prints the local development URL in the terminal (normally `http://localhost:5173`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run start` | Start the Vite development server. |
| `npm run build` | Build the production bundle into `dist/`. |
| `npm run preview` | Serve the production build locally for review. |

## Demo dashboard

The seeded demo administrator can sign in with:

- **Email:** `admin@example.com`
- **Password:** `admin123`

These credentials are for local demonstration only. Do not use them for a deployed or public environment. Demo edits and bookings are saved in the current browser's local storage; clearing site data resets the browser-side state to the sample data.

## Project structure

```text
src/
  component/    Shared UI, home, and dashboard components
  context/      Search and language contexts
  data/         Seed data and local-storage helpers
  locales/      English and Arabic translations
  pages/        Home, search, booking, blog, and dashboard pages
  constant/     Application metadata and legacy API configuration
public/         Static assets and web app metadata
```

## Backend status

The application uses local sample data through `src/data/staticData.js`. The API endpoint map in `src/constant/api.js` is commented out and is not an active integration. Connect and configure a backend before using this project for real inventory, authentication, or bookings.

## License

No license is currently specified. Contact the repository owner before redistributing or using this project beyond its intended demo context.
