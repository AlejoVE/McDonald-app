import React, { useContext, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import {
	addProductToCart,
	buttonGenerator,
	calculateCost,
	manageQuantityProduct,
	removeProductFromCart,
} from '../helpers/helpers';
import { SquareProductDetails } from './SquareProductDetails';
import { SquareIcon } from './SquareIcon';

export const DetailsPage = () => {
	const { initialState, dispatch } = useContext(OrderContext);
	const { activeProducts, productsInCart } = initialState;
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
				<button onClick={handleGoBack}>{'<'}</button>
				<button>
					<i className='far fa-heart'></i>
				</button>
				<button onClick={handleGoToCart}>
					<i className='fas fa-shopping-cart'></i>
				</button>
			</div>
			<div>
				{isDiscount && <h2>{`${discountBrute}% OFF`}</h2>}
				<h1>{name}</h1>
				<h2>{isDiscount ? `${priceToPay} ${price}` : `${price}`}</h2>
				<p>{description}</p>
				<div>
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
				<div>
					<h3>Ingredients</h3>
					<SquareIcon icon='cheese' />
					<SquareIcon icon='pepper-hot' />
					<SquareIcon icon='seedling' />
					<SquareIcon icon='carrot' />
				</div>
				<div>
					<h3>Bread</h3>
					<SquareIcon icon='bread-slice' />
					<SquareIcon icon='bread-slice' />
					<SquareIcon icon='bread-slice' />
				</div>
				<div>
					<div>
						<button onClick={() => handleQuantity('-')}>-</button>
						<label>{quantity}</label>
						<button onClick={() => handleQuantity('+')}>+</button>
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
