import React from 'react';
import './checkout-summary.css';
import Button from '../../ui/button';

export default function CheckoutSummary() {
    return (
      <div className="summary-content">
        <h4>PRICE DETAILS (2 Items)</h4>
        <h5>
          Total MRP <span>{1829}</span>
        </h5>
        <h5>
          Discount on MRP <span className='light-green'>-{600}</span>
        </h5>
        <h5>
          Shipping <span>{100}</span>
        </h5>
        <h4>
          Total Amount <span>1329</span>
        </h4>
        <Button onClick={() => console.log('clicked')}>PLACE ORDER</Button>
      </div>
    );
}
