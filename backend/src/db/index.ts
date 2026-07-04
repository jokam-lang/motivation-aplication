import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import * as schema from './schema';

// Path to the SQLite database file
const DB_FILE = process.env.DATABASE_URL || 'sqlite.db';

// Initialize the native Bun SQLite database connection
const sqlite = new Database(DB_FILE);

// Initialize Drizzle ORM
export const db = drizzle(sqlite, { schema });

console.log(`Database connected successfully to ${DB_FILE}`);
