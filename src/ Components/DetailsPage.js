import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import {
	addProductToCart,
	buttonGenerator,
	manageQuantityProduct,
	removeProductFromCart,
} from '../helpers/helpers';
import { SquareProductDetails } from './SquareProductDetails';
import { SquareIcon } from './SquareIcon';

export const DetailsPage = () => {
	const { initialState, dispatch } = useContext(OrderContext);
	const { activeProducts, productsInCart } = initialState;
	const [favorite, setFavorite] = useState(false);
	const { productId } = useParams();
	const history = useHistory();
	let [quantity, setQuantity] = useState(1);

	const product = activeProducts.filter((product) => product.id == productId);
	const isInTheCart = productsInCart.some(
		(product) => product.id == productId
	);
	const {
		name,
		price,
		description,
		prepareTimeMinutes,
		weight,
		img,
		discount: discountBrute,
		size,
		id,
	} = product[0];
	const isDiscount = discountBrute > 0;

	if (isInTheCart) {
		const [targetProduct] = productsInCart.filter(
			(product) => product.id == productId
		);
		quantity = targetProduct.quantity;
	}

	let priceToPay = 0;
	if (isDiscount) {
		const discount = (price * discountBrute) / 100;
		priceToPay = price - discount;
	}

	const handleGoBack = () => {
		history.goBack();
	};
	const handleGoToCart = () => {
		console.log('click');

		history.push('/order');
	};

	const handleAddToCart = () => {
		addProductToCart(dispatch, product[0], quantity);
	};

	const handleRemoveFromCart = () => {
		removeProductFromCart(productsInCart, id, dispatch);
	};

	const handleFavorite = () => {
		setFavorite(!favorite);
	};

	const handleQuantity = (action) => {
		if (isInTheCart) {
			manageQuantityProduct(action, productsInCart, id, quantity, dispatch);
			return;
		}

		if (action === '+') {
			setQuantity(quantity + 1);
		} else {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div>
			<div
				className='details-header'
				style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<button className='btn btn-light' onClick={handleGoBack}>
					<i className='fas fa-chevron-left'></i>
				</button>
				<div>
					<button onClick={handleFavorite} className='btn btn-light'>
						<i
							className={
								favorite ? 'fas fa-heart favorite' : 'far fa-heart'
							}
						></i>
					</button>
					<button className='btn btn-light' onClick={handleGoToCart}>
						<i className='fas fa-shopping-cart'></i>
					</button>
				</div>
			</div>
			<div className='burger-details-container'>
				{isDiscount && (
					<div
						className='alert alert-success discount'
						role='alert'
					>{`${discountBrute}% OFF`}</div>
				)}
				<h1>{name}</h1>
				{isDiscount ? (
					<h2>
						${priceToPay.toFixed(2)}{' '}
						<small className='death-text line-through'>
							${price.toFixed(2)}
						</small>
					</h2>
				) : (
					<h2>${price.toFixed(2)}</h2>
				)}
				<p>{description}</p>
				<div className='squares-container'>
					<SquareProductDetails
						title='Size'
						icon='hamburger'
						content={`${size}`}
					/>
					<SquareProductDetails
						title='Weight'
						icon='weight-hanging'
						content={`${weight}`}
					/>
					<SquareProductDetails
						title='Prepare Time'
						icon='clock'
						content={`${prepareTimeMinutes} minutes`}
					/>
				</div>
				<h3>Ingredients</h3>
				<div className='squares-container'>
					<SquareIcon icon='cheese' />
					<SquareIcon icon='pepper-hot' />
					<SquareIcon icon='seedling' />
					<SquareIcon icon='carrot' />
				</div>
				<h3>Bread</h3>
				<div className='squares-container'>
					<SquareIcon icon='bread-slice' />
					<SquareIcon icon='bread-slice' />
					<SquareIcon icon='bread-slice' />
				</div>
				<div className='details-buttons-container'>
					<div>
						<button
							className='btn btn-light'
							onClick={() => handleQuantity('-')}
						>
							-
						</button>
						<label>{quantity}</label>
						<button
							className='btn btn-light'
							onClick={() => handleQuantity('+')}
						>
							+
						</button>
					</div>
					{buttonGenerator(
						isInTheCart,
						handleAddToCart,
						handleRemoveFromCart
					)}
				</div>
			</div>
		</div>
	);
};
