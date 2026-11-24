# --- Stage 1: Builder ---
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# --- Stage 2: Production ---
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/index.js ./

EXPOSE 3000
CMD ["node", "index.js"]