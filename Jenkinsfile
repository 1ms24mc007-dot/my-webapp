pipeline {
    agent any
    environment {
        DOCKERHUB_CRED=credentials('dockerhub')
        IMAGE_NAME="anant1408/my-webapp"
    }
    
    stages {
        stage('checkout') {
            steps {
                git url:'git@github.com:1ms24mc007-dot/my-webapp.git', branch:'master' 
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage=docker.build("${IMAGE_NAME}:latest")
                }
            }
        }
        
        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/','dockerhub') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
    post {
        success {
            echo "Pipeline Successful"
        }
        failure {
            echo "Pipeline Failed"
        }
        always {
            echo "Cleaning Up WorkSpace"
            deleteDir()
        }
    }
}
