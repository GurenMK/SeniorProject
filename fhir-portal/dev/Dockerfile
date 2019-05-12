# FROM tomcat:8.0.51-jre8-alpine
FROM openjdk:8-jdk-alpine
LABEL maintainer="evgeniy Vakhroushev"
ARG MOUNT_DIR

RUN apk add --update --no-cache maven

WORKDIR ${MOUNT_DIR}