# Image Guide - Where to Add Your Images

## 📁 Folder Structure Created

I've created the following folder structure for you:

```
public/
└── images/
    ├── hero/              # Hero section background
    ├── about/             # About section image
    └── services/          # Service images
        ├── portrait/
        ├── event/
        ├── commercial/
        ├── drone/
        └── prewedding/
```

## 🖼️ Where Images Are Currently Used

### 1. **Hero Section Background**
**File**: `src/components/Hero.jsx` (line ~50)
**Current**: Unsplash URL
**Replace with**: `/images/hero/hero-background.jpg`

```jsx
// Change this:
url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&h=900&fit=crop')

// To this:
url('/images/hero/hero-background.jpg')
```

### 2. **About Section Image**
**File**: `src/components/About.jsx` (line ~100)
**Current**: Unsplash URL
**Replace with**: `/images/about/about-studio.jpg`

```jsx
// Change this:
image="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=600&fit=crop"

// To this:
image="/images/about/about-studio.jpg"
```

### 3. **Service Card Background Images**
**File**: `src/components/Services.jsx` (lines 58, 65, 72, 79, 86)

**Portrait Photography** (line 58):
```jsx
image: '/images/services/portrait/portrait-bg.jpg'
```

**Event Photography** (line 65):
```jsx
image: '/images/services/event/event-bg.jpg'
```

**Commercial Photography** (line 72):
```jsx
image: '/images/services/commercial/commercial-bg.jpg'
```

**Drone Photography** (line 79):
```jsx
image: '/images/services/drone/drone-bg.jpg'
```

**Pre-Wedding Photography** (line 86):
```jsx
image: '/images/services/prewedding/prewedding-bg.jpg'
```

### 4. **Service Gallery Images**
**File**: `src/components/ServiceDetail.jsx` (serviceData object)

Each service has 6 gallery images. Update them like this:

**Portrait Gallery** (lines ~20-25):
```jsx
images: [
  { url: '/images/services/portrait/portrait-1.jpg', alt: 'Professional headshot' },
  { url: '/images/services/portrait/portrait-2.jpg', alt: 'Studio portrait' },
  { url: '/images/services/portrait/portrait-3.jpg', alt: 'Business portrait' },
  { url: '/images/services/portrait/portrait-4.jpg', alt: 'Creative portrait' },
  { url: '/images/services/portrait/portrait-5.jpg', alt: 'Fashion portrait' },
  { url: '/images/services/portrait/portrait-6.jpg', alt: 'Outdoor portrait' },
]
```

**Event Gallery** (lines ~33-38):
```jsx
images: [
  { url: '/images/services/event/event-1.jpg', alt: 'Wedding ceremony' },
  { url: '/images/services/event/event-2.jpg', alt: 'Party celebration' },
  // ... etc
]
```

**Commercial Gallery** (lines ~46-51):
```jsx
images: [
  { url: '/images/services/commercial/commercial-1.jpg', alt: 'Product display' },
  // ... etc
]
```

**Drone Gallery** (lines ~59-64):
```jsx
images: [
  { url: '/images/services/drone/drone-1.jpg', alt: 'Aerial landscape' },
  // ... etc
]
```

**Pre-Wedding Gallery** (lines ~72-77):
```jsx
images: [
  { url: '/images/services/prewedding/prewedding-1.jpg', alt: 'Romantic couple' },
  // ... etc
]
```

### 5. **Video Thumbnails**
**File**: `src/components/ServiceDetail.jsx`

Each service has a video thumbnail. Update them like:
```jsx
videoThumbnail: '/images/services/portrait/video-thumbnail.jpg'
```

## 📏 Recommended Image Sizes

- **Hero Background**: 1600x900px (or larger, landscape)
- **About Section**: 600x600px (square)
- **Service Card Backgrounds**: 600x800px (portrait)
- **Gallery Images**: 600x600px (square) or larger
- **Video Thumbnails**: 800x400px (landscape)

## ✅ Quick Steps to Add Your Images

1. **Add your images** to the `public/images/` folders I created
2. **Update the file paths** in the component files mentioned above
3. **Use the format**: `/images/folder-name/image-name.jpg`
4. **Restart your dev server** if needed: `npm run dev`

## 💡 Tips

- Use **JPG** for photos (smaller file size)
- Use **PNG** for images with transparency
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Keep file names lowercase with hyphens (e.g., `hero-background.jpg`)

## 🔄 Example: Replacing Hero Image

1. Place your image: `public/images/hero/my-hero-image.jpg`
2. Open: `src/components/Hero.jsx`
3. Find line ~50-51
4. Replace:
   ```jsx
   url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&h=900&fit=crop')
   ```
   with:
   ```jsx
   url('/images/hero/my-hero-image.jpg')
   ```

That's it! Your image will now be used.

