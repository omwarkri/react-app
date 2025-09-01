# Step 1: Build React App
COPY package*.json ./
RUN npm install
COPY . .


# Step 2: Serve with nginx
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
