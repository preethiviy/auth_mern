export type LoginPayload = {
    email: string;
    password: string;
}

export type RegisterPayload = LoginPayload & {
    confirmPassword: string;
}

export type ResetPasswordPayload = {
    verificationCode: string;
    password: string;
}

export type Sessions = {
    _id: string;
    userAgent?: string;
    createdAt: string;
    expiresAt: string;
    isCurrent: false;
}[]

export type User = {
    _id: string;
    email: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
}

export type Session = {
    _id: string;
    isCurrent: boolean;
    userId: string;
    userAgent: string;
    expiresAt: string;
    createdAt: string;
}