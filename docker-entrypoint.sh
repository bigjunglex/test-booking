#!/bin/sh
set -e

until netstat -tna | grep 'LISTEN' | grep -q "${POSTGRES_PORT}"; do
    echo "[PREPARATION]: waiting pgsql container..."
    sleep 2
done

echo "[PREPARATION]: pgsql is up, migrating..."
npx drizzle-kit migrate
exec "$@"