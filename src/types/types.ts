export interface IProduct {
	productName: string;
	description: string;
	price: number;
	currency: number; // id da currency selecionada
	imgSrc?: string;
}

export interface ICurrency {
	id: number;
	name: string;
	label: string;
}
