process.loadEnvFile();

const port = process.env.POSTGRES_PORT;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD; 
const db_name = process.env.POSTGRES_DB;

export const DB_URL = `postgres://${user}:${password}@postgres:${port}/${db_name}`;
export const PORT = process.env.APP_PORT ?? 3000;