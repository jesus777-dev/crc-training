# CRC Training - Progressive Web App

A modern, offline-capable Progressive Web App for volunteer training modules. Built with Next.js, deployed via GitHub Pages.

## Features

- **Offline Support**: Works completely offline with service worker caching
- **Progressive Web App**: Install as native app on mobile/desktop
- **Dark Theme**: Tech-oriented neon cyan design
- **Progress Tracking**: Local storage for user progress
- **Responsive Design**: Works on all devices
- **GitHub Pages**: Free hosting with automatic deployment

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/crc-training/`

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Automatic Deployment (GitHub Actions)

Push to `main` branch → Automatically deploys to GitHub Pages

```bash
git add .
git commit -m "Update training modules"
git push origin main
```

### Manual Deployment

```bash
npm run build
# Deploy the 'out' folder to GitHub Pages
```

## Managing Content

### Edit Training Modules

Edit `lib/lms-data.ts`:

```typescript
export const lmsData: Section[] = [
  {
    id: 'live-stream',
    title: 'Live Stream',
    modules: [
      {
        id: 'youtube-setup',
        title: 'Setup YouTube',
        steps: [
          {
            id: 'step-1',
            title: 'Step Title',
            content: 'Step description...'
          }
        ]
      }
    ]
  }
];
```

### Update & Deploy

1. Edit `lib/lms-data.ts`
2. Commit and push:
   ```bash
   git add lib/lms-data.ts
   git commit -m "Update YouTube module steps"
   git push origin main
   ```
3. GitHub Actions automatically builds and deploys to GitHub Pages

## Project Structure

```
crc-training/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── SectionCard.tsx     # Section card component
│   ├── ModuleList.tsx      # Module list component
│   └── ModuleDetail.tsx    # Module detail component
├── lib/
│   └── lms-data.ts         # Training content (EDIT THIS)
├── public/
│   ├── manifest.json       # PWA manifest
│   └── sw.js               # Service worker
├── next.config.js          # Next.js config
└── package.json
```

## PWA Installation

### On Mobile (iOS/Android)
1. Open in browser
2. Tap share/menu
3. Select "Add to Home Screen"

### On Desktop (Chrome/Edge)
1. Click install icon in address bar
2. Or right-click → "Install app"

## Offline Usage

- App caches all content on first visit
- Works completely offline after initial load
- Progress syncs to browser storage
- Updates available when online

## GitHub Pages Setup

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `gh-pages` branch
4. Save

## Troubleshooting

**App not updating?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear service worker cache in DevTools

**Offline not working?**
- Check browser supports service workers
- Verify manifest.json is accessible
- Check browser console for errors

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Service Workers** - Offline support
- **GitHub Pages** - Free hosting
- **GitHub Actions** - CI/CD

## License

MIT
