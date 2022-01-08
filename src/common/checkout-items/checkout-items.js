import React from 'react'
import './checkout-items.css';
import Item from './item/item';
const item = {
    "name":"Women's High neck Gym Hoodie Zip Jacket 560 - Black",
    "price":"1,899",
    "mrp":"2,499",
    "discount":"23%",
    "product_image":"8578114",
    "category":"jackets"
}
export default function CheckoutItems() {
    return (
        <div>
            <Item product={item}/>
            <Item product={item}/>
            <Item product={item}/>
            <Item product={item}/>

        </div>
    )
}
