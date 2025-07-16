import { createContext } from "react";
import type { IUser } from "../types/types";

export interface UserContextType {
	user: IUser | null;
	login: (user: IUser) => void;
	logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
	undefined
);
