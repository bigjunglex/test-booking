import { integer, pgTable, varchar, serial, timestamp, unique } from "drizzle-orm/pg-core";


export const events = pgTable("events", {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    total_seats: integer(),
});


export const bookings = pgTable("bookings", {
    id: serial().primaryKey(),
    event_id: integer().references(() => events.id, {onDelete: 'cascade'}).notNull(),
    user_id: varchar({ length: 255 }).notNull(),
    created_at: timestamp().notNull().defaultNow(),
}, (t) => [ unique('booking_contraint').on(t.event_id, t.user_id) ]
);