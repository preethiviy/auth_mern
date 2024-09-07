import mongoose from "mongoose";
import { thirtyDaysFromNow } from "../utils/date";

export interface SessionDocument extends mongoose.Document {
    userId: mongoose.Types.ObjectId,
    userAgent?: string,
    expiresAt: Date,
    createdAt: Date,
}

const SessionSchema = new mongoose.Schema<SessionDocument>(
    {
        userId: {
            ref: "User", 
            type: mongoose.Schema.Types.ObjectId, 
            required: true, 
            index: true
        },
        userAgent: {
            type: String, 
        },
        createdAt: {
            type: Date, 
            required: true, 
            default: Date.now
        },
        expiresAt: {
            type: Date, 
            required: true,
            default: thirtyDaysFromNow
        }
    }
);

const SessionModel = mongoose.model<SessionDocument>("session", SessionSchema);

export default SessionModel;