
# SaaS Business Manager

A modern SaaS platform architecture designed to simulate real-world production environments.

This project focuses on scalability, separation of concerns, and best practices used in professional software development.

---

## 📌 Project Goal

The goal of this project is to build a complete SaaS application for small business management, including features such as:

* User management
* Product management
* Order management
* Dashboard and analytics

It also serves as a portfolio project to demonstrate real-world architecture patterns.

---

---

### 🚀 Management & Roadmap

This is a **SaaS** developed to showcase my skills as both **Product Owner** and **Developer**. The entire agile workflow is managed using **GitHub Projects**.

📌 **Project Backlog:** [View Tasks & Progress](https://github.com/users/Carlos-Alexandre-Leutz/projects/2/views/1)

---

## 🚧 Project Status

In development

---

## 🏗️ Project Structure

```
saas-platform/

apps/
   web/
   bff/

services/
   api/

infra/
docs/
```

---

## 📦 Applications

### apps/web (Frontend)

The frontend application built with modern web technologies.

**Tech Stack**

* Next.js
* React
* TypeScript
* Tailwind CSS

**Responsibilities**

* User interface
* Dashboard
* Forms and management screens
* Communication with BFF via API

---

### apps/bff (Backend for Frontend)

The BFF acts as an intermediary layer between the frontend and backend services.

**Tech Stack**

* Node.js
* NestJS

**Responsibilities**

* Adapt backend data for frontend needs
* Centralize authentication and authorization
* Aggregate data from multiple services
* Reduce direct frontend-backend coupling
* Expose optimized endpoints for UI

**Flow**

```
Frontend → BFF → Backend API
```

---

## 🔧 Services

### services/api (Core Backend)

Main backend service responsible for business logic and data management.

**Tech Stack**

* Node.js
* NestJS
* PostgreSQL
* Prisma ORM

**Responsibilities**

* Business logic
* Data persistence
* User management
* Product management
* Order processing

---

## ⚙️ Infrastructure

The `infra` folder contains infrastructure-related configurations.

**Examples**

* Docker
* Docker Compose
* Environment configuration
* CI/CD pipelines
* Deployment scripts

---

## 📚 Documentation

The `docs` folder contains technical documentation such as:

* Architecture diagrams
* API documentation
* Architecture decisions (ADR)
* System flows

---

## 🧠 System Architecture

```
Frontend (Next.js)
        │
        ▼
BFF (NestJS)
        │
        ▼
Backend API (NestJS)
        │
        ▼
PostgreSQL Database
```

---

## 🌐 Local Development URLs

### Frontend

```
http://localhost:3000
```

User interface, dashboards, and management features.

---

### BFF API

```
http://localhost:3001
```

Handles:

* API requests from frontend
* Authentication
* Data aggregation
* Communication with backend services

---

### API Documentation (Swagger)

```
http://localhost:3001/docs
```

Allows developers to:

* Explore endpoints
* Test requests
* View schemas
* Understand API behavior

---

## ▶️ Getting Started

```bash
# install dependencies
npm install

# run frontend
cd apps/web
npm run dev

# run BFF
cd apps/bff
npm run dev
```

---

## 💡 Architecture Principles

This project follows key software engineering principles:

* Separation of concerns
* Scalability
* Maintainability
* Decoupled architecture
* Real-world SaaS patterns

---

## 📈 Why This Project Matters

This project was designed to reflect how modern SaaS applications are built in production environments, making it a strong portfolio piece for developers aiming to work in professional teams.

---