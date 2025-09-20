# -gripinvest_winter_internship_backend 
A Dockerized backend API for an investment platform that allows users to invest in financial products, view portfolios, reset password ,add balance via verify OTP

**#Tech Stack**
Backend: Node.js, Express, JWT Authentication, MySQL ORM (Sequelize / Knex / Raw SQL)
Frontend: React + Axios
Database: MongoDb
Containerization: Docker + Docker Compose

AI Integration: GPT model for recommendations & summaries
## Table of Contents
1. Overview
2. Features
3. Requirements
4. Setup
5. Usage
6. API Reference
7. Postman Collection
8. Docker Setup


    ## Features
- User signup and login with JWT authentication
- Invest in financial products with balance checks
- Dockerized backend and database setup
- Postman collection for testing APIs
- reset password using otp

## Requirements
- Node.js >= 18
- MySQL >= 8
- Docker & Docker Compose
- Postman (for API testing)

  ## Installation
- Cloning the repository
- Installing dependencies
- Docker & Docker Compose
- docker-compose up --build
- To execute docker compose up --build successfully, the following prerequisites must be met:
- Docker Engine must be installed and running on your system.
  Docker Compose must be installed. If you are using Docker Desktop, Docker Compose is included. Otherwise, you may need to install it separately.

  
- ## Postman Collection
- File path: postman/GripInvest_Postman_Collection.json
- Import into Postman to test all API endpoints
- Use JWT for protected routes
