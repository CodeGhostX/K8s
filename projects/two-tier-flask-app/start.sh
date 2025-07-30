cd k8s
kind create cluster --config cluster.yml
kind load docker-image flask-app
kubectl apply -f persistent-volume.yml -f persistent-volume-claim.yml -f flask-app-deployment.yml -f mysql-deployment.yml -f flask-app-service.yml -f mysql-service.yml
sleep 30
kubectl exec -it $(kubectl get pod -l app=mysql -o jsonpath='{.items[0].metadata.name}') -- \
  mysql -u admin -ppassword myDb -e "CREATE TABLE IF NOT EXISTS messages (id INT AUTO_INCREMENT PRIMARY KEY, message TEXT);"