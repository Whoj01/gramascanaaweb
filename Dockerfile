# Build em estágios: a imagem final não carrega toolchain nem código-fonte.
FROM --platform=linux/amd64 node:18.18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM --platform=linux/amd64 node:18.18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Precisam existir no build: o Next embute valores NEXT_PUBLIC_* no bundle.
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_INDEXAVEL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_INDEXAVEL=$NEXT_PUBLIC_INDEXAVEL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM --platform=linux/amd64 node:18.18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]
