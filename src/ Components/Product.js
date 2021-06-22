import React, { useContext } from 'react';
import { addToCart, manageQuantity } from '../actions/actions';
import { OrderContext } from '../context/OrderContext';
import { divGenerator } from '../helpers/helpers';

export const Product = (props) => {
	const { product, type } = props;
	const { img, name, price, id } = product;
	let { quantity } = product;
	const { initialState, dispatch } = useContext(OrderContext);
	const { productsInCart } = initialState;

	const isAdded = productsInCart.some((product) => product.id === id);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	const handleQuantity = (action) => {
		const index = productsInCart.findIndex((x) => x.id === id);
		const targetProduct = productsInCart[index];

		if (action === '-') {
			if (quantity <= 1) {
				return;
			}
			targetProduct.quantity -= 1;
		} else {
			targetProduct.quantity += 1;
		}

		productsInCart[index] = targetProduct;
		dispatch(manageQuantity(productsInCart));
	};

	return (
		<div className='product-container'>
			<img src={img} alt={name} width='100px' height='100px'></img>
			<div>
				<h1>{name}</h1>
				{divGenerator(
					type,
					isAdded,
					quantity,
					handleQuantity,
					handleAddToCart
				)}
			</div>
			<h2>Price: {price}</h2>
		</div>
	);
};
