# Insurance Analytics Platform

A comprehensive, enterprise-grade web application that revolutionizes insurance claims management through intelligent automation, real-time analytics, and advanced machine learning-powered fraud detection. Built for insurance professionals, claims adjusters, and administrators who need efficient, data-driven tools to process claims, assess risk, and make informed decisions.

## 🎯 Overview

The Insurance Analytics Platform addresses the critical challenges facing modern insurance operations: manual claim processing bottlenecks, fraud detection inefficiencies, and lack of real-time insights. This platform provides a complete solution that streamlines the entire claims lifecycle from submission to resolution while leveraging cutting-edge ML algorithms to identify potentially fraudulent claims with high accuracy.

**Key Value Propositions:**
- **Intelligent Claims Processing**: Multi-step guided claim submission with dynamic forms tailored to different insurance types (Auto, Property, Health)
- **Advanced Fraud Detection**: Real-time ML-powered risk assessment with probability scoring, feature contribution analysis, and anomaly detection
- **Comprehensive Admin Workflow**: Streamlined claims review, approval processes, batch operations, and advanced filtering capabilities  
- **Real-time Analytics Dashboard**: Interactive visualizations, trend analysis, and performance metrics for data-driven decision making
- **Role-based Security**: Secure authentication system with granular permissions for administrators and standard users
- **Document Management**: Robust file upload, validation, and storage system with support for multiple file formats

![Dashboard Screenshot](screenshots/home.jpg)

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [🚀 Running the Application](#-running-the-application)
- [⚙️ Development](#️-development)
- [🏗️ Project Structure](#️-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 📝 Intelligent Claims Management
- **Multi-step Guided Submission**: Intuitive wizard-style claim submission with dynamic form fields based on insurance type
- **Insurance Type Support**: Specialized workflows for Auto, Property, and Health insurance with type-specific data collection
- **Document Management**: Secure file upload with validation (images, PDFs up to 5MB), automatic storage, and retrieval
- **Real-time Status Tracking**: Live updates on claim processing status with detailed timeline and notifications
- **Form Validation**: Comprehensive client-side and server-side validation with helpful error messages

### 📊 Advanced Analytics Dashboard
- **Interactive Visualizations**: Real-time charts and graphs using Recharts for claims trends, amounts, and distributions
- **Key Performance Metrics**: Total claims, approval rates, average processing times, and financial summaries
- **Claims Distribution Analysis**: Breakdown by insurance type, status, geographic regions, and time periods
- **Trend Analysis**: Historical data visualization with month-over-month comparisons and growth indicators
- **Risk Assessment Insights**: Visual representation of fraud detection results and risk patterns

### 🔍 ML-Powered Fraud Detection
- **Real-time Risk Scoring**: Instant fraud probability calculation using trained machine learning models
- **Feature Contribution Analysis**: Detailed breakdown of factors contributing to fraud risk assessment
- **Anomaly Detection**: Automatic identification of unusual patterns in claim data and amounts
- **Risk Level Classification**: Clear LOW/MEDIUM/HIGH risk categorization with color-coded indicators
- **Model Transparency**: Explainable AI features showing which claim attributes influenced the fraud score

### 👨‍💼 Comprehensive Admin Workflow
- **Claims Review Interface**: Streamlined table view with filtering, sorting, and pagination for efficient claim processing
- **Batch Operations**: Approve or deny multiple claims simultaneously with audit trail logging
- **Advanced Filtering**: Filter by status, date ranges, claimant names, amounts, and insurance types
- **Role-based Access Control**: Secure admin-only features with granular permission management
- **Audit Trail**: Complete history of all claim actions and status changes for compliance

### 🔐 Security & Authentication
- **Role-based Authentication**: Secure login system with admin and standard user roles
- **Protected Routes**: Route-level security ensuring users can only access authorized features
- **Session Management**: Secure session handling with automatic logout and token refresh
- **Data Protection**: Encrypted data transmission and secure storage of sensitive information

## 🖼️ Screenshots

### Dashboard
![Dashboard](screenshots/dash.jpg)
*Main dashboard showing claims overview and key metrics*

### Claim Submission
![Claim Form](screenshots/claim-s.jpg)
*Multi-step claim submission form with dynamic fields*

### Claims List
![Claims List](screenshots/cl-list.jpg)
*Claims management interface with filtering and sorting*

### Fraud Analysis
![Fraud Analysis](screenshots/fa.jpg)
*ML-powered fraud detection results and risk assessment*

### Admin Panel
![Admin Panel](screenshots/admin.jpg)
*Administrative interface for claims processing*

## 🛠️ Tech Stack

**Frontend Technologies:**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Material-UI (MUI) v6** - Comprehensive React component library with modern design
- **Recharts** - Powerful charting library for interactive data visualizations
- **React Router v6** - Declarative routing for single-page application navigation
- **Axios** - HTTP client for API communication

**Backend & ML Technologies:**
- **Python Flask** - Lightweight web framework for ML model serving
- **Scikit-learn** - Machine learning library for fraud detection models
- **Pandas & NumPy** - Data manipulation and numerical computing
- **Joblib** - Model serialization and loading for production deployment

**Development & Build Tools:**
- **Create React App** - Zero-configuration React development environment
- **Node.js & npm** - JavaScript runtime and package management
- **Concurrently** - Run multiple development servers simultaneously

## 📦 Installation

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download here](https://python.org/)
- **npm** or **yarn** - Comes with Node.js

### Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd insurance-analytics
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install ML server dependencies:
```bash
cd ml_server
pip install -r requirements.txt
```

## 🚀 Running the Application

### Option 1: Run Everything Together (Recommended)

Start both frontend and ML server with a single command:

```bash
npm run start-all
```

This will start:
- Frontend React app on `http://localhost:3000`
- ML Flask server on `http://localhost:5000`

### Option 2: Run Components Separately

**Frontend only:**
```bash
npm start
```

**ML server only:**
```bash
cd ml_server
python app.py
```

### 🌐 Access the Application

- **Main Application**: [http://localhost:3000](http://localhost:3000)
- **ML API Endpoint**: [http://localhost:5000](http://localhost:5000)

### 🔑 Demo Credentials

For testing purposes, use these demo credentials:

- **Admin User**: `admin` / `admin123`
- **Standard User**: `user` / `user123`

## ⚙️ Development

### Available Scripts

- `npm start` - Run frontend in development mode
- `npm test` - Launch test runner
- `npm run build` - Build for production
- `npm run start-dev` - Start both frontend and ML server
- `npm run eject` - Eject from Create React App

## 🏗️ Project Structure

```
insurance-analytics/
├── src/                          # Frontend React application
│   ├── components/               # Reusable UI components
│   │   ├── ClaimForm.tsx        # Multi-step claim submission form
│   │   ├── Dashboard.tsx        # Analytics dashboard with charts
│   │   ├── FraudAnalysis.tsx    # ML fraud detection results display
│   │   ├── ClaimsList.tsx       # Claims management interface
│   │   └── Navbar.tsx           # Navigation and user menu
│   ├── pages/                   # Main page components
│   │   ├── Home.tsx             # Landing page with feature overview
│   │   ├── AdminPage.tsx        # Admin claims management interface
│   │   ├── ClaimDetails.tsx     # Individual claim details and actions
│   │   └── Login.tsx            # Authentication page
│   ├── services/                # API and business logic
│   │   ├── mockApi.ts           # Mock API for development
│   │   ├── api.ts               # Production API client
│   │   └── mlApi.ts             # ML model API integration
│   ├── contexts/                # React context providers
│   │   └── AuthContext.tsx      # Authentication state management
│   └── types/                   # TypeScript type definitions
│       └── index.ts             # Shared interfaces and types
├── ml_server/                   # Python Flask ML backend
│   ├── app.py                   # Flask server with fraud detection API
│   ├── train_model.py           # ML model training script
│   ├── fraud_detection_model.pkl # Trained scikit-learn model
│   ├── scaler.pkl               # Feature scaling model
│   ├── feature_names.pkl        # Model feature names
│   ├── requirements.txt         # Python dependencies
│   └── insurance_claims.csv     # Training data
├── public/                      # Static assets and HTML template
├── screenshots/                 # Application screenshots for documentation
└── package.json                # Node.js dependencies and scripts
```

## 🤝 Contributing

We welcome contributions to improve the Insurance Analytics Platform! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 🐛 Reporting Issues

- Use the [GitHub Issues](https://github.com/Devin-Workshop/insurance-analytics/issues) page
- Provide detailed reproduction steps
- Include screenshots for UI-related issues
- Specify your environment (OS, Node.js version, browser)

### 🔧 Development Setup

1. Follow the installation instructions above
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test thoroughly
4. Run the build command: `npm run build`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to your branch: `git push origin feature/your-feature-name`
7. Open a Pull Request with a clear description

### 📋 Code Guidelines

- Follow existing TypeScript and React patterns
- Use Material-UI components consistently
- Add proper TypeScript types for new features
- Test your changes with both admin and user roles
- Ensure ML model integration works correctly

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Originally written and maintained by contributors and [Devin](https://app.devin.ai), with updates from the core team.*
