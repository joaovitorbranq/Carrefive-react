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
