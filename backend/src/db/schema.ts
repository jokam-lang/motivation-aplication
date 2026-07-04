import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

// 1. AI Smart Scheduler & Tasks Table
export const tasks = sqliteTable('tasks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  type: text('type').$type<'static' | 'dynamic'>().notNull().default('static'),
  startTime: text('start_time'), // ISO Timestamp String
  endTime: text('end_time'),     // ISO Timestamp String
  context: text('context'),       // Context, e.g. "cooking", "coding"
  motivationMessage: text('motivation_message'), // AI Context-Aware Motivation Phrase
  isCompleted: integer('is_completed', { mode: 'boolean' }).notNull().default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// 2. IELTS Anki-style Flashcards Table
export const flashcards = sqliteTable('flashcards', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  front: text('front').notNull(), // Vocabulary or Question
  back: text('back').notNull(),   // Definition or Answer
  interval: integer('interval').notNull().default(0),      // Spaced repetition interval in days
  repetition: integer('repetition').notNull().default(0),  // Count of successful consecutive reviews
  efactor: real('efactor').notNull().default(2.5),         // Easiness factor (SuperMemo-2 SM2)
  nextReviewDate: integer('next_review_date', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// 3. Project & Habit Tracker Table
export const habits = sqliteTable('habits', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(), // Habit name, e.g., "Unity Game Development"
  targetDurationMinutes: integer('target_duration_minutes').notNull().default(60), // Target duration
  actualDurationMinutes: integer('actual_duration_minutes').notNull().default(0),  // Time spent
  date: text('date').notNull(), // Date formatted as YYYY-MM-DD
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});
