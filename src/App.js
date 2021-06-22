import React, { useReducer } from 'react';
import { OrderContext } from './context/OrderContext';
import { orderReducer } from './context/orderReducer';
import { AppRouter } from './router/AppRouter';

export const App = () => {
	const [initialState, dispatch] = useReducer(orderReducer, {
		productsInCart: [],
		
	});
	return (
		<OrderContext.Provider value={{ initialState, dispatch }}>
			<AppRouter />
		</OrderContext.Provider>
	);
};
