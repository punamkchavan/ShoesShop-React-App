import './ShoeBrandInfoTemp.css';
import shoe1 from '../../assets/shoes1.jpg';
import shoe2 from '../../assets/shoes2.jpg';
import shoe3 from '../../assets/shoes3.jpg';
import shoe4 from '../../assets/shoes4.jpg';

export default function ShoeBrandInfoTemp(){
    return(
        <>
        <div className='hero bg-gradient-to-br from-orange-500 via-purple-900 to-indigo-1000'>

            <section className='summary'>
                <div className="w-full h-52 bg-white rounded-2xl shadow-lg p-4">
                        <img src={shoe1} 
                        alt="Shoe"
                        className="w-full h-full object-cover rounded-xl"
                        />
                </div>
                        <h2>Skechers</h2>
                        <p> Choose from a wide range of trendy & comfort fit shoes.</p>
                <div className='price-row flex items-center justify-between mt-4'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>

            <section className='summary'>
                <div className="w-full h-52 bg-white rounded-2xl shadow-lg p-4">
                        <img
                            src={shoe2}
                            alt="Shoe"
                            className="w-full h-full object-cover rounded-xl"
                        />
                </div>
                        <h2>Adidas</h2>
                        <p>Adidas running shoes designed for comfort and performance.</p>
                <div className='price-row flex items-center justify-between mt-4'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>

            <section className='summary'>
                <div className="w-full h-52 bg-white rounded-2xl shadow-lg p-4">
                        <img
                            src={shoe3}
                            alt="Shoe"
                            className="w-full h-full object-cover rounded-xl"
                        />
                </div>   
                        <h2>Nike</h2>
                        <p>One of the best feature is advanced Air Cushioning Technology.</p>
                <div className='price-row flex items-center justify-between mt-4'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>

            <section className='summary'>
                <div className="w-full h-52 bg-white rounded-2xl shadow-lg p-4">
                        <img
                            src={shoe4}
                            alt="Shoe"
                            className="w-full h-full object-cover rounded-xl"
                        />
                </div>  
                        <h2>Puma</h2> 
                        <p>Ultra-slim driving shoe designed to shave milliseconds off lap times.</p>
                <div className='price-row flex items-center justify-between mt-4'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>
       </div>

       </>
        
    )
}