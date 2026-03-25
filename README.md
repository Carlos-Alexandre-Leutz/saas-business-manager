
---

### 📂 **Monorepo Architecture & Setup**

This project is a **High-Performance Monorepo** orchestrated by **Turborepo** and managed by **pnpm**. This setup ensures efficient dependency sharing, fast builds via remote caching, and a clean separation between the **BFF (NestJS)** and **Frontend (Next.js)**.

#### **Prerequisites**
* **Node.js**: v18 or higher.
* **pnpm**: v9.0.0 or higher.
  > If not installed, run: `sudo corepack enable`

---

#### **1. Initial Installation**
From the root directory, install all dependencies for every application and package within the workspace:
```bash
pnpm install
```

#### **2. Environment Configuration**
Navigate to the BFF directory to set up your environment variables (required for **Prisma ORM**):
```bash
cd apps/bff
cp .env.example .env
```

#### **3. Running in Development**
To launch the entire ecosystem (BFF + Frontend) simultaneously with a single command:
```bash
pnpm dev
```
> **Note:** Turborepo will handle parallel execution and provide a unified log stream for both services.

---

### 🛠 **Tech Stack**
* **Monorepo Manager**: [Turborepo](https://turbo.build/)
* **Package Manager**: [pnpm](https://pnpm.io/) (Content-addressable storage)
* **Backend (BFF)**: [NestJS](https://nestjs.com/) + [Fastify](https://www.fastify.io/)
* **ORM**: [Prisma](https://www.prisma.io/)
* **Frontend**: [Next.js](https://nextjs.org/)

---

### **Why this setup?**
* **Scalability:** The `pnpm-workspace.yaml` structure allows us to scale to dozens of microservices without duplicating `node_modules`.
* **Reliability:** By using `packageManager` enforcement, we ensure all developers and CI/CD pipelines use the exact same environment.
* **Speed:** Turbo's caching mechanism significantly reduces build times for international-level production deployments.

---
