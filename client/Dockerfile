# Node server
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# nginx 
FROM nginx:alpine
COPY --from=node /app/dist/template-application /usr/share/nginx/html