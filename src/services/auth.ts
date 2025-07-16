import type { IUser } from "../types/types";
import { api } from "./api";

interface LoginPayload {
	email: string;
	password: string;
}

export const loginUser = async (payload: LoginPayload): Promise<IUser> => {
	const response = await api.post<IUser>("/users/login", payload);
	return response.data;
};
