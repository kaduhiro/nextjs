ARG VERSION=19

FROM node:${VERSION}
LABEL maintainer="kaduhiro <github@kaduhiro.com>"

USER node
WORKDIR /src

EXPOSE 3000
