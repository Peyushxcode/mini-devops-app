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
                sh "docker build -t peyushxcode/mini-devops-app:${BUILD_NUMBER} ."
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push peyushxcode/mini-devops-app:${BUILD_NUMBER}
                        docker logout
                    '''
                }
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
                sh "docker run -d -p 3000:3000 --name mini-test peyushxcode/mini-devops-app:${BUILD_NUMBER}"
            }
        }
    }
}