pipeline{
    agent any

    stages{
        stage('Checkout SCM'){
            steps{
                checkout scm 
            }
        }

        stage('Build Docker Image'){
            steps{
                sh "docker build -t mini-devops-app:${BUILD_NUMBER} ."
            }
        }

        stage('List Images'){
            steps{
                sh 'docker images'
            }
        }

        stage('Deploy'){
            steps{
                sh 'docker stop mini-test || true'
                sh 'docker rm -f mini-test || true'
                sh "docker run -d -p 3000:3000 --name mini-test mini-devops-app:${BUILD_NUMBER}"
            }
        }
    }
}