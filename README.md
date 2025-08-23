# Vasu Bansal - Portfolio

A modern, responsive portfolio website built with Next.js 13, featuring animations and professional design.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for fast loading and SEO
- **Docker Support**: Containerized development environment
- **GitHub Pages**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Container**: Docker & Docker Compose

## 📦 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Docker Development

```bash
# Build and run with Docker
./run-docker.sh
```

See `README-DOCKER.md` for detailed Docker instructions.

## 🚀 Deployment

This portfolio automatically deploys to GitHub Pages when you push to the main branch.

### Setup GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. Push to main branch to trigger deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

### Manual Deployment

```bash
# Build static export
npm run build

# The static files will be in the 'dist' folder
```

## 🎨 Customization

### Personal Information
- Update `components/Hero.tsx` for main intro
- Modify `components/About.tsx` for background info
- Edit `components/Resume.tsx` for experience
- Update `components/Contact.tsx` for contact details

### Styling
- Customize colors in `tailwind.config.ts`
- Modify animations in `app/globals.css`
- Update component styles in individual files

## 📁 Project Structure

```
├── app/                    # Next.js 13 app directory
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   └── ...               # Other components
├── lib/                  # Utilities
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions
└── docker-compose.yml    # Docker configuration
```

## 🔧 Configuration

### Next.js
- Static export configuration in `next.config.js`
- Optimized for GitHub Pages deployment

### Docker
- Multi-stage build for development
- See `Dockerfile` and `docker-compose.yml`

### GitHub Actions
- Automated build and deployment
- See `.github/workflows/deploy.yml`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: vasu@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)
