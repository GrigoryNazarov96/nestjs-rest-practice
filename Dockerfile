FROM node:latest

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]
