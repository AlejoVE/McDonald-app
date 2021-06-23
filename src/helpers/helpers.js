export const buttonGenerator = (
	isAdded,
	handleAddToCart,
	handleRemoveProduct
) => {
	let button = undefined;

	if (isAdded) {
		button = <button onClick={handleRemoveProduct}>Remove from cart</button>;
	} else {
		button = <button onClick={handleAddToCart}>Add to cart</button>;
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
			<div>
				{buttonGenerator(isAdded, handleAddToCart, handleRemoveProduct)}
			</div>
		);
	}

	return (
		<div>
			<button onClick={() => handleQuantity('-')}>-</button>
			<label>{quantity}</label>
			<button onClick={() => handleQuantity('+')}>+</button>
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

	return {hours, minutes};   

	 
}
