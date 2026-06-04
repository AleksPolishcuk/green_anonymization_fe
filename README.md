# 🛡️ Clinical Data De-Identification & Synthetic Data Studio
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql)
![AWS](https://img.shields.io/badge/AWS_S3-FF9900?logo=amazonaws)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker)

Enterprise-grade platform for healthcare data anonymization and synthetic data generation.

The platform enables healthcare organizations, researchers, and AI teams to protect sensitive patient information while preserving the analytical value of clinical data.

---

## ✨ Features

### 🔐 Clinical Data De-Identification

* Upload clinical documents or paste raw text
* Automatic PII detection
* Entity review and selection
* Custom anonymization workflow
* Secure document processing

### 🏥 Compliance Frameworks

Support for multiple privacy and healthcare regulations:

* EU GDPR
* UK GDPR
* HIPAA
* Swiss FADP

### 🤖 Synthetic Data Generation

Generate realistic privacy-safe datasets while preserving:

* Clinical context
* Data relationships
* Statistical characteristics
* Document structure

Generate up to **500 synthetic records** from a single source document.

### 📄 Document Management

* Document history
* Search documents by name
* Preview anonymized content
* Update selected entities
* Download processed data

### 📊 Analytics Dashboard

Monitor platform activity through a dedicated analytics dashboard.

- Usage statistics
- Generated document metrics
- Activity overview
- Date range filtering
- Interactive charts and visualizations

### 🔑 Authentication

Multiple authentication providers:

* Google Sign-In
* Microsoft Sign-In
* Magic Link Authentication

### 💳 Subscription Plans

* Free Plan
* Pro Plan
* Feature-based access control

### 🎨 User Experience

- Light and Dark themes
- Responsive design
- Mobile-first experience
- Accessible UI components
- Guided workflow tours
---

## 🚀 Workflow

```text
Select Compliance Framework
            ↓
Upload Document / Paste Text
            ↓
Automatic PII Detection
            ↓
Review & Manage Entities
            ↓
Generate Anonymized Document
            ↓
Generate Synthetic Dataset
            ↓
Download Results
```

---

## 📸 Screenshots

### Landing Page

<p align="center">
  <img
    width="100%"
    alt="Landing Page"
    src="https://github.com/user-attachments/assets/c0b5241d-8e9d-439e-afa5-1ed2ac0e51b9"
  />
</p>

### Prising Page

<p align="center">
  <img
    width="100%"
    alt="Prising Page"
    src="https://github.com/user-attachments/assets/6f27835b-0d8e-40b8-afd5-6659f47a4687"
  />
</p>

### Contact Us & FAQ Page

<p align="center">
  <img
    width="100%"
    alt="Contact Us & FAQ Page"
    src="https://github.com/user-attachments/assets/962e1a7f-d191-4b45-8993-060f4b11284e"
  />
</p>

### Login Page 

<p align="center">
  <img
    width="100%"
    alt="User Account"
    src="https://github.com/user-attachments/assets/1ff47a17-6c36-466a-9544-539d35d1fe2a"
  />
</p>

### Dashboard

<p align="center">
  <img
    width="100%"
    alt="Dashboard"
    src="https://github.com/user-attachments/assets/c11eb54f-08a3-447c-89d8-4fa6cd5499d8"
  />
</p>

### Framework Selection & Document uploading/Text input

<p align="center">
  <img
    width="100%"
    alt="Framework Selection"
    src="https://github.com/user-attachments/assets/080c7d7d-76be-4ed2-83c7-160f6288c2e7"
  />
</p>

### PII Detection

<p align="center">
  <img
    width="100%"
    alt="PII Detection"
    src="https://github.com/user-attachments/assets/511de9e7-f0ed-482e-9eea-2f759e1090cd"
  />
</p>

### Entity Review

<p align="center">
  <img
    width="100%"
    alt="Entity Review"
    src="https://github.com/user-attachments/assets/51630e4a-3d06-44cc-9ab8-fa83eec601fb"
  />
</p>

### Synthetic Data Generation Settings

<p align="center">
  <img
    width="100%"
    alt="Synthetic Data Generation Settings"
    src="https://github.com/user-attachments/assets/02f625f5-61b7-4772-a571-a0479dffaf9e"
  />
</p>

### Synthetic Data Generation Settings Results

<p align="center">
  <img
    width="100%"
    alt="Synthetic Data Generation Settings"
    src="https://github.com/user-attachments/assets/cfb7897b-4578-4afd-9318-868e670a2dd1"
  />
</p>

### User Account

<p align="center">
  <img
    width="100%"
    alt="User Account"
    src="https://github.com/user-attachments/assets/a9845913-4395-4335-a2cb-6ab0db074a35"
  />
</p>

### Workflow Tour 

<p align="center">
  <img
    width="100%"
    alt="User Account"
    src="https://github.com/user-attachments/assets/16e5693b-090c-4fa9-821e-caad527bfc8c"
  />
</p>




---

## 🏗️ Architecture

```text
Frontend (React + TypeScript)
                │
                ▼
            REST API
                │
                ▼
       Backend (NestJS)
                │
      ┌─────────┴─────────┐
      ▼                   ▼
    MySQL              AWS S3
```

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Redux Toolkit
* Material UI (MUI)
* React Router
* Axios
* i18next
* Vite

### Backend

* NestJS
* TypeScript
* TypeORM
* MySQL
* JWT Authentication

### Infrastructure

* Docker
* AWS S3
* Heroku

---

## 📂 Project Structure

```text
src/
├── assets/         # Images, icons and static resources
├── components/     # Reusable UI components
├── constants/      # Application constants and configuration
├── Layouts/        # Application layouts
├── pages/          # Route pages
├── router/         # Routing configuration
├── services/       # API clients and business services
├── shared/         # Shared hooks, utilities and UI
├── store/          # Redux Toolkit state management
├── App.tsx
└── main.tsx
```

---

## 🌟 Highlights

- Real-world healthcare use case
- EU GDPR, UK GDPR, Swiss FADP and HIPAA compliance workflows
- Dynamic PII entity management
- Synthetic data generation engine
- Multi-provider authentication
- Light & Dark theme support
- Guided user onboarding
- Responsive SaaS interface
- Secure cloud document storage

---

## 🔧 Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Future Improvements

* Batch document processing
* Advanced filtering and search
* Audit logs
* Team workspaces
* Analytics dashboard
* Additional export formats

---

## 📄 License

ZenBit Tech
