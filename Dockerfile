FROM node:lts-alpine 

WORKDIR /app

COPY . . 

RUN npm ci
RUN npx drizzle-kit generate
RUN npx tsc 
RUN chmod +x ./docker-entrypoint.sh
ENTRYPOINT [ "./docker-entrypoint.sh" ]