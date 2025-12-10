pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel_token')
    }

    stages {
        stage('Check User') {
            steps {
                bat 'echo USER: & whoami'
                bat 'echo HOME: %USERPROFILE%'
            }
        }
        stage('Install'){
            steps {
                bat 'npm install'
            }
        }
        stage('Test'){
            steps {
                echo 'Skipping tests - no test script are available.'
            }
        }
        stage('Build'){
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy'){
            steps {
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }
}
