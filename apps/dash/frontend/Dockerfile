FROM node:lts-alpine as builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
#RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 && chown nextjs:nodejs /app
#USER nextjs

# Install dependencies with yarn 4 from the workspace
COPY . .
RUN yarn install --immutable
RUN yarn nx run dash-frontend:build:production


# Production image, copy all the files and run next
FROM node:lts-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# USER nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
# COPY --from=builder --chown=nextjs:nodejs /app/dist/apps/dash/frontend .
COPY --from=builder /app/dist/apps/dash/frontend .
RUN yarn install


EXPOSE 4238

ENV PORT 4238

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
