<h1 align="center">
  <img src="https://webexample75.files.wordpress.com/2023/04/architecture-v0.2.png" width="100%" /><br/>
Triển khai ứng dụng ReactJS lên Kubernetes Cluster sử dụng Jenkins CI/CD Pipeline
</h1>


<p align="center"><br/>Tập trung vào việc ứng dụng tool <b>DevOps</b>.</p>

<p align="center">
  <a href="https://kubernetes.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Kubernetes-326CE5?logo=kubernetes&logoColor=white" alt="Kubernetes" />
  </a>&nbsp;
  <a href="https://www.jenkins.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Jenkins-D24939?logo=jenkins&logoColor=white" alt="Jenkins" />
  </a>&nbsp;
  <a href="https://www.docker.com/" target="_blank">
    <img src="https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white" alt="Docker" />
  </a>&nbsp;
</p>

<p align="center">
    <b>Ngôn ngữ được dùng</b>
    <a href="README.md">Tiếng việt</a>
</p>

# Tổng quan dự án
Mã nguồn sẽ được Dev đẩy lên GitHub và sau đó chúng ta sẽ xây dựng một Jenkins Pipeline. Jenkins Server chịu trách nhiệm kéo mã nguồn từ GitHub, tự động xây dựng Image và đẩy Image lên DockerHub bằng Dockerfile được tạo. Tiếp theo, xây dựng một Kubernetes cluster bằng Minikube, nó sẽ lấy Image mới tạo từ DockerHub và triển khai nó lên cluster.

>Chúng ta sẽ tạo một Kubernetes cluster bao gồm một node với một name-space gọi là 'react-app', trong đó chúng ta sẽ triển khai deployments và services, tạo 3 pods và sử dụng service load balancer để truy cập trang web.

# Yêu cầu thiết lập
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
<!-- ### Scan Pepository Now and Build Now

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
```  -->
