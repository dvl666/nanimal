FROM node:24

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

ENV CHOKIDAR_USEPOLLING=true
ENV HOST=0.0.0.0

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "4200", "--poll", "2000"]