# Установить базовый образ Node.js
FROM node:17

# Создать директорию app внутри образа Docker
WORKDIR /app

# Копировать файлы package.json и package-lock.json в директорию /app внутри образа
COPY package*.json ./

# Установить зависимости приложения
RUN npm install

# Копировать все остальные файлы приложения в директорию /app внутри образа
COPY . .

# Собрать приложение для продакшена
RUN npm run build

# Использовать образ Nginx для обслуживания статических файлов
FROM nginx:1.24.0-alpine

# Копировать собранные файлы приложения в директорию Nginx для обслуживания
COPY --from=0 /app/build /usr/share/nginx/html

# Копировать файл конфигурации Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открыть порт 80 для прослушивания соединений
EXPOSE 80

# Запустить Nginx
CMD ["nginx", "-g", "daemon off;"]
