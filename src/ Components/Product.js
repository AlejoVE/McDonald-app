import React, { useContext } from 'react';
import { addToCart, manageQuantity, removeFromCart } from '../actions/actions';
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

	const handleRemoveProduct = () => {
		const filteredProducts = productsInCart.filter(
			(product) => product.id !== id
		);
		dispatch(removeFromCart(filteredProducts));
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
					handleAddToCart,
					handleRemoveProduct
				)}
			</div>
			<div>
				{type === 'order' && (
					<button onClick={handleRemoveProduct}>
						<i className='far fa-trash-alt'></i>
					</button>
				)}
				<h2>{price}</h2>
			</div>
		</div>
	);
};
