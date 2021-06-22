import React, { useContext, useEffect } from 'react';
import { OrderContext } from '../context/OrderContext';
import { Product } from './Product';

export const OrderPage = () => {
	const { initialState } = useContext(OrderContext);
	const { productsInCart } = initialState;

	const calculateCost = () => {
		let cost = 0;
		let globalDiscount = 0;
		productsInCart.forEach((product) => {
			const discount = (product.price * product.discount) / 100;
			globalDiscount += discount * product.quantity;
			const price = product.price - discount;

			cost += price * product.quantity;
		});

		return { cost, globalDiscount };
	};

	const { cost, globalDiscount } = calculateCost();

	useEffect(() => {
		console.log('I changed');
	}, [productsInCart]);

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
						<label>${globalDiscount}</label>
					</div>
				</div>
				<button>Payment and delivery</button>
			</div>
		</div>
	);
};
