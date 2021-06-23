import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { OrderContext } from '../context/OrderContext'
import { buttonGenerator, calculateCost } from '../helpers/helpers';
import {SquareProductDetails} from './SquareProductDetails'
import {SquareIcon} from './SquareIcon'

export const DetailsPage = () => {
    const {initialState} = useContext(OrderContext);
    const {activeProducts, productsInCart} = initialState;
    const {productId} = useParams();



    const product = activeProducts.filter(product=> product.id == productId)
    const isInTheCart = productsInCart.some(product=> product.id == productId);
    

    const {name, price, description, prepareTimeMinutes, weight, img, discount: discountBrute, size} = product[0];
    
    const isDiscount = discountBrute > 0;
    
    let priceToPay = 0
    if(isDiscount){
        const discount = (price * discountBrute) / 100;
        priceToPay = price - discount;
         
    }

    // const handleAddToCart = () => {
	
	// 	dispatch(addToCart(product));
	// };

    let quantity = 1;
    
    
    
    
    

    return (
        <div>
            <div>
            </div>
            <div>
                {isDiscount && <h2>{`${discountBrute}% OFF`}</h2>}
                <h1>{name}</h1>
                <h2>{isDiscount ? `${priceToPay} ${price}` :`${price}`}</h2>
                <p>{description}</p>
                <div>
                    <SquareProductDetails title="Size" icon="hamburger" content={`${size}`}  />
                    <SquareProductDetails title="Weight" icon= "weight-hanging" content={`${weight}`}/>
                    <SquareProductDetails title="Prepare Time" icon= "clock" content={`${prepareTimeMinutes} minutes`}/>
                </div>
                <div>
                    <h3>Ingredients</h3>
                    <SquareIcon icon="cheese" />
                    <SquareIcon icon="pepper-hot" />
                    <SquareIcon icon='seedling' />
                    <SquareIcon icon='carrot' />
                </div>
                <div>
                    <h3>Bread</h3>
                    <SquareIcon icon="bread-slice" />
                    <SquareIcon icon="bread-slice" />
                    <SquareIcon icon='bread-slice' />
                </div>
                <div>
                    <div>
                        <button>-</button>
                        <label>{quantity}</label>
                        <button>+</button>
                    </div>
                    {buttonGenerator(isInTheCart, )}
                </div>
            </div>
        </div>
    )
}
