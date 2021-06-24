import React from 'react';
import { products } from '../assets/products';
import { Product } from './Product';
import { useHistory } from 'react-router-dom';

export const ListingPage = () => {
	const history = useHistory();

	const handleSeeCart = () => {
		history.push('/order');
	};
	return (
		<div className='listing-container'>
			{products.map((data, i) => {
				return <Product product={data} type='list' key={data.id}></Product>;
			})}
			<button onClick={handleSeeCart} className='bnt btn-primary button'>
				See cart
			</button>
		</div>
	);
};
