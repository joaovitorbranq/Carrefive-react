import { api } from "./api";
import type { IUser } from "../types/types";

export const createUser = async (user: Omit<IUser, "id">): Promise<IUser> => {
	const response = await api.post("/users", user);
	return response.data;
};
