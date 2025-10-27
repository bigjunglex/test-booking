import express, {type Request, type Response, type NextFunction } from 'express';
import {type BookingPostRequest, createBookingEntry } from './db/queries.js';
import { PORT } from './constants.js';

const app = express();

app.use(express.json());
app.post('/api/bookings/reserve', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { event_id, user_id } = req.body as BookingPostRequest;
        if (!event_id || !user_id) {
            res.locals.code = 422;
            throw new Error('Invalid request');
        };
        const entry = await createBookingEntry({ event_id, user_id });
        if (!entry) {
            res.locals.code = 400;
            throw new Error('Invalid event/user combination');
        };
        res.status(200).end();
    } catch (error ) {
        next(error)
    }
})

app.use((err: Error, req: Request, res: Response) => {
    const code = res.locals.code ?? 500;
    res.status(code).end(err.message)
})

app.listen(PORT, () => {
    console.log(`[START]: Listinenig on ${PORT}`)
    console.log(`[API]: Avaible at POST: ${app.router.stack[1].route?.path}`)
})