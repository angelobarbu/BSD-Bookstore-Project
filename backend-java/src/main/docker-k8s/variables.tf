variable "project_id" {
  description = "The GCP project ID"
  default     = "august-oarlock-443216-a4" # Replace with your actual project ID
}

variable "region" {
  description = "The GCP region to deploy the service"
  default     = "us-central1" # Replace with your desired region
}

variable "spring_datasource_url" {
  description = "The JDBC URL for the database"
  default     = "jdbc:mysql://127.0.0.1:3306/booksia_db" # Using localhost for the Cloud SQL Proxy connection
}

variable "spring_datasource_username" {
  description = "The database username"
  default     = "psbproject53" # Replace with your actual database username
}

variable "spring_datasource_password" {
  description = "The database password"
  default     = "psb_project2024" # Replace with your actual database password
}

variable "cloud_sql_instance" {
  description = "The Cloud SQL instance connection name"
  default     = "august-oarlock-443216-a4:us-central1:project-database"  # Correct format for Cloud SQL instance
}