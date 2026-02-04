import './AvailableShoes.css';
import Card from '../UI/Card';
import ShoesItem from './ShoesItem/ShoesItem';

const DummyShoes=[{
    id: 's1',
    name: 'Nike Air Max',
    description: 'Lightweight running shoes with air cushioning',
    price: 5999,
    sizes: {
      6: true,
      7: true,
      8: false,
      9: true,
    },
  },
  {
    id: 's2',
    name: 'Adidas Ultraboost',
    description: 'Comfortable shoes for daily training and running',
    price: 7499,
    sizes: {
      6: false,
      7: true,
      8: true,
      9: true,
    },
  },
  {
    id: 's3',
    name: 'Puma Casual Sneakers',
    description: 'Stylish sneakers for everyday wear',
    price: 4299,
    sizes: {
      6: true,
      7: true,
      8: true,
      9: false,
    },
  },
  {
    id: 's4',
    name: 'Reebok Sports Shoes',
    description: 'Durable shoes suitable for gym and sports',
    price: 3899,
    sizes: {
      6: true,
      7: false,
      8: true,
      9: true,
    },
  },
];

export default function AvailableShoes(){
    const shoesList = DummyShoes.map((shoes) => (
    <ShoesItem 
    key={shoes.id} 
    id={shoes.id}
    name={shoes.name}
    description={shoes.description}
    price={shoes.price}
    sizes={shoes.sizes}
    
    />
  ));
    return(
        <>
        <section className='shoes'>
        <Card>
        <ul>{shoesList}</ul>
        </Card>
        </section>
        </>
    )
}