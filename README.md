# Minimal React + Spring Boot Monorepo

This repository contains:

- `frontend/` - React + TypeScript + Vite
- `backend/` - Java Spring Boot REST API

The project is intentionally minimal and only demonstrates frontend to backend communication in one repository.

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

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:8080](http://localhost:8080)

## How it works

- The frontend shows one `Call Backend` button.
- Clicking the button sends a `GET` request to `/api/hello`.
- The backend responds with:

```json
{
  "message": "Hello from Spring Boot"
}
```

## Environment variable

The frontend uses `VITE_API_URL` and defaults to:

```text
http://localhost:8080
```

If needed, create `frontend/.env` and override it:

```text
VITE_API_URL=http://localhost:8080
```

## Expected ports

- `5173` for the Vite frontend
- `8080` for the Spring Boot backend
