import React from 'react';
import './checkout.css';
import CheckoutSummary from '../../common/checkout-summary/checkout-summary';
import CheckoutItems from '../../common/checkout-items/checkout-items';

export default function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout-items'>
                <CheckoutItems/>
            </div>
            <div className='checkout-summary'>
                <CheckoutSummary/>
            </div>
        </div>
    )
}
