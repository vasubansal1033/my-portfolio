#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🐳 Starting Portfolio in Docker...${NC}"

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Docker is not running. Please start Docker Desktop first.${NC}"
    exit 1
fi

# Build and run the container
echo -e "${GREEN}Building and starting the portfolio...${NC}"
docker-compose up --build

echo -e "${GREEN}✅ Portfolio is now running at http://localhost:3000${NC}"
echo -e "${YELLOW}💡 Press Ctrl+C to stop the container${NC}"
