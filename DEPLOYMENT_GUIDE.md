# AHOY Spotlight App - Vercel Deployment Guide

## Project Overview
This is a Next.js application with:
- **Home Page**: Modern landing page with spotlight effects and animations
- **Contact Page**: Responsive contact form with animated reveals
- **Modern UI**: Dark theme with gradient effects, blur backgrounds
- **Components**: Custom UI components including infinite ribbon animation
- **Responsive Design**: Works on mobile and desktop

## Local Development
The project is currently running on: `http://localhost:3000`

To restart the dev server:
```bash
cd "/Users/mac/untitled folder/spotlight-app"
npm run dev
```

## Deploy to Vercel - Step by Step Instructions

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com
   - Sign in to your account (or create one if needed)

2. **Create New Project**
   - Click "New Project" or "Add New..."
   - Choose "Project"

3. **Import Git Repository**
   - Connect your GitHub account if not already connected
   - Import from GitHub: `https://github.com/yousribouhamed/ahoy.git`
   - Select the repository: `yousribouhamed/ahoy`

4. **Project Configuration**
   - **Framework Preset**: Vercel will auto-detect "Next.js"
   - **Root Directory**: Leave as "./" (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Environment Variables** (if needed)
   - No environment variables are required for this project

6. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-3 minutes)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd "/Users/mac/untitled folder/spotlight-app"
   vercel --prod
   ```

4. **Follow the Prompts**
   - Set up and deploy? → Yes
   - Which scope? → Choose your account/team
   - Link to existing project? → No (for first deployment)
   - Project name → Enter a name (e.g., "ahoy-spotlight")
   - Directory → "./" (current directory)

## Project Structure
```
spotlight-app/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # UI components
│   │   └── infinite-ribbon-demo.tsx
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS config
└── tsconfig.json            # TypeScript config
```

## Key Features
- ✅ **Responsive Design**: Mobile and desktop optimized
- ✅ **Modern Animations**: GSAP animations, blur reveals, spotlight effects
- ✅ **Contact Form**: Fully styled contact form with validation-ready inputs
- ✅ **Navigation**: Working navigation between home and contact pages
- ✅ **Custom Components**: Reusable UI components
- ✅ **TypeScript**: Full TypeScript support
- ✅ **Tailwind CSS**: Utility-first CSS framework
- ✅ **Production Ready**: Optimized build configuration

## Build Information
- **Framework**: Next.js 15.3.5
- **Build Time**: ~4 seconds
- **Bundle Size**: ~200 KB first load
- **Pages**: 2 static pages (/, /contact)
- **Status**: ✅ Build successful, ready for deployment

## Troubleshooting

### If deployment fails:
1. Check that all dependencies are in package.json
2. Ensure the build passes locally: `npm run build`
3. Verify Node.js version compatibility (Next.js 15 requires Node 18+)

### If 404 errors occur:
1. Make sure the project structure follows Next.js App Router format
2. Verify all components are properly exported
3. Check that all imports use correct paths

## Support
- **GitHub Repository**: https://github.com/yousribouhamed/ahoy.git
- Local dev server: `http://localhost:3000`
- Contact page: `http://localhost:3000/contact`
- All components are working and tested locally

Your project is now ready for deployment! 🚀

## Quick Deployment Steps Summary

1. **Go to**: https://vercel.com
2. **Click**: "New Project"
3. **Import**: `https://github.com/yousribouhamed/ahoy.git`
4. **Deploy**: Click "Deploy" (Vercel will auto-detect Next.js)
5. **Done**: Your site will be live in 2-3 minutes!
