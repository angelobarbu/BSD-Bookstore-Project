# main.tf

terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = ">= 2.0.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_namespace" "auth_microservice" {
  metadata {
    name = "auth-microservice"
  }
}

resource "kubernetes_deployment" "auth_microservice" {
  metadata {
    name = "auth-microservice"
    namespace = kubernetes_namespace.auth_microservice.metadata.0.name
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "auth-microservice"
      }
    }

    template {
      metadata {
        labels = {
          app = "auth-microservice"
        }
      }

      spec {
        container {
          image = "2y6cx0/auth-microservice:latest"
          name  = "auth-microservice"
          port {
            container_port = 5000
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "auth_microservice" {
  metadata {
    name = "auth-microservice"
    namespace = kubernetes_namespace.auth_microservice.metadata.0.name
  }

  spec {
    selector = {
      app = "auth-microservice"
    }
    type = "NodePort"
    port {
      node_port   = 30201
      port        = 5000
      target_port = 5000
    }
  }
}