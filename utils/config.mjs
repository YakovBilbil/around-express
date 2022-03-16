import rateLimit from 'express-rate-limit'

const mongoServerAddress = "mongodb://localhost:27017/aroundb";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})

export { mongoServerAddress, limiter };