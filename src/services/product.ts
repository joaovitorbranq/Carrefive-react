import { api } from "./api";
import type { IProduct, IProductFormValues } from "../types/types";

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

export const createProduct = async (
	data: IProductFormValues,
	productTypeId: number
): Promise<IProduct> => {
	const response = await api.post("/products", {
		...data,
		productType: { id: productTypeId },
	});
	return response.data;
};

export const deleteProduct = async (id: number) => {
	const response = await api.delete(`/products/${id}`);
	return response.data;
};
