FROM node:20-alpine AS deps
WORKDIR /srv/app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS build
WORKDIR /srv/app
COPY --from=deps /srv/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:20-alpine AS run
WORKDIR /srv/app
ENV NODE_ENV=production
COPY --from=deps  /srv/app/node_modules ./node_modules
COPY --from=build /srv/app/build ./build
COPY . .
EXPOSE 1337
CMD ["npm","run","start"]
