import { types } from '../types/types';

export const orderReducer = (initialState = {}, action) => {
	switch (action.type) {
		case types.addToCart:
			return {
				...initialState,
				productsInCart: [...initialState.productsInCart, action.payload],
			};

		case types.incrementQuantity:
			return {
				...initialState,
				productsInCart: action.payload,
			};
		case types.removeFromCart:
			return {
				...initialState,
				productsInCart: action.payload,
			};
		case types.setActiveProduct:
			return {
				...initialState,
				activeProducts: [...initialState.activeProducts, action.payload]
			};

		default:
			return initialState;
	}
};
