import './NavBar.css';
import NavBarCartBtn from './NavBarCartBtn';

export default function NavBar(props){
    return(
        <>
        <header className='main-header bg-gradient-to-br from-orange-900 via-purple-900 to-indigo-400 '>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                           font-bold font-serif text-outline
                           text-center sm:text-left'
                           >StepUp</h1>
            <NavBarCartBtn onClick={props.onShowCart} />
        </header>
        </>
    )
}