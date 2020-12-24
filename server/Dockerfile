FROM node:alpine
WORKDIR '/app'
ADD package.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]
