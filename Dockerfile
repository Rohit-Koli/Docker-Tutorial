FROM node:alpine
COPY . /app
#Current Working Directory
WORKDIR /app 
CMD node app.js