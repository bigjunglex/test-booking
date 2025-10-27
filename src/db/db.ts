import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema.js';
import { DB_URL } from '../constants.js';

export const db = drizzle(DB_URL, { schema });