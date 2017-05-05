FROM java:8-jre
MAINTAINER Marcin Pisera <marcinu2k@gmail.com>

ADD ./target/auth-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/auth-service.jar"]

EXPOSE 5000