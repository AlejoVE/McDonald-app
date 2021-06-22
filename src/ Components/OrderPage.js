import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { calculateCost } from '../helpers/helpers';
import { Product } from './Product';

export const OrderPage = () => {
	const { initialState } = useContext(OrderContext);
	const { productsInCart } = initialState;

	const { cost, globalDiscount, totalToPay } = calculateCost(productsInCart);

	return (
		<div>
			{productsInCart.map((product, i) => {
				return <Product product={product} type='order' key={i}></Product>;
			})}
			<div>
				<div>
					<div>
						<h2>items</h2>
						<h2>Discount</h2>
						<h2>Cost</h2>
					</div>
					<div>
						<label>${cost}</label>
						<label>-${globalDiscount}</label>
						<label>${totalToPay}</label>
					</div>
				</div>
				<button>Payment and delivery</button>
			</div>
		</div>
	);
};
