# CodeCraft – OOP Learning Platform

This repository contains:

- `frontend/` - React + TypeScript + Vite
- `backend/` - Java Spring Boot REST API

## Prerequisites

- Node.js 18+ and npm
- Java 17+

Maven does not need to be installed separately because the backend includes the Maven wrapper.

## Run the project

From the repository root:

```bash
npm install
npm run dev
```

That starts both apps together:

- Frontend: http://localhost:5173
- Backend: http://localhost:8080

## Expected ports

- `5173` for the Vite frontend
- `8080` for the Spring Boot backend

## Environment variable

The frontend uses `VITE_API_URL` and defaults to `http://localhost:8080`. If needed, create `frontend/.env` and override it.

## OOP Lesson Feature

CodeCraft allows users to browse and work through structured OOP lessons in Java.

**Endpoints:**
- `GET /api/lessons` — returns all available lessons
- `GET /api/lessons/{id}` — returns a single lesson by ID

**To use:**
1. Open `http://localhost:5173` in your browser
2. Select a lesson from the home screen
3. Navigate through steps using Previous/Next
4. A completion screen is shown after the final step