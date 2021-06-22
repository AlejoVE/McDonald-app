import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { Product } from './Product';

export const OrderPage = () => {
	const { initialState } = useContext(OrderContext);
	const { productsInCart } = initialState;

	return (
		<div>
			{productsInCart.map((product, i) => {
				return <Product product={product} type='order' key={i}></Product>;
			})}
		</div>
	);
};
