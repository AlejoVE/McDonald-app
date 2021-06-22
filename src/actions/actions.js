import { types } from '../types/types';

export const addToCart = (product) => ({
	type: types.addToCart,
	payload: { ...product, quantity: 1 },
});

export const manageQuantity = (productsInCart) => ({
	type: types.incrementQuantity,
	payload: productsInCart,
});
