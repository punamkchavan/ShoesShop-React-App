import './NavBar.css';
import NavBarCartBtn from './NavBarCartBtn';

export default function NavBar(props){
    return(
        <>
        <header className='main-header bg-gradient-to-br from-orange-900 via-purple-900 to-indigo-400 '>
            <h1 className='text-5xl ... font-bold font-serif text-outline'>StepUp</h1>
            <NavBarCartBtn onClick={props.onShowCart} />
        </header>
        </>
    )
}