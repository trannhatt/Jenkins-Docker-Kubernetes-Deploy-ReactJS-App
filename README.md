# Project-Jenkins-Docker-Kubernetes-Deploy-ReactJS-App

<h6>This project I using Jenkins, Docker and Kubernetes to deploy a reactjs application. Here is the architecture of what I will be created</h6>
<img src="https://webexample75.files.wordpress.com/2023/04/architecture-v0.2.png" height="auto" width="100%" />

## Summary
- Code pushed to github, then I will build jenkins pineline, jenkins will pull code from github and automate build image and then push that image to dockerhub using dockerfile I created.
- I build a kubernetes cluster using minikube, it will take the newly created image from dockerhub and deploy to the cluster.
- The Kubernetes cluster I created consists of 1 node with a namespace called react-app, in which deploy deployments and services, 3 pods are created, use the service load balancer to access the website.

## Set up requirements
### Jenkins
- **[Install Jenkins](https://www.jenkins.io/doc/book/installing/docker/)** I will install in docker (running container).
- **[Install Plugin in Jenkins]()** I install Docker Pipeline Plugin.
- **[Add dockerhub-credential and github-credential]()** in Manage Credentials.
### Kubernetes
- **[Install Minikube](https://www.jenkins.io/doc/book/installing/docker/)** I install in Ubuntu WSL.
- **[Install Kubectl](https://www.jenkins.io/doc/book/installing/docker/)** I install in Ubuntu WSL.
### Docker
- **[Install Docker](https://docs.docker.com/desktop/install/windows-install/)** I install in Windows and using Ubuntu WSL connect.

## Configuration
### Create a Dockerfile
- Dockerfile
### Create a Jenkinsfile
- Jenkinsfile
- The Jenkinsfile will create a Jenkins Pipeline with four stages:
  - Checkout Source.
  - Build image.
  - Pushing Image.
### Create a Kubernetes Deployment and service YAML file
- deployment-service.yml 

### CICD pineline
- Push full file and source reactjs to github.
- Setup Multi-branch Pipel.ine
  - add github-credential.
  - add HTTP repo link github.
### Scan Pepository Now and Build Now

## Kubernetes command
Start your local Kubernetes cluster with minikube:
```properties
minikube start
```
Create a new namespace react-app:
```properties
kubectl create namespace react-app
```  
Set react-app as the default context:
```properties
kubectl config set-context --current --namespace=react-app
```  
Deploy the application:
```properties
kubectl apply -f deployment-service.yml
```  
Monitor the status of the deployment:
```properties
kubectl get deployment -w
``` 
```properties
kubectl get services -w
``` 
Run application:
```properties
minikube service services -n react-app
``` 
## NOTE Command 
Get the minikube IP address:
```properties
minikube ip
``` 
Get logs of deployment: 
```properties
kubectl logs deployment/deployments
``` 
Get list services:
```properties
kubectl get services -o wide
``` 
Delete service:
```properties
kubectl delete service services
``` 
List pods:
```properties
kubectl get pods --all-namespaces
``` 
List full:
```properties
kubectl get all -A
``` 
## Destroy project
Delete Kubernetes Namespace:
```properties
kubectl delete namespace react-app
``` 
Deletes a local Kubernetes cluster:
```properties
minikube delete
``` 
