# Portfolio - Docker Setup

This portfolio is now configured to run in Docker containers, keeping your local macOS system clean.

## Prerequisites

- Docker Desktop for Mac installed and running
- Git (if you want to clone/manage the repository)

## Quick Start

### Option 1: Using the convenience script
```bash
./run-docker.sh
```

### Option 2: Using Docker Compose directly
```bash
# Build and start the container
docker-compose up --build

# Or run in detached mode (background)
docker-compose up --build -d

# View logs if running in detached mode
docker-compose logs -f
```

### Option 3: Using Docker commands directly
```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules portfolio
```

## Development

The container includes hot reloading, so any changes you make to the code will automatically refresh the browser.

### Useful Commands

```bash
# Stop all containers
docker-compose down

# Rebuild and restart (useful after dependency changes)
docker-compose up --build

# View running containers
docker ps

# Access container shell (for debugging)
docker-compose exec portfolio sh

# View logs
docker-compose logs portfolio

# Clean up everything (containers, images, volumes)
docker-compose down --rmi all --volumes
```

## Accessing the Portfolio

Once running, open your browser to:
- **Portfolio**: http://localhost:3000

## File Structure

- `Dockerfile` - Container configuration
- `docker-compose.yml` - Multi-container orchestration
- `.dockerignore` - Files to exclude from Docker context
- `run-docker.sh` - Convenience script to start everything

## Troubleshooting

### Port already in use
If port 3000 is already in use, you can change it in `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Docker not running
Make sure Docker Desktop is running:
```bash
docker info
```

### Permission issues
Make sure the run script is executable:
```bash
chmod +x run-docker.sh
```

### Container not updating
If you make changes to package.json, rebuild the container:
```bash
docker-compose up --build
```

## Stopping the Application

- **Foreground mode**: Press `Ctrl+C`
- **Background mode**: Run `docker-compose down`

## Performance Tips

- The container uses volume mounts for hot reloading
- Node modules are kept in a separate volume for better performance
- `.next` build cache is also volumized to speed up rebuilds
