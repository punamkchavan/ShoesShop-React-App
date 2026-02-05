import CartIcon from '../Cart/CartIcon';
import './NavBarCartBtn.css';
import { useContext } from 'react';
import CartContext from '../../Context/cart-context';

export default function NavBarCartBtn(props){

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


    return(
        <>
        <button className='button' onClick={props.onClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span className='font-bold font-serif text-outline'>My Cart</span>
            <span className='badge bg-gradient-to-br from-orange-700 via-purple-1000 to-indigo-700'>{numberOfCartItems}</span>
        </button>
        </>
    )

}