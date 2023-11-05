FROM node:18.11.0-alpine3.16 as build-deps

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . ./

RUN yarn build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]