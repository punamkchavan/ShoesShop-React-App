import './ShoesItem.css';

export default function ShoesItem(){
    return(
        <>
        <li className='meal'>
            <div>
            <h3>Name</h3>
            <div className='description'></div>
            <div className='price'>1000</div>
            </div>
            <div>
                {/* <MealsItemForm onAddToCart={addToCartHandler} /> */}
            </div>
        </li>
        </>
    )
}