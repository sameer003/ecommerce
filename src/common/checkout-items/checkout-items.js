import React from 'react'
import './checkout-items.css';
import Item from './item/item';
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from '../../redux/reducers/user/user.actions';

export default function CheckoutItems() {
    const cart = useSelector((state) => state.user.cart.sort((a,b) =>  a.id - b.id ));
    const dispatch = useDispatch();
    
    const onUpdate = (id, qty) => {
        dispatch(updateQuantity({id, qty}))
    }

    const onRemove = (id) => {
        dispatch(removeFromCart({id}))
    }
    
    return (
        <div>
            {cart.map(item => {
                return <Item key={item.id} product={item} onChange={(qty) => onUpdate(item.id, qty)} onRemove={()=> onRemove(item.id)}/>
            })}
        </div>
    )
}
