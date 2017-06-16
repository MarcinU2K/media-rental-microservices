#!/bin/bash

# docker tag local-image:tagname reponame:tagname
# docker push reponame:tagname
# docker push marcinu2l/microservices:bank:tagname

# docker login
# -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS

docker build -t marcinu2l/microservices:rental-config ./config
docker build -t marcinu2l/microservices:rental-registry ./registry
docker build -t marcinu2l/microservices:rental-gateway ./gateway
docker build -t marcinu2l/microservices:rental-auth-service ./auth-service
docker build -t marcinu2l/microservices:rental-account-service ./account-service
docker build -t marcinu2l/microservices:rental-movie-service ./movie-service
docker build -t marcinu2l/microservices:rental-rent-service ./rent-service
docker build -t marcinu2l/microservices:rental-monitoring ./monitoring
docker build -t marcinu2l/microservices:rental-mongodb ./mongodb

docker login
docker push marcinu2l/microservices:rental-mongodb
docker push marcinu2l/microservices:rental-monitoring
docker push marcinu2l/microservices:rental-account-service
docker push marcinu2l/microservices:rental-movie-service
docker push marcinu2l/microservices:rental-rent-service
docker push marcinu2l/microservices:rental-auth-service
docker push marcinu2l/microservices:rental-gateway
docker push marcinu2l/microservices:rental-registry
docker push marcinu2l/microservices:rental-config
