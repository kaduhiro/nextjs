ARG VERSION=22.04

FROM ubuntu:${VERSION}
LABEL maintainer="kaduhiro <github@kaduhiro.com>"

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y  --no-install-recommends tzdata

RUN apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
