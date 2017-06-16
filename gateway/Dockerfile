FROM java:8-jre
MAINTAINER Marcin Pisera <marcinu2k@gmail.com>

ADD ./target/gateway.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/gateway.jar"]

EXPOSE 6300