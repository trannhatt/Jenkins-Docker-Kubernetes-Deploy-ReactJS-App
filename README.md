# Project deploy an ReactJS Application to Kubernetes Cluster using Jenkins CI/CD Pipeline

<h6>This project  I use Jenkins, Docker, and Kubernetes to deploy a ReactJS application in this project. </h6>
<img src="https://webexample75.files.wordpress.com/2023/04/architecture-v0.2.png" height="auto" width="100%" />

## Summary
- I push the code to GitHub and then build a Jenkins pipeline. Jenkins pulls the code from GitHub, automates the image build, and pushes the image to DockerHub using the Dockerfile I created.
- I build a Kubernetes cluster using Minikube. It takes the newly created image from DockerHub and deploys it to the cluster.
- I create a Kubernetes cluster consisting of one node with a namespace called 'react-app', in which I deploy deployments and services. I create three pods and use the service load balancer to access the website.

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
