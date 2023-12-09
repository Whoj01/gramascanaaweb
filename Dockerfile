FROM --platform=linux/amd64 node:18.18.0

WORKDIR /gram-web

ADD package.json /gram-web

RUN npm install

ADD . /gram-web

RUN npm run build

CMD ["npm", "start"]