FROM node:20-alpine3.19
LABEL authors="mkluszczynski"

WORKDIR /app

COPY package.json .

RUN npm install -g pnpm

RUN pnpm install

COPY .. .

RUN pnpm build


CMD ["pnpm", "start"]