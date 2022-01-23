ARG NODE_VERSION=17

FROM node:${NODE_VERSION}-alpine AS pwa_common

EXPOSE 3000

WORKDIR /usr/src

COPY package.json yarn.lock ./

FROM pwa_common AS pwa_dev

VOLUME /usr/src/node_modules
VOLUME /usr/src/.next

RUN yarn

CMD ["yarn", "dev"]

FROM pwa_common AS pwa_prod

ENV NODE_ENV production

COPY . ./

RUN yarn && yarn build

CMD ["yarn", "start"]