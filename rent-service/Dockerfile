FROM java:8-jre
MAINTAINER Marcin Pisera <marcinu2k@gmail.com>

ADD ./target/rent-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/rent-service.jar"]

EXPOSE 7200