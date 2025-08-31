# ---------- build ----------
FROM node:20-alpine AS build

# Needed tools
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy lockfiles & install deps
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build
RUN npm run build && npm cache clean --force


# ---------- runtime ----------
FROM node:20-alpine AS runtime

WORKDIR /app

# Copy only built output + node_modules (bez devDependencies)
COPY --from=build /app/.output .output
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json .

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]