FROM node:14.17.0-alpine

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT
ARG postgresDataBase
ARG postgresHost
ARG postgresUserName
ARG postgresPassword
ARG postgresDataBase

ENV PORT $PORT
ENV postgresDataBase $postgresDataBase
ENV postgresHost $postgresHost
ENV postgresUserName $postgresUserName
ENV postgresPassword $postgresPassword
ENV postgresDataBase $postgresDataBase

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start"]