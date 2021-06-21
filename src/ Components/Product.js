import React from 'react';

export const Product = ({ product }) => {
	const { img, name, price } = product;

	return (
		<div className="product-container">
			<img src={img} alt={name} width='100px' height='100px'></img>
			<div>
				<h1>{name}</h1>
				<h2>Price: {price}</h2>
			</div>
			<button>Add to cart</button>
		</div>
	);
};
