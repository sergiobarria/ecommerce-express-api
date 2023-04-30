import express from 'express';
import config from 'config';

import { morganMiddleware } from './middleware';

export const app = express();
const NODE_ENV = config.get<string>('NODE_ENV');

// ===== Apply middlewares 👇🏼 =====
app.use(express.json());

if (NODE_ENV === 'development') {
    app.use(morganMiddleware);
}

// ===== Apply routes 👇🏼 =====

// ===== Apply prisma middlewares 👇🏼 =====
