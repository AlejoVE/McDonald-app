import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { calculatePrepareTime, calculateCost } from '../helpers/helpers';
import { Product } from './Product';
import Swal from 'sweetalert2';

export const OrderPage = () => {
	const { initialState } = useContext(OrderContext);
	const { productsInCart } = initialState;
	const history = useHistory();

	const { basePrice, globalDiscount, totalToPay } =
		calculateCost(productsInCart);
	const { hours, minutes } = calculatePrepareTime(productsInCart);

	const handleGoBack = () => {
		history.goBack();
	};

	const handlePay = () => {

		if(productsInCart.length <1){
			Swal.fire({
				title: 'Oops!',
				text: 'Your cart is empty, please buy some burgers!',
				icon: 'error',
				confirmButtonText: 'Ok',
			});
			return
		};
		Swal.fire({
			title: 'Order sent',
			text: 'Thank you for your order, enjoy your meal!',
			icon: 'success',
			confirmButtonText: 'Ok',
		});
	};

	return (
		<div>
			<div className='order-header-container'>
				<div className='order-header-button-container'>
					<button className='btn btn-light' onClick={handleGoBack}>
						<i className='fas fa-chevron-left'></i>
					</button>
				</div>
				<h1>Your order</h1>
			</div>
			{productsInCart.map((product, i) => {
				return <Product product={product} type='order' key={i}></Product>;
			})}
			<div className='order-details-container'>
				<div className='order-detail-line'>
					<h5 className='death-text'>Items</h5>
					<label>${basePrice.toFixed(2)}</label>
				</div>
				<div className='order-detail-line'>
					<h5 className='death-text'>Discount</h5>
					<label className='death-text'>
						-${globalDiscount.toFixed(2)}
					</label>
				</div>
				<div className='order-detail-line'>
					<h5 className='death-text'>Cost</h5>
					<label>
						<strong>${totalToPay.toFixed(2)}</strong>
					</label>
				</div>
				<div className='order-detail-line'>
					<h5 className='death-text'>Prepare time</h5>
					<label>
						{hours === 0 ? `${minutes} minutes` : `${hours}h${minutes}m`}
					</label>
				</div>
				<button
					onClick={handlePay}
					type='button'
					className='btn btn-warning button'
				>
					Payment and delivery
				</button>
			</div>
		</div>
	);
};
