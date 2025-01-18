variable "project_id" {
  description = "The GCP project ID"
}

variable "region" {
  default = "us-central1"
  description = "The GCP region to deploy the service"
}

variable "spring_datasource_url" {
  description = "The JDBC URL for the database"
}

variable "spring_datasource_username" {
  description = "The database username"
}

variable "spring_datasource_password" {
  description = "The database password"
}