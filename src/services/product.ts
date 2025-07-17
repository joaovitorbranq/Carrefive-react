import { api } from "./api";
import type { IProduct } from "../types/types";

interface ProductPage {
	content: IProduct[];
	totalPages: number;
	totalElements: number;
	number: number;
}

export const fetchProductsByType = async (
	productTypeId: number,
	page: number = 0,
	size: number = 10
): Promise<ProductPage> => {
	const response = await api.get(`/products`, {
		params: {
			productTypeId,
			page,
			size,
		},
	});
	return response.data;
};
