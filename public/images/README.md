# Images Directory

Place your images in the following folders:

## Folder Structure

```
public/images/
├── hero/              # Hero section background image
├── about/             # About section image
└── services/          # Service card background images
    ├── portrait/     # Portrait photography images
    ├── event/        # Event photography images
    ├── commercial/   # Commercial photography images
    ├── drone/        # Drone photography images
    └── prewedding/   # Pre-wedding photography images
```

## How to Use Images

### Option 1: Using Public Folder (Recommended for static images)

Images in the `public/` folder can be referenced directly:

```jsx
// Example: If you have public/images/hero/hero-bg.jpg
image: '/images/hero/hero-bg.jpg'

// Example: If you have public/images/services/portrait/portrait-1.jpg
image: '/images/services/portrait/portrait-1.jpg'
```

### Option 2: Using src/assets Folder (For imported images)

1. Create `src/assets/images/` folder
2. Import images in your components:

```jsx
import heroImage from '../assets/images/hero-bg.jpg';

// Then use:
image: heroImage
```

## Recommended Image Sizes

- **Hero Background**: 1600x900px or larger
- **Service Cards**: 600x800px
- **Gallery Images**: 600x600px or larger
- **About Section**: 600x600px or larger

## Current Image Locations in Code

- **Hero Section**: `src/components/Hero.jsx` (line ~50)
- **About Section**: `src/components/About.jsx` (line ~100)
- **Service Cards**: `src/components/Services.jsx` (lines 58, 65, 72, 79, 86)
- **Service Galleries**: `src/components/ServiceDetail.jsx` (serviceData object)

