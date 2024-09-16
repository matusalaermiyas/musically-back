FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Start the Node.js application
CMD [ "node", "main.js" ]

