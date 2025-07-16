export interface IProduct {
	name: string;
	description: string;
	price: number;
	currency: ICurrency;
	imgSrc?: string;
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
