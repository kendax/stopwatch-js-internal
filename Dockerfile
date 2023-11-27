# Use a base image with Node.js to serve static files
FROM node:latest AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the project files to the container
COPY . /app

# Install any necessary dependencies (if required)
# For a simple HTML/CSS/JS project, this might not be needed

# Expose a port (if needed)
EXPOSE 80

# Start a simple HTTP server to serve the static content
CMD ["npx", "http-server", "-p", "80"]
