export const formatNumberToPrice = (value: number): string => {
	return value.toFixed(2).replace(".", ",");
};
