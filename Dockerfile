# Build image for DigitalOcean App Platform (static site; output_dir /app/public)
FROM node:18
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN npm run build
