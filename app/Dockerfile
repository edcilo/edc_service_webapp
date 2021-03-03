FROM node:15.10.0-alpine3.10

RUN mkdir -p /app
WORKDIR /app

COPY . /app/
RUN yarn install

RUN yarn run build
RUN yarn run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
