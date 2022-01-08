import React, {useEffect, useState} from 'react';
import Card from '../../common/card/card';
import './main.css';

export default function Main() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.json').then(response=> response.json()).then(setProducts);
    }, []);

    
    return (
        <div className='main'>
            {
                products.map(product => {
                    return <Card key={product.product_image} product={product}/>
                })
            }
        </div>
    )
}
