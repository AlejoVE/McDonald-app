import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { setActiveProduct } from '../actions/actions';
import { OrderContext } from '../context/OrderContext';
import { divGenerator, addProductToCart, removeProductFromCart, manageQuantityProduct } from '../helpers/helpers';

export const Product = (props) => {
	const { product, type } = props;
	const { img, name, price, id } = product;
	let { quantity } = product;
	
	const { initialState, dispatch } = useContext(OrderContext);
	const { productsInCart, activeProducts } = initialState;

	const history = useHistory();

	const isAdded = productsInCart.some((product) => product.id === id);

	const handleAddProduct = () => {
		addProductToCart(dispatch, product);
	}

	const handleRemoveProduct = () => {
		removeProductFromCart(productsInCart, id, dispatch)
	};

	const handleQuantity = (action) => {
		manageQuantityProduct(action, productsInCart, id, quantity, dispatch)
	};

	const handleClick= () => {
		const includes = activeProducts.some(product => product.id === id);

		if(includes){
			history.push(`/product/${id}`);
			return;
		}

		dispatch(setActiveProduct(product));
		history.push(`/product/${id}`);

	}
	
	return (
		<div className='product-container'>
			<img onClick={handleClick}  src={img} alt={name} width='100px' height='100px'></img>
			<div>
				<h1>{name}</h1>
				{divGenerator(
					type,
					isAdded,
					quantity,
					handleQuantity,
					handleAddProduct,
					handleRemoveProduct
				)}
			</div>
			<div>
				{type === 'order' && (
					<button onClick={handleRemoveProduct}>
						<i className='far fa-trash-alt'></i>
					</button>
				)}
				<h2>{price}</h2>
			</div>
		</div>
	);
};
