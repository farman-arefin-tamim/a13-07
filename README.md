# 👥 KeenKeeper - Relationship Manager

[![GitHub repo size](https://img.shields.io/github/repo-size/farman-arefin-tamim/a13-07?style=flat-square)](https://github.com/farman-arefin-tamim/a13-07)
[![GitHub language count](https://img.shields.io/github/languages/count/farman-arefin-tamim/a13-07?style=flat-square)](https://github.com/farman-arefin-tamim/a13-07)
[![GitHub top language](https://img.shields.io/github/languages/top/farman-arefin-tamim/a13-07?style=flat-square)](https://github.com/farman-arefin-tamim/a13-07)
[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://a13-07.vercel.app)

**KeenKeeper** is a smart and elegant web application designed to help you track and nurture your meaningful relationships. It allows you to log different types of interactions (Calls, Texts, Video chats) with your friends and provides a beautiful dashboard to visualize your communication patterns.

🔗 **Live Demo:** [a13-07.vercel.app](https://a13-07.vercel.app)

---

## ✨ Key Features

- **Interaction Logging**: Easily record different types of interactions—Calls, Texts, and Video chats—with your friends.
- **Interactive Dashboard**: Get a clear overview of your communication patterns with visual analytics and pie charts.
- **Advanced Filtering**: Filter your timeline to see only specific types of interactions (Call, Text, or Video).
- **Fully Responsive Design**: A seamless experience on any device, built with Tailwind CSS and DaisyUI.
- **Real-time Updates**: All your interactions are saved and displayed in real-time.

---

## 🛠️ Built With

- **React.js** (with Vite) - A JavaScript library for building user interfaces.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **DaisyUI** - A plugin for Tailwind CSS that adds beautiful, accessible component classes.
- **Recharts** - A composable charting library for creating interactive data visualizations.
- **React Router** - For seamless client-side routing.

---

## 🚀 DevOps & CI/CD Pipeline with AWS

This project implements a fully automated, production-grade CI/CD pipeline on **AWS** to ensure smooth and reliable deployments.

### 🏗️ Pipeline Architecture

The pipeline automates the entire process from code commit to global content delivery. Every time you push code to the `main` branch on GitHub, the following workflow is triggered:

1.  **Source (GitHub)**: AWS CodePipeline detects the new commit in your GitHub repository and pulls the latest source code.
2.  **Build (AWS CodeBuild)**: The source code is passed to AWS CodeBuild, which installs dependencies and builds the optimized production build of the React application.
3.  **Deploy (AWS CodeDeploy)**: The build artifacts are then deployed to an **AWS S3** bucket configured for static website hosting.
4.  **Distribute (Amazon CloudFront)**: Finally, **Amazon CloudFront**, a global Content Delivery Network (CDN), serves the content from the S3 bucket to users worldwide with low latency and high transfer speeds.

This architecture ensures that your users always see the latest version of the application with optimal performance, no matter where they are located.

### 📊 Architecture Diagram

> ** DevOps Workflow Diagram here:**
>
> 
> ```markdown
> ![AWS CI/CD Pipeline Architecture](./src/assets/AWS%20codepipeline.drawio.png)
> ```
>

