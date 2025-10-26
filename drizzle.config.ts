import { defineConfig } from 'drizzle-kit';
import { dbUrl } from './src/db/db';

export default defineConfig({
    out: './src/db/drizzle',
    schema: './src/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: dbUrl
    },
})