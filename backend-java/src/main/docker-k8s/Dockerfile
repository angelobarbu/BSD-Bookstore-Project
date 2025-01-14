FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/backend-java-3.4.0.jar backend-java.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend-java.jar"]
