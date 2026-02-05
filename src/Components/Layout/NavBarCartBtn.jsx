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
            <span className='font-serif font-bold text-outline'
                             >My Cart</span>
            <span className='badge bg-gradient-to-br from-orange-700 via-purple-900 to-indigo-700
                             text-xs sm:text-sm md:text-base
                             px-2 sm:px-3 md:px-4
                             py-0.5 sm:py-1
                             rounded-full'>{numberOfCartItems}</span>
        </button>
        </>
    )

}