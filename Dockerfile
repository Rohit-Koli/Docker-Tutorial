# Use the official Node.js image with Alpine Linux for a smaller footprint
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app 

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies if you have a package.json (optional step)
# RUN npm install

# Expose the port that the app will run on (optional)
# EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
