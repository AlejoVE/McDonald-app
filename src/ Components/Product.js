import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { setActiveProduct } from '../actions/actions';
import { OrderContext } from '../context/OrderContext';
import {
	divGenerator,
	addProductToCart,
	removeProductFromCart,
	manageQuantityProduct,
	calculatePriceProduct,
} from '../helpers/helpers';

export const Product = (props) => {
	const { product, type } = props;
	const { img, name, price, id, discount } = product;
	let { quantity } = product;

	const priceToPay = calculatePriceProduct(price, discount);

	const { initialState, dispatch } = useContext(OrderContext);
	const { productsInCart, activeProducts } = initialState;

	const history = useHistory();

	const isAdded = productsInCart.some((product) => product.id === id);

	const handleAddProduct = () => {
		addProductToCart(dispatch, product);
	};

	const handleRemoveProduct = () => {
		removeProductFromCart(productsInCart, id, dispatch);
	};

	const handleQuantity = (action) => {
		manageQuantityProduct(action, productsInCart, id, quantity, dispatch);
	};

	const handleClick = () => {
		const includes = activeProducts.some((product) => product.id === id);

		if (includes) {
			history.push(`/product/${id}`);
			return;
		}

		dispatch(setActiveProduct(product));
		history.push(`/product/${id}`);
	};

	return (
		<div className='product-container'>
			<img
				onClick={handleClick}
				src={img}
				alt={name}
				width='100px'
				height='100px'
			></img>
			<div className='product-details-container'>
				<h1 className='product-title'>{name}</h1>
				{divGenerator(
					type,
					isAdded,
					quantity,
					handleQuantity,
					handleAddProduct,
					handleRemoveProduct
				)}
			</div>
			<div className='price-container'>
				{type === 'order' ? (
					<div className="edit-delete-buttons-container">
						<button
							type='button'
							className='btn btn-light'
							onClick={handleClick}
						>
							<i className='fas fa-pencil-alt death-text'></i>
						</button>
						<button
							type='button'
							className='btn btn-light'
							onClick={handleRemoveProduct}
						>
							<i className='far fa-trash-alt death-text'></i>
						</button>
					</div>
				) : (
					<div></div>
				)}
				<div className='price-details-container'>
					{discount > 0 && (
						<small className='line-through death-text'>${price.toFixed(2)}</small>
					)}
					<h2>${priceToPay.toFixed(2)}</h2>
				</div>
			</div>
		</div>
	);
};
