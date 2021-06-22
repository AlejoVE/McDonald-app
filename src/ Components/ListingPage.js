import React from 'react';
import { products } from '../assets/products';
import { Product } from './Product';

export const ListingPage = () => {
	return (
		<div>
			{products.map((data, i) => {
				return <Product product={data} key={i}></Product>;
			})}
			<button>See cart</button>
		</div>
	);
};
