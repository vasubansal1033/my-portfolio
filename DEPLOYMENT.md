# GitHub Pages Deployment Guide

This portfolio is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 2. Push to Main/Master Branch
The deployment will automatically trigger when you push to the `main` or `master` branch.

### 3. Manual Deployment
You can also trigger a manual deployment:
1. Go to **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button

## Configuration Details

### Next.js Configuration
- **Static Export**: Configured in `next.config.js` with `output: 'export'`
- **Build Directory**: Uses `dist` folder for static files
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slashes**: Enabled for GitHub Pages compatibility

### GitHub Actions Workflow
- **Trigger**: Pushes to main/master branch
- **Build**: Uses Node.js 18 and npm ci
- **Deploy**: Automatically uploads to GitHub Pages

### Files Structure
```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
public/
  .nojekyll            # Prevents Jekyll processing
next.config.js         # Next.js static export config
```

## Build Commands

### Local Development
```bash
npm run dev
```

### Local Build (Static Export)
```bash
npm run build
```

### Docker Development
```bash
./run-docker.sh
```

## Troubleshooting

### Common Issues
1. **404 on routes**: Ensure `trailingSlash: true` in next.config.js
2. **Images not loading**: Verify `unoptimized: true` for images
3. **API routes not working**: Static export doesn't support API routes

### Checking Deployment Status
1. Go to **Actions** tab to see build/deploy progress
2. Check **Pages** settings for the deployed URL
3. View build logs for any errors

## Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## Security Notes
- The site is statically generated (no server-side code)
- All blog content is pre-built from markdown files
- No sensitive environment variables are needed for deployment
