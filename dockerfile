FROM node:20.9.0-bullseye-slim
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN apt-get -yqq update
#VOLUME /var/run/docker.sock /var/run/docker.sock
#VOLUME /usr/bin/docker /usr/bin/docker
RUN apt-get -yqq install curl
RUN curl https://get.docker.com > dockerinstall && chmod 777 dockerinstall && ./dockerinstall
RUN npm install
CMD "npm" "start"
