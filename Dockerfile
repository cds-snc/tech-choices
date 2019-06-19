FROM node:alpine AS builder
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["yarn", "build" ]

ARG LANG
FROM builder AS nginx
COPY ./public /usr/share/nginx/html
EXPOSE 3000