import { types } from '../types/types';

export const orderReducer = (initialState = {}, action) => {
	switch (action.type) {
		case types.addToCart:
			return {
				productsInCart: [...initialState.productsInCart, action.payload],
			};

		case types.incrementQuantity:
			return {
				productsInCart: action.payload,
			};

		default:
			return initialState;
	}
};
