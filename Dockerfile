FROM ubuntu:18.04

RUN apt-get update -y && apt-get install -y npm
RUN adduser webapp --disabled-password --disabled-login --gecos "" --home /var/lib/webapp
WORKDIR /var/lib/webapp
ADD . /var/lib/webapp
RUN npm i -g yarn
RUN yarn && yarn add sqlite3
RUN npm run build
#USER webapp

EXPOSE 3000

ENTRYPOINT [ "node", "/var/lib/webapp/build/bin/www.js" ]
