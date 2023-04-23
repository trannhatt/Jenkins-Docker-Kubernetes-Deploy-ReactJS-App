pipeline {

  environment {
    dockerimagename = "transachnhat/react-app"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Check Source') {
      steps {
        git 'https://github.com/trannhatt/projectSoft-tech.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhub-credential'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

//     stage('Deploying React.js container to Kubernetes') {
//       steps {
//         script {
//           kubernetesDeploy (configs: 'deployment-service.yml',kubeconfigId: 'kubeconfig')
//         }
//       }
//     }

  }

}
