cd k8s
kind create cluster --config cluster.yml
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm install nginx-ingress ingress-nginx/ingress-nginx --namespace ingress-nginx --create-namespace
kind load docker-image client
kind load docker-image server
kubectl apply -f persistent-volume.yml -f persistent-volume-claim.yml -f client-deployment.yml -f server-deployment.yml -f postgres-deployment.yml -f client-service.yml -f server-service.yml -f postgres-service.yml -f ingress.yml
