FROM maven:3.8.5-openjdk-17 AS build
COPY . /app

FROM openjdk:17.0.1-jdk-slim 
COPY --from=build /target/spring-boot-security-jwt-0.0.1-SNAPSHOT.jar api.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","api.jar"]