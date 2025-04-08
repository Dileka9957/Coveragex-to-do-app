# Step 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the static files using Nginx
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]