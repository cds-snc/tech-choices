<<<<<<< HEAD
FROM node AS build

WORKDIR /app
ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --non-interactive

COPY . .
RUN yarn build

FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public /usr/share/nginx/html
=======
FROM node:alpine AS builder
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["yarn", "build" ]

ARG LANG
FROM builder AS nginx
COPY ./public /usr/share/nginx/html
EXPOSE 3000
>>>>>>> fc2ffe876266bd295d067aa435788f3560b92312
