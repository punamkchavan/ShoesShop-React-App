import './CartItems.css';

export default function CartItem(props){
        
        const price = `Rs. ${props.price.toFixed(2)}`;

    return (
        <li className='cart-item'>
        <div>
            <h2>{props.name}</h2>
            <div className='summary'>
            <span className='price'>{price}</span>
            <span className='amount'>X {props.amount}</span>
            <span className='size'>Size {props.size}</span>
            </div>
        </div>
        <div className='actions'>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
        </li>
    );

}