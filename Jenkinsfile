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
                sh 'docker build -t mini-devops-app .'
            }
        }

        stage('List Images'){
            steps{
                sh 'docker images'
            }
        }
    }
}