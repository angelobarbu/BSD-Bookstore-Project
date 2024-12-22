output "service_ip" {
  value       = kubernetes_service.backend.status[0].load_balancer.ingress[0].ip
  description = "The public IP of the backend service"
}