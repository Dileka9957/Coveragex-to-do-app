# CoverageX TaskApp

A full-stack task management application built with:

- **Frontend**: React + Vite (`coveragex-taskapp-frontend`)
- **Backend**: Spring Boot (`coveragex-taskapp-backend`)
- **Database**: PostgreSQL
- **Containerized** using Docker Compose

## Prerequisites
- Docker & Docker Compose installed

## Getting Started

### 1. Clone the repository

git clone https://github.com/Dileka9957/Coveragex-to-do-app.git
cd Coveragex-to-do-app

### 2. Build and run the application

docker-compose up --build

This will:
Build the frontend and backend apps
Start the PostgreSQL database
Expose the services

App URLs
Frontend: http://localhost:5173
Backend API: http://localhost:8080
PostgreSQL: localhost:5432 (username: postgres, password: root)