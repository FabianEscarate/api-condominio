FROM node:14.17-alpine

WORKDIR /var/app

COPY . .

CMD npm i && npm start
