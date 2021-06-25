import { addToCart, manageQuantity, removeFromCart } from '../actions/actions';

export const addProductToCart = (dispatch, product, quantity = 1) => {
	dispatch(addToCart(product, quantity));
};

export const removeProductFromCart = (productsInCart, id, dispatch) => {
	const filteredProducts = productsInCart.filter(
		(product) => product.id !== id
	);

	dispatch(removeFromCart(filteredProducts));
};

export const manageQuantityProduct = (
	action,
	productsInCart,
	id,
	quantity,
	dispatch
) => {
	const index = productsInCart.findIndex((x) => x.id === id);
	const targetProduct = productsInCart[index];

	if (action === '-') {
		if (quantity <= 1) {
			return;
		}
		targetProduct.quantity -= 1;
	} else {
		targetProduct.quantity += 1;
	}

	productsInCart[index] = targetProduct;
	dispatch(manageQuantity(productsInCart));
};

export const buttonGenerator = (
	isAdded,
	handleAddToCart,
	handleRemoveProduct
) => {
	let button = undefined;

	if (isAdded) {
		button = (
			<button className='btn btn-danger' onClick={handleRemoveProduct}>
				Remove from cart
			</button>
		);
	} else {
		button = (
			<button
				type='button'
				className='btn btn-success'
				onClick={handleAddToCart}
			>
				Add to cart 
			</button>
		);
	}
	return button;
};

export const divGenerator = (
	type,
	isAdded,
	quantity,
	handleQuantity,
	handleAddToCart,
	handleRemoveProduct
) => {
	if (type === 'list') {
		return (
			<div className='add-button-container'>
				{buttonGenerator(isAdded, handleAddToCart, handleRemoveProduct)}
			</div>
		);
	}

	return (
		<div>
			<button
				type='button'
				className='btn btn-light'
				onClick={() => handleQuantity('-')}
			>
				-
			</button>
			<label>{quantity}</label>
			<button
				type='button'
				className='btn btn-light'
				onClick={() => handleQuantity('+')}
			>
				+
			</button>
		</div>
	);
};

export const calculateCost = (productsInCart) => {
	let globalDiscount = 0;
	let basePrice = 0;

	productsInCart.forEach((product) => {
		const discount = (product.price * product.discount) / 100;
		globalDiscount += discount * product.quantity;
		basePrice += product.price * product.quantity;
	});

	const totalToPay = basePrice - globalDiscount;
	return { basePrice, globalDiscount, totalToPay };
};

export const calculatePrepareTime = (productsInCart) => {
	let globalCookingTime = 0;

	productsInCart.forEach((product) => {
		globalCookingTime += product.prepareTimeMinutes * product.quantity;
	});

	const hours = Math.floor(globalCookingTime / 60);
	const minutes = globalCookingTime % 60;

	return { hours, minutes };
};

export const calculatePriceProduct = (productPrice, productDiscount) => {
	const discount = (productPrice * productDiscount) / 100;
	const priceToPay = productPrice - discount;
	return priceToPay;
};
