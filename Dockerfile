# To build and run with Docker:
#
#  $ docker build -t ng2-walkthrough .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 ng2-walkthrough
#
FROM node:latest

RUN mkdir -p /walkthrough /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /walkthrough
COPY package.json typings.json /walkthrough/
RUN npm install --unsafe-perm=true

COPY . /walkthrough
RUN chown -R nodejs:nodejs /walkthrough
USER nodejs

CMD npm start
