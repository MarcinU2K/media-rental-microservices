FROM java:8-jre
MAINTAINER Marcin Pisera <marcinu2k@gmail.com>

ADD ./target/movie-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/movie-service.jar"]

EXPOSE 7100