# Step 1: Build React App
FROM node:20 AS build
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all source code
COPY . .

# Run build
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx index page
RUN rm -rf ./*

# Copy build output from previous stage
COPY --from=build /app/build .

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
