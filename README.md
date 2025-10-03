# Budget App (Mint-lite)

A mono-repo personal finance app with:

- **Backend**: Node.js + Express + Postgres
- **Frontend**: Next.js

## Structure
- `backend/` → API + auth + database
- `frontend/` → Next.js UI

## Dev Setup
1. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install

budget-app/
│
├── backend/                 # Node.js Express app
│   ├── package.json
│   ├── server.js
│   ├── .env                 # backend environment variables
│   ├── .gitignore
│   └── (node_modules/)
│
├── frontend/                # Next.js app
│   ├── package.json
│   ├── next.config.js
│   ├── pages/
│   ├── .env.local           # frontend environment variables
│   ├── .gitignore
│   └── (node_modules/)
│
├── .gitignore               # root-level ignore
├── README.md
└── package.json (optional)  # only if you want root npm scripts to orchestrate both


RUN BACKEND
npm start

RUN FRONTEND
npm run dev



