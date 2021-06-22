import React, { useContext, useState } from 'react';
import { addToCart } from '../actions/actions';
import { OrderContext } from '../context/OrderContext';

export const Product = ({ product }) => {
	const { img, name, price } = product;
	const { initialState, dispatch } = useContext(OrderContext);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<div className='product-container'>
			<img src={img} alt={name} width='100px' height='100px'></img>
			<div>
				<h1>{name}</h1>
				<button onClick={handleAddToCart}>Add to cart</button>
			</div>
			<h2>Price: {price}</h2>
		</div>
	);
};
