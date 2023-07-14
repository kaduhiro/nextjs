ARG NODE_VERSION=19

FROM node:${NODE_VERSION}
LABEL maintainer="kaduhiro <github@kaduhiro.com>"

RUN mkdir /app \
    && chown node.node /app

USER node
WORKDIR /app

EXPOSE 3000
