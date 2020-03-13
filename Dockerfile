FROM ubuntu:18.04

RUN apt-get update -y && apt-get install -y npm
RUN adduser webapp --disabled-password --disabled-login --gecos "" --home /var/lib/webapp
USER webapp
WORKDIR /var/lib/webapp
ADD . /var/lib/webapp
RUN npm i && npm run build

EXPOSE 3000

ENTRYPOINT [ "node /var/lib/webapp/build/bin/www" ]