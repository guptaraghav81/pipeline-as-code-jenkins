<h1 align="center" id="title">PipelineX ~ Jenkins CI/CD Pipeline</h1>

<p id="description">"PipelineX ~ Jenkins CI/CD Pipeline" is a powerful hands-on DevOps project to automate the build and deployment of a web application using Jenkins and Docker. It streamlines code integration, containerization, and deployment—empowering you with industry-grade CI/CD practices and automation using open-source tools.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Jenkins-Automation-red?logo=jenkins&logoColor=white" alt="Jenkins">
  <img src="https://img.shields.io/badge/Docker-Containerized-blue?logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/CI/CD-Pipeline-success" alt="CI/CD">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status">
</p>

---

<h2>🚀 Demo</h2>

🌐 **Live Domain**: [raghav.cloud](http://raghav.cloud) *(Deployed via Docker, DNS managed using AWS Route 53)*  
⚠️ *Note: Jenkins triggers redeployment automatically on every code push to `main`.*
> ⚠️ **Note:** Servers are currently turned off. The application may not be accessible until deployment is reactivated.


---

<h2>📦 Project Structure & Tech Stack</h2>

- **Node.js (Express)** – backend server
- **React.js** – frontend interface
- **MongoDB** – database
- **Docker** – containerization
- **Jenkins** – CI/CD automation
- **DockerHub** – container image registry

---

<h2>🛠️ Jenkins Pipeline Workflow</h2>

This project uses Jenkins for full CI/CD automation:

- Jenkins watches the GitHub repo for new commits
- On each push to the `main` branch:
  - Jenkins checks out the code
  - Installs dependencies
  - Runs unit tests
  - Builds a Docker image
  - Pushes the image to DockerHub
  - Deploys the app using Docker

---

<h2>📝 Jenkinsfile (Pipeline as Code)</h2>

File: `Jenkinsfile`

```groovy
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'raghavgupta/mern-web-app'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials' // Jenkins credential ID
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE ."
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "$DOCKER_CREDENTIALS_ID", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh "docker push $DOCKER_IMAGE"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh "docker run -d -p 5000:5000 $DOCKER_IMAGE"
            }
        }
    }
}
```
<h2>🪛 Setup Instructions</h2>
Install Jenkins (locally or use a Jenkins cloud instance).

Install necessary plugins:<br>
✅ Docker<br>
✅ Git<br>
✅ Pipeline<br>
✅ Blue Ocean (for visual pipeline UI)

Create Jenkins Credentials (username/password for DockerHub).

Create a Freestyle or Multibranch Pipeline pointing to your GitHub repo.

Add the Jenkinsfile to your repo root.

Configure Webhooks to trigger Jenkins build on every push (GitHub → Repo → Settings → Webhooks).

Ensure Docker is installed on the Jenkins host.

<h2>📌 Dockerfile Example (Node App)</h2>
File: `Dockerfile`

```groovy
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "start"]
```
<h2>🧠 Learnings & Takeaway</h2>
By completing this project, you’ll understand:

✅ How Jenkins pipelines automate software build and deployment<br>
✅ Containerizing apps using Docker<br>
✅ Pushing images to DockerHub<br>
✅ Real-world CI/CD processes for deployment readiness
<h2>🧪 Testing Strategy</h2>
Currently, the pipeline runs unit tests before building and deploying.

Enhancements to consider:

🔍 Code Linting using ESLint

🧪 Integration tests with Supertest

🌐 API tests via Postman/Newman

🧪 E2E tests using Cypress

<h2>🌐 Deployment Readiness</h2>
This pipeline currently runs Docker containers locally after building.

Next steps:

🔧 Add deployment to AWS EC2, ECS, DigitalOcean, or Railway

📤 Add SSH-based deployment using plugins like:

ssh-agent and Publish Over SSH

📁 Use Volume Bindings & Env Variables for production-grade deployment

<h2>📁 Folder Structure</h2>
pipeline-as-code-jenkins/<br>
├── client/<br>
│   ├── public/<br>
│   ├── src/<br>
│   │   ├── components/<br>
│   │   ├── pages/<br>
│   │   └── App.js<br>
│   ├── package.json<br>
│   └── ... (other React files)<br>
<br>
├── server/<br>
│   ├── controllers/<br>
│   ├── routes/<br>
│   ├── models/<br>
│   ├── Dockerfile<br>
│   ├── server.js<br>
│   ├── package.json<br>
│   └── ... (other backend files)<br>
<br>
├── .github/<br>
│   └── workflows/<br>
│       └── main.yml<br>
<br>
├── Jenkinsfile<br>
├── README.md<br>
├── .env<br>
└── docker-compose.yml (optional)<br>

<h2>🤝 Contribution Guidelines</h2>
Have ideas or improvements? Feel free to fork this repo, raise issues, or submit pull requests.

<h2>📫 Contact</h2>
For collaboration or queries:<br>
📧 Email: cloud@raghav<br>
🌐 GitHub: @raghavgupta

