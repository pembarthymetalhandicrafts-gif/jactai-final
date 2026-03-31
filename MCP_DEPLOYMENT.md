# JactAI MCP Deployment Guide

## Run locally

```bash
npm install
npm start
```

Server starts at `http://localhost:3000` and serves both static frontend and MCP endpoints.

## MCP Endpoints

- `GET /mcp/services`
- `GET /mcp/pricing`
- `POST /mcp/contact`
- `GET /.well-known/mcp.json`

## Deploy

Use any Node.js hosting provider (Render, Railway, Fly.io, VPS, etc.) and configure:

- Build command: `npm install`
- Start command: `npm start`
- Node version: 18+

After deployment, verify:

```bash
curl https://your-domain.com/mcp/services
curl https://your-domain.com/mcp/pricing
curl https://your-domain.com/.well-known/mcp.json
curl -X POST https://your-domain.com/mcp/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Demo User","phone":"+919999999999","requirement":"Need website + AI automation"}'
```
