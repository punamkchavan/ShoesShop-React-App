import './ShoesItem.css';

export default function ShoesItem(props){

     const price = `Rs. ${props.price.toFixed(2)}`;

    return(
        <>
        <li  className='meal'>
            <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
            <div className='price'>size</div>
            <div>
                 {Object.entries(props.sizes).map(([size]) => (
                       <button  className='sizes' key={size}>{size}</button>
                  ))}
            </div>
            </div>
            <div>
                {/* <MealsItemForm onAddToCart={addToCartHandler} /> */}
            </div>
        </li>
        </>
    )
}