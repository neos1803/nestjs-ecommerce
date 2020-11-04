FROM node:12

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .
COPY .env.dev .env

RUN yarn install

EXPOSE 8080
CMD [ "yarn", "start" ]
