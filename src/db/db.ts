import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
process.loadEnvFile();


const port = process.env.POSTGRES_PORT;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD; 
const db_name = process.env.POSTGRES_DB;

export const dbUrl = `postgres://${user}:${password}@postgres:${port}/${db_name}`;
export const db = drizzle(dbUrl, { schema });