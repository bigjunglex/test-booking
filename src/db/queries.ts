import { db } from "./db.js";
import { bookings } from "./schema.js";

export type BookingEntry = typeof bookings.$inferSelect
export type BookingPostRequest = typeof bookings.$inferInsert

export async function createBookingEntry({event_id, user_id}: BookingPostRequest): Promise<BookingEntry> {
    const [result] = await db
        .insert(bookings)
        .values({ event_id, user_id }) 
        .onConflictDoNothing()
        .returning();
    return result
}