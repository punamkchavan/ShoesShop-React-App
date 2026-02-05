import './ShoeBrandInfoTemp.css';
import shoe1 from '../../assets/shoes1.jpg';
import shoe2 from '../../assets/shoes2.jpg';
import shoe3 from '../../assets/shoes3.jpg';
import shoe4 from '../../assets/shoes4.jpg';

export default function ShoeBrandInfoTemp(){
    return(
        <>
        <div className='hero'>

            <section className='main-box'>
                <div className="image-wrapper">
                        <div className="image-box">
                             <img src={shoe1} alt="Shoe" />
                        </div>
                </div>
                        <h2>Skechers</h2>
                        <p> Choose from a wide range of trendy & comfort fit shoes.</p>
                <div className='price-row'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>

            <section className='main-box'>
                <div className="image-wrapper">
                        <div className="image-box">
                             <img src={shoe2} alt="Shoe" />
                        </div>
                </div>
                        <h2>Adidas</h2>
                        <p>Adidas running shoes designed for comfort and performance.</p>
                <div className='price-row'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>

            <section className='main-box'>
                <div className="image-wrapper">
                         <div className="image-box">
                             <img src={shoe3} alt="Shoe" />
                        </div>
                </div>   
                        <h2>Nike</h2>
                        <p>The best feature is advanced Air Cushioning Technology.</p>
                <div className='price-row'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>

            <section className='main-box'>
                <div className="image-wrapper">
                         <div className="image-box">
                             <img src={shoe4} alt="Shoe" />
                        </div>
                </div>  
                        <h2>Puma</h2> 
                        <p>Ultra-slim shoe designed to milliseconds off lap times.</p>
                <div className='price-row'>
                        <h3>Rs.1000</h3>
                        <button>Buy</button>
                </div>
            </section>
       </div>

       </>
        
    )
}