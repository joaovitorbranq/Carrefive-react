export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	imgSrc?: string | null;
	productType?: {
		id: number;
		name: string;
	};
}

export interface ICurrency {
	id: number;
	name: string;
	label: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	password: string;
	birthDate: string;
	isAdmin: boolean;
}

export interface IProductFormValues {
	name: string;
	description: string;
	price: number;
	imgSrc: string;
}
