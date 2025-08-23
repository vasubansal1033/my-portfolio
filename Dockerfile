# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
# Use npm install instead of npm ci since package-lock.json might not exist
RUN npm install

# Copy source code
COPY . .

# Generate package-lock.json if it doesn't exist
RUN if [ ! -f package-lock.json ]; then npm install --package-lock-only; fi

RUN npm install --dev @types/react

# Expose port 3000
EXPOSE 3000

# Set environment to development
ENV NODE_ENV=development

# Start the development server
CMD ["npm", "run", "dev"]
