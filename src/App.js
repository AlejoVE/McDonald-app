import React, { useReducer } from 'react';
import { ListingPage } from './ Components/ListingPage';
import { OrderContext } from './context/OrderContext';
import { orderReducer } from './context/orderReducer';

export const App = () => {
	const [initialState, dispatch] = useReducer(orderReducer, {
		productsInCart: [],
	});
	return (
		<OrderContext.Provider value={{ initialState, dispatch }}>
			<ListingPage />
		</OrderContext.Provider>
	);
};
