import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { calculatePrepareTime, calculateCost } from '../helpers/helpers';
import { Product } from './Product';

export const OrderPage = () => {
	const { initialState } = useContext(OrderContext);
	const { productsInCart } = initialState;

	const { basePrice, globalDiscount, totalToPay } = calculateCost(productsInCart);
	const {hours, minutes} = calculatePrepareTime(productsInCart);

	return (
		<div>
			<div className="order-header-container">
				<button><Link to='/list'>{'<'}</Link></button>
				<h1>Your order</h1>
			</div>
			{productsInCart.map((product, i) => {
				return <Product product={product} type='order' key={i}></Product>;
			})}
			<div className="order-details-container">
				<div className="order-detail-line">
					<h2>items</h2>
					<label>${basePrice.toFixed(2)}</label>
				</div>
				<div className="order-detail-line" >
					<h2>Discount</h2>
					<label>-${globalDiscount.toFixed(2)}</label>
				</div>
				<div className="order-detail-line">
					<h2>Cost</h2>
					<label>${totalToPay.toFixed(2)}</label>
				</div>
				<div className="order-detail-line">
					<h2>Prepare time</h2>
					<label>{hours === 0 ? `${minutes} minutes`: `${hours}h${minutes}m`}</label>
				</div>
				<button>Payment and delivery</button>
			</div>
		</div>
	);
};
