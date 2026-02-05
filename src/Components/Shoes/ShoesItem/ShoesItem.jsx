import './ShoesItem.css';
import ShoesItemForm from './ShoesItemForm';
import { useContext, useState } from 'react';
import CartContext from '../../../Context/cart-context';
export default function ShoesItem(props){

     const cartCtx = useContext(CartContext);

     const [selectedSize, setSelectedSize] = useState(null);

     const price = `Rs. ${props.price.toFixed(2)}`;

     const addToCartHandler = amount => {

      if (!selectedSize) {
      alert('Please select a size');
      return;
      }
            cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            size: selectedSize,
            });
        };

    return(
        <>
        <li  className='meal'>
            <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
            <div className='price'>size</div>
            <div>
                 {Object.entries(props.sizes)
            .filter(([_, isAvailable]) => isAvailable)
            .map(([size]) => (
              <button
                key={size}
                className={`sizes ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
            </div>
            </div>
            <div>
             <ShoesItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
        </>
    )
}