import { createUser } from "../services/user";
import type { IUser } from "../types/types";

export const useRegister = () => {
	const register = async (user: Omit<IUser, "id">) => {
		return await createUser(user);
	};

	return { register };
};
