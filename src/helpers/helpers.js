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
	let cost = 0;
	let globalDiscount = 0;
	productsInCart.forEach((product) => {
		const discount = (product.price * product.discount) / 100;
		globalDiscount += discount * product.quantity;
		const price = product.price - discount;

		cost += price * product.quantity;
	});
	const totalToPay = cost - globalDiscount;
	return { cost, globalDiscount, totalToPay };
};
