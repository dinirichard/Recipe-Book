FROM node:11.15.0-alpine as node

WORKDIR /app

COPY package*.json ./

RUN npm install -g typescript@3.5.3 @angular/core@8.2.14 @angular/compiler@8.2.14 rxjs@^6.4.0 zone.js@~0.9.1

RUN npm install

COPY . .

EXPOSE 4200

CMD npm run start

# Stage 2
# FROM nginx:alpine

# COPY --from=node /app/dist/recipe-book-frontend /usr/share/nginx/html

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
