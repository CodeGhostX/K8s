cd k8s
kind create cluster --config cluster.yml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.13.0/deploy/static/provider/cloud/deploy.yaml
kind load docker-image client
kind load docker-image server
sleep 30
kubectl apply -f persistent-volume.yml -f persistent-volume-claim.yml -f client-deployment.yml -f server-deployment.yml -f postgres-deployment.yml -f client-service.yml -f server-service.yml -f postgres-service.yml -f ingress.yml
