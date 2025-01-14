provider "google" {
  project = var.project_id
  region  = var.region
}

# Retrieve Google Cloud client config
data "google_client_config" "default" {}

# GKE Cluster
resource "google_container_cluster" "primary" {
  name               = "backend-cluster"
  location           = var.region
  initial_node_count = 1
  deletion_protection = false

  node_config {
    machine_type = "e2-medium"
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
    disk_size_gb = 10
    service_account = "1029855694454-compute@developer.gserviceaccount.com"
  }

  master_auth {
    client_certificate_config {
      issue_client_certificate = true
    }
  }
}

# Kubernetes Provider
provider "kubernetes" {
  host                   = "https://${google_container_cluster.primary.endpoint}"
  token                  = data.google_client_config.default.access_token
  cluster_ca_certificate = base64decode(google_container_cluster.primary.master_auth.0.cluster_ca_certificate)
}

# Kubernetes Namespace
resource "kubernetes_namespace" "backend_namespace" {
  metadata {
    name = "backend-namespace"
  }
}

# Kubernetes Deployment
resource "kubernetes_deployment" "backend" {
  metadata {
    name      = "backend-deployment"
    namespace = kubernetes_namespace.backend_namespace.metadata[0].name
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "backend"
      }
    }

    template {
      metadata {
        labels = {
          app = "backend"
        }
      }

      spec {
        container {
          image = "us-central1-docker.pkg.dev/${var.project_id}/docker-repo/backend-java:1.1.0"
          name  = "backend-container"

          port {
            container_port = 8080
          }

          # Environment variables for connecting to Cloud SQL with public IP
          env {
            name  = "SPRING_DATASOURCE_URL"
            value = "jdbc:mysql://34.135.36.156:3306/booksia_db"  # Use the public IP here
          }

          env {
            name  = "SPRING_DATASOURCE_USERNAME"
            value = var.spring_datasource_username
          }

          env {
            name  = "SPRING_DATASOURCE_PASSWORD"
            value = var.spring_datasource_password
          }

          resources {
            limits = {
              cpu    = "1000m"
              memory = "2Gi"
            }
            requests = {
              cpu    = "250m"
              memory = "512Mi"
            }
          }
        }
      }
    }
  }
}

# Kubernetes Service
resource "kubernetes_service" "backend" {
  metadata {
    name      = "backend-service"
    namespace = kubernetes_namespace.backend_namespace.metadata[0].name
  }

  spec {
    selector = {
      app = "backend"
    }

    type = "LoadBalancer"

    port {
      protocol    = "TCP"
      port        = 80
      target_port = 8080
    }
  }
}
