import CartIcon from '../Cart/CartIcon';
import './NavBarCartBtn.css';

export default function NavBarCartBtn(){

    return(
        <>
        <button className='button'>
            <span className='icon'>
                <CartIcon />
            </span>
            <span className='font-bold font-serif text-outline'>My Cart</span>
            <span className='badge bg-gradient-to-br from-orange-700 via-purple-1000 to-indigo-700'>0</span>
        </button>
        </>
    )

}