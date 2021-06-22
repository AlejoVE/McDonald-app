import { types } from '../types/types';

export const addToCart = (product) => ({
	type: types.addToCart,
	payload: product,
});
