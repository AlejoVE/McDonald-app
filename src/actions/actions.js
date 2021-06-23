import { types } from '../types/types';

export const addToCart = (product, quantity) => ({
	type: types.addToCart,
	payload: { ...product, quantity },
});

export const removeFromCart = (products) => ({
	type: types.removeFromCart,
	payload: products,
});

export const manageQuantity = (productsInCart) => ({
	type: types.incrementQuantity,
	payload: productsInCart,
});

export const setActiveProduct = (product) => ({
	 type: types.setActiveProduct,
	 payload: {...product, ingredients: []}
})