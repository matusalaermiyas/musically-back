# Use an official Node.js runtime as the base image
FROM node:alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (optional, if you have a build step like TypeScript)
# RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Run the application
CMD ["npm", "start"]
