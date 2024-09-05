import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToDatabase from "./config/db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrors";
import { OK } from "./config/http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        origin: APP_ORIGIN,
        credentials: true,
    })
);
app.use(cookieParser());

// app.get("/health", async (req, res, next) => {
//     try {
//         // throw new Error("Test error");
//         return res.status(200).json({
//             status: "healthy"
//         })
//     } catch (error) {
//         next(error);
//     }
// });

app.get(
    "/health", 
    catchErrors(async (req, res, next) => {
    // throw new Error("Test error");
    return res.status(OK).json({
        status: "healthy"
    })
    
}));

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT} in ${NODE_ENV} environment.`)
    await connectToDatabase();
})