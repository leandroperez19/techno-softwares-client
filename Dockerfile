FROM node:20.11.1-alpine3.19 AS dev

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev-exposed"]

FROM nginx:1.25.4-alpine3.18 AS prod

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=dev /app/dist /var/www/html/

EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]
