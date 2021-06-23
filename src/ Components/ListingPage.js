import React from 'react';
import { products } from '../assets/products';
import { Product } from './Product';
import { Link } from 'react-router-dom';

export const ListingPage = () => {
	
	return (
		<div className="listing-container">
			{products.map((data, i) => {
				return <Product  product={data} type='list' key={data.id}></Product>;
			})}
			<button>
				<Link to='/order'>See cart</Link>
			</button>
		</div>
	);
};
