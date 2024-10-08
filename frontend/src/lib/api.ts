import API from "../config/apiClient";
import { LoginPayload, RegisterPayload, ResetPasswordPayload, Session, User } from "../types/types";

export const register = async (data: RegisterPayload) => API.post("/auth/register", data);
export const login = async (data: LoginPayload) => API.post("/auth/login", data);
export const logout = async () => API.get("/auth/logout");
export const verifyEmail = async (verificationCode: string | undefined) =>
  API.get(`/auth/email/verify/${verificationCode}`);
export const sendPasswordResetEmail = async (email: string) =>
  API.post("/auth/password/forgot", { email });
export const resetPassword = async ({ verificationCode, password }: ResetPasswordPayload) =>
  API.post("/auth/password/reset", { verificationCode, password });

export const getUser = async (): Promise<User> => API.get("/user");
export const getSessions = async (): Promise<Session[]> => API.get("/sessions");
export const deleteSession = async (id: string) => API.delete(`/sessions/${id}`);
