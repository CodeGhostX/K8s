minikube start --nodes 2 --driver=docker
cd k8s
kubectl apply -f persistent-volume.yml -f persistent-volume-claim.yml -f client-deployment.yml -f server-deployment.yml -f postgres-deployment.yml -f client-service.yml -f server-service.yml -f postgres-service.yml -f ingress.yml
minikube image load server
minikube image load client
minikube addons enable ingress
