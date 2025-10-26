#!/bin/sh
set -e

until netstat -tna | grep 'LISTEN' | grep -q "${POSTGRES_PORT}"; do
    echo "waiting pgsql container..."
    sleep 2
done

echo "pgsql is up, migrating..."
npx drizzle-kit migrate
echo "migrations done"
exec "$@"