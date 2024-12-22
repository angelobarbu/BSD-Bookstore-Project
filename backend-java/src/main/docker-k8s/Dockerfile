FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/backend-java.jar backend-java.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend-java.jar"]
