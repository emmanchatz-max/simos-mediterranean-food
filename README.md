# SIMOS Mediterranean Food - Premium B2B Export Website

This is a premium, multilingual B2B showcase website for **SIMOS Mediterranean Food**, built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Typography**: Playfair Display (Headings) & Inter (Body)

## Features

- **Multilingual Support**: English, Greek, French, Italian, and Spanish.
- **Premium Design**: Editorial-style layouts with a Mediterranean aesthetic.
- **B2B Focus**: Catalog-style product showcase (not retail e-commerce).
- **Responsive**: Fully optimized for mobile and desktop.
- **Dynamic Hero Slider**: Smooth transitions and zoom effects.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

- `src/app/[locale]`: Localized routes and pages.
- `src/components`: Reusable UI components.
- `src/messages`: Translation dictionaries.
- `src/styles`: Global styles and Tailwind configuration.
- `src/navigation.ts`: Localized navigation utilities.

## Localization

To add or modify translations, edit the JSON files in `src/messages/`.
The routing is handled automatically by the middleware in `src/middleware.ts`.
