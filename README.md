# Bhagwat Digital Studios - React Application

A modern, responsive photography studio website built with React and Material UI.

## Features

- 🎨 Material UI components with custom dark theme
- 📱 Fully responsive design
- ✨ Smooth parallax scrolling effects
- 🖼️ Interactive service galleries
- 🎬 Service detail pages with image galleries
- 📞 Contact information with clickable phone link
- 🎯 Smooth scroll navigation

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.js       # Navigation bar with mobile menu
  │   ├── Hero.js         # Hero section with parallax
  │   ├── About.js        # About section
  │   ├── Services.js     # Services grid
  │   ├── ServiceDetail.js # Service detail modal
  │   ├── Contact.js      # Contact section
  │   └── Footer.js       # Footer
  ├── App.js              # Main app component
  ├── theme.js            # Material UI theme configuration
  └── index.js            # Entry point
```

## Technologies Used

- React 18
- Vite 5 (Build tool)
- Material UI (MUI) 5
- React Router DOM
- Google Fonts (Playfair Display, Inter)

## Customization

The app supports configuration through the `config` object in `App.js`. You can customize:

- Colors (background, surface, text, primary, secondary)
- Typography (font family, sizes)
- Content (titles, descriptions, contact info)

## License

© 2025 Bhagwat Digital Studios. All rights reserved.
