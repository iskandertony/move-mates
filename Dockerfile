FROM node:17 as builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.24.0-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
