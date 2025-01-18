provider "google" {
  project = var.project_id
  region  = var.region
}

# GKE Cluster
resource "google_container_cluster" "primary" {
  name               = "backend-cluster"
  location           = var.region
  initial_node_count = 3

  node_config {
    machine_type = "e2-medium"
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
}

# Kubernetes Provider
provider "kubernetes" {
  host                   = google_container_cluster.primary.endpoint
  token                  = data.google_client_config.default.access_token
  cluster_ca_certificate = base64decode(google_container_cluster.primary.master_auth[0].cluster_ca_certificate)
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
    replicas = 2

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
          image = "gcr.io/${var.project_id}/backend-java:latest" # Replace with your Docker image
          name  = "backend-container"

          ports {
            container_port = 8080
          }

          env {
            name  = "SPRING_DATASOURCE_URL"
            value = var.spring_datasource_url
          }

          env {
            name  = "SPRING_DATASOURCE_USERNAME"
            value = var.spring_datasource_username
          }

          env {
            name  = "SPRING_DATASOURCE_PASSWORD"
            value = var.spring_datasource_password
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
      protocol = "TCP"
      port     = 80
      target_port = 8080
    }
  }
}
