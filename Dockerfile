# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the extension code into the container
COPY . .

# Start VS Code extension host and expose the required port
CMD ["npm", "run", "vscode:prepublish"]
