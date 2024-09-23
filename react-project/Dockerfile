FROM node:21.7.3 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

RUN npm i react-router-dom

COPY . .

RUN npm run build

# Serving the project using lighweight server
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 1212

CMD ["nginx", "-g", "daemon off;"]