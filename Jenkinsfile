pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'node test.js'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app...'
                sh 'nohup node app.js &'
            }
        }
    }
}
