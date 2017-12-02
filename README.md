# movie-rental-microservices
# 
# This is an example of Java-Based Microservices with Spring Boot, Spring Cloud and Docker. Each of the services run with separate, dedicated Mongo database.
# 
# Tech stack used:
- Java EE 8
- Angular 2
- Microservice Architecture Pattern
- Spring Boot
- Spring Cloud
- Spring Security / Auth0 / JWT 
- Spring Data JPA
- Docker
- REST
- Json
- Maven

# PREREQUISITES:
1. Install Docker and Docker Compose
2. Export environment variables: CONFIG_SERVICE_PASSWORD, ACCOUNT_SERVICE_PASSWORD, MOVIE_SERVICE_PASSWORD, RENT_SERVICE_PASSWORD, MONGODB_PASSWORD

# RUNNING:
1. Run makedocker_local.sh
2. Run docker-compose (docker-compose up > logz.log &)
3. See logs (tail -f logz.log)
4. Once all services are up and running go to localhost and create an account ;)

# IMPORTANT ENDPOINTS:
- http://localhost:80 - Gateway
- http://localhost:8761 - Eureka Dashboard
- http://localhost:9000/hystrix - Hystrix Dashboard (paste Turbine stream link on the form)
- http://localhost:8989 - Turbine stream (source for the Hystrix Dashboard)
- http://localhost:15672 - RabbitMq management (default login/password: guest/guest)

# CONTACT:
marcinu2k@gmail.com
