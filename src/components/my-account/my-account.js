import React, {useEffect} from 'react';
import './my-account.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyAccount() {
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const orders = useSelector((state) => state.user.orders);
    console.log({orders})
    const navigate = useNavigate();
    useEffect(() => {
        if(!loggedIn){
          navigate('/login')
        }
      }, [loggedIn]);
    return (
        <div className='my-account-container'>
            {orders.length === 0 && <h4>No Orders Yet!</h4>}
            {orders.length > 0 && <div className='order-list'><h4>Orders!</h4>
                {orders.map(order=>{
                return <div className='orders' key={order.order_id}>Order#{order.order_id} <span>Placed On:{(new Date(order.created_at)).toDateString()}</span></div>
            })}
            </div>}
            
        </div>
    )
}
