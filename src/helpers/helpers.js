export const buttonGenerator = (isAdded, handleAddToCart) => {
	let button = undefined;

	if (isAdded) {
		button = <button>Remove from cart</button>;
	} else {
		button = <button onClick={handleAddToCart}>Add to cart</button>;
	}
	return button;
};

export const divGenerator = (type, isAdded, quantity, handleQuantity, handleAddToCart) => {
	if (type === 'list') {
		return <div>{buttonGenerator(isAdded, handleAddToCart)}</div>;
	}

	return (
		<div>
			<button onClick={() => handleQuantity('-')}>-</button>
			<label>{quantity}</label>
			<button onClick={() => handleQuantity('+')}>+</button>
		</div>
	);
};
