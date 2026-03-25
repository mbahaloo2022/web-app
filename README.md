# Psychologist CV & Resume Website

A full-stack CV website with:

- **NestJS backend** (`/backend`) for authentication and secure resume data.
- **Next.js frontend** (`/frontend`) for a modern, beautiful portfolio UI.

## Test user

- **Username:** `user`
- **Password:** `parvaneh@1234*mohsen`

## Run locally

### 1) Backend

```bash
cd backend
npm install
npm run start:dev
```

Backend runs at `http://localhost:4000` with API routes under `/api`.

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000` and expects backend at `http://localhost:4000/api`.

You can override API URL with:

```bash
NEXT_PUBLIC_API_BASE=http://localhost:4000/api
```


## Run with Docker Compose

```bash
docker compose up --build
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:4000/api`

To stop containers:

```bash
docker compose down
```
